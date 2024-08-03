




const express = require('express');
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');
const axios = require('axios');
const nodeHtmlToImage = require('node-html-to-image');
const bcrypt = require('bcrypt');
const { PDFDocument, rgb } = require('pdf-lib');
const app = express();
const puppeteer = require('puppeteer');
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;
const fs = require('fs');




// Middleware to parse JSON bodies
app.use(bodyParser.json());



const parseTimeEstimate = (estimate) => {
	const timeParts = estimate.split(' ');
	let hours = 0;
	let minutes = 0;
  
	timeParts.forEach(part => {
	  if (part.endsWith('d')) {
		hours += parseFloat(part) * 8; // 1 day = 8 hours
	  } else if (part.endsWith('h')) {
		hours += parseFloat(part);
	  } else if (part.endsWith('m')) {
		minutes += parseFloat(part);
	  }
	});
  
	// Convert minutes to hours
	hours += minutes / 60;
  
	return hours;
  };


  app.post('/api/generate-invoice', async (req, res) => {
	const { employeeName } = req.body;
  
	try {
	  const employee = await prisma.user.findUnique({ where: { name: employeeName } });
	  if (!employee) {
		return res.status(404).json({ error: 'Employee not found' });
	  }
  
	  const response = await axios.get(JIRA_API_URL, {
		params: {
		  jql: `assignee="${employeeName}"`,
		  fields: 'summary,timetracking',
		  maxResults: 1000
		},
		headers: {
		  Authorization: `Basic ${Buffer.from(`${JIRA_USER_EMAIL}:${JIRA_API_TOKEN}`).toString('base64')}`,
		  Accept: 'application/json',
		},
	  });
  
	  if (!response.data.issues || response.data.issues.length === 0) {
		return res.status(500).json({ error: 'No issues found for the employee in Jira' });
	  }
  
	  let totalHours = 0;
	  const tasks = response.data.issues.map((issue) => {
		const originalEstimate = issue.fields.timetracking?.originalEstimate || '0h';
		const hours = parseTimeEstimate(originalEstimate);
		totalHours += hours;
  
		return {
		  title: issue.fields.summary,
		  originalEstimate: originalEstimate,
		  hours: hours
		};
	  });
  
	  const hourlyRate = employee.rate || 0;
  
	  // Correct rounding logic for total hours
	  const totalHoursFormatted = totalHours.toFixed(2); // Ensure 2 decimal places for hours
	  const totalAmount = parseFloat(totalHoursFormatted) * hourlyRate; // Use formatted hours
	  const totalAmountFormatted = (Math.round(totalAmount * 100) / 100).toFixed(2); // Round to 2 decimal places
  
	  // Debug information
	  console.log('Parsed Tasks:', tasks);
	  console.log('Total Hours:', totalHours);
	  console.log('Hourly Rate:', hourlyRate);
	  console.log('Total Amount:', totalAmount);
  
	  console.log('Formatted Total Hours:', totalHoursFormatted);
	  console.log('Formatted Total Amount:', totalAmountFormatted);
  
	  const templateBytes = fs.readFileSync(path.join(__dirname, 'invoice', 'INVOICE.pdf'));
	  const pdfDoc = await PDFDocument.load(templateBytes);
	  const pages = pdfDoc.getPages();
	  const firstPage = pages[0];
  
	  // Table Header
	  const tableY = 540;
	  firstPage.drawText('Description', { x: 50, y: tableY, size: 12, color: rgb(0, 0, 0) });
	  firstPage.drawText('Hours', { x: 550, y: tableY, size: 12, color: rgb(0, 0, 0) });
  
	  // Draw header line
	  firstPage.drawLine({
		start: { x: 50, y: tableY - 5 },
		end: { x: 600, y: tableY - 5 },
		thickness: 1,
		color: rgb(0, 0, 0),
	  });
  
	  // Draw vertical lines
	  firstPage.drawLine({
		start: { x: 50, y: tableY - 5 },
		end: { x: 50, y: tableY - (tasks.length * 20) - 10 },
		thickness: 1,
		color: rgb(0, 0, 0),
	  });
	  firstPage.drawLine({
		start: { x: 550, y: tableY - 5 },
		end: { x: 550, y: tableY - (tasks.length * 20) - 10 },
		thickness: 1,
		color: rgb(0, 0, 0),
	  });
	  firstPage.drawLine({
		start: { x: 600, y: tableY - 5 },
		end: { x: 600, y: tableY - (tasks.length * 20) - 10 },
		thickness: 1,
		color: rgb(0, 0, 0),
	  });
  
	  // Draw table rows with separators
	  let taskY = tableY - 20;
	  tasks.forEach((task) => {
		firstPage.drawText(task.title, { x: 50, y: taskY, size: 10, color: rgb(0, 0, 0) });
		firstPage.drawText(task.hours.toFixed(2), { x: 570, y: taskY, size: 10, color: rgb(0, 0, 0) }); // Ensure hours are displayed with two decimal places
  
		// Draw row separator
		firstPage.drawLine({
		  start: { x: 50, y: taskY - 10 },
		  end: { x: 600, y: taskY - 10 },
		  thickness: 1,
		  color: rgb(0, 0, 0),
		});
  
		taskY -= 20;
	  });
  
	  firstPage.drawText(`Total Hours: ${totalHoursFormatted}h`, { x: 50, y: taskY - 20, size: 12, color: rgb(1, 0, 0) });
	  firstPage.drawText(`Total Amount: $${totalAmountFormatted}`, { x: 50, y: taskY - 40, size: 12, color: rgb(1, 0, 0) });
  
	  const pdfBytes = await pdfDoc.save();
	  const outputPath = path.join(__dirname, 'invoice', 'INVOICE_OUTPUT.pdf');
	  fs.writeFileSync(outputPath, pdfBytes);
  
	  res.json({ invoiceUrl: `http://localhost:${PORT}/invoice/INVOICE_OUTPUT.pdf` });
	} catch (error) {
	  console.error('Error generating invoice:', error.response ? error.response.data : error.message);
	  res.status(500).json({ error: 'Failed to generate invoice' });
	}
  });


app.post('/signup', async (req, res) => {
  const { username, password} = req.body;
  console.log(`Check user: ${username}`);

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await prisma.user.create({
      data: {
        name: username,
        password: hashedPassword,
        education: '',
        privileges: 'MANAGER',
        email: 'user@gmail.com',
        type: 'Employee'
      },
    });
    console.log('User created successfully', newUser);
    res.json({ success: true });
  } catch (error) {
    console.log('Error', error);
    res.status(500).json({ success: false, message: 'Error' });
  }
});






app.post('/login', async (req, res) => {
  const { name, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { name }
    });

    if (!user) {
      return res.status(401).json({ success: false, message: 'Authentication failed' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Authentication failed' });
    }

    return res.status(200).json({ success: true, message: 'Login successful' });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ success: false, message: 'Database error' });
  }
});


app.get('/api/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});




app.get('/api/user/:username', async (req, res) => {
  const { username } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { name: username },
      select: {
        privileges: true,
        skills: true,
        education: true,
        workExperience: true,
        rate: true,
        type: true,
        projectAccess: true,
        personalGoals: true,
        avatarUrl: true
      }
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Error message:', error);
    res.status(500).json({ message: 'Database error' });
  }
});



//Photo




const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });



// Serve static files for uploads
app.use('/uploads', express.static('uploads'));

// Endpoint to handle avatar upload
// app.post('/api/user/:username/avatar', upload.single('avatar'), async (req, res) => {
//   try {
//     const { username } = req.params;
//     const avatarUrl = `/uploads/${req.file.filename}`;

//     const user = await prisma.user.update({
//       where: { name: username },
//       data: { avatarUrl: avatarUrl }
//     });

//     res.json({ message: 'Avatar uploaded successfully', avatarUrl });
//   } catch (error) {
//     console.error('Error uploading avatar:', error);
//     res.status(500).json({ error: 'Error uploading avatar' });
//   }
// });

app.post('/api/user/:username/avatar', upload.single('avatar'), async (req, res) => {
  try {
    const { username } = req.params;
    const avatarUrl = `/uploads/${req.file.filename}`;
    const user = await prisma.user.update({
      where: { name: username },
      data: { avatarUrl: avatarUrl }
    });
    res.json({ message: 'Avatar updated successfully', avatarUrl });
  } catch (error) {
    console.error('Error updating avatar:', error);
    res.status(500).json({ error: 'Error updating avatar' });
  }
});



app.post('/api/user/avatar', upload.single('avatar'), async (req, res) => {
  try {
    const { id } = req.body;
    const avatarUrl = `/uploads/${req.file.filename}`;
    const user = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { avatarUrl: avatarUrl }
    });
    res.json({ message: 'Avatar uploaded successfully', avatarUrl });
  } catch (error) {
    console.error('Error uploading avatar:', error);
    res.status(500).json({ error: 'Error uploading avatar' });
  }
});


app.post('/api/user/delete-avatar', async (req, res) => {
  try {
    const { id } = req.body;

    // Fetch the current user to get the avatar URL
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });

    if (user && user.avatarUrl) {
      const filePath = path.join(__dirname, 'uploads', user.avatarUrl.replace('/uploads/', ''));

      // Delete the avatar file
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error('Error deleting avatar file:', err);
          return res.status(500).json({ error: 'Error deleting avatar file' });
        }

        // Update the user record to remove the avatar URL
        prisma.user.update({
          where: { id: parseInt(id) },
          data: { avatarUrl: null },
        })
        .then(() => {
          res.json({ message: 'Avatar deleted successfully' });
        })
        .catch(updateError => {
          console.error('Error updating user record:', updateError);
          res.status(500).json({ error: 'Error updating user record' });
        });
      });
    } else {
      res.status(404).json({ error: 'User or avatar not found' });
    }
  } catch (error) {
    console.error('Error deleting avatar:', error);
    res.status(500).json({ error: 'Error deleting avatar' });
  }
});



////for list







app.post('/api/user/upload-avatar', upload.single('avatar'), async (req, res) => {
  try {
    const { id } = req.body;
    const avatarUrl = `/uploads/${req.file.filename}`;
    const user = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { avatarUrl: avatarUrl}
    });
    res.json({ message: 'Avatar uploaded successfully', avatarUrl });
  } catch (error) {
    console.error('Error uploading avatar:', error);
    res.status(500).json({ error: 'Error uploading avatar' });
  }
});



// Endpoint to delete avatar
app.post('/api/user/:username/delete-avatar', async (req, res) => {
  const { username } = req.params;

  try {
    // Find the user
    const user = await prisma.user.findUnique({
      where: { name: username }
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Delete the avatar file from the server
    const avatarPath = path.join(__dirname, 'uploads', user.avatarUrl.replace('/uploads/', ''));
    fs.unlinkSync(avatarPath);

    // Update the user record to remove the avatar URL
    await prisma.user.update({
      where: { name: username },
      data: { avatarUrl: null }
    });

    res.json({ message: 'Avatar deleted successfully' });
  } catch (error) {
    console.error('Error deleting avatar:', error);
    res.status(500).json({ message: 'Error deleting avatar' });
  }
});





app.post('/api/user/save', async (req, res) => {
  try {
    const { id, name, type, skills, education, workExperience, rate, projectAccess, personalGoals, avatarUrl } = req.body;
    const user = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { name, type, skills, education, workExperience, rate, projectAccess, personalGoals, avatarUrl }
    });
    res.json({ message: 'User data saved successfully' });
  } catch (error) {
    console.error('Error saving user data:', error);
    res.status(500).json({ error: 'Error saving user data' });
  }
});








// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../front-end/build')));
app.use('/invoice', express.static(path.join(__dirname, 'invoice')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../front-end/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const { PrismaClient } = require('@prisma/client');
// const axios = require('axios');
// const nodeHtmlToImage = require('node-html-to-image');
// const bcrypt = require('bcrypt');
// const app = express();
// const puppeteer = require('puppeteer');
// const prisma = new PrismaClient();
// const PORT = process.env.PORT || 3000;

// // Middleware to parse JSON bodies
// app.use(bodyParser.json());


// // Add this endpoint to your existing Express server
// app.get('/api/users', async (req, res) => {
//   try {
//     const users = await prisma.user.findMany();
//     res.json(users);
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     res.status(500).json({ error: 'Failed to fetch users' });
//   }
// });




// const parseTimeEstimate = (estimate) => {
//   const timeParts = estimate.split(' ');
//   let hours = 0;

//   timeParts.forEach(part => {
//     if (part.endsWith('d')) {
//       // Convert days to hours (assume 8 hours per day)
//       hours += parseInt(part, 10) * 8;
//     } else if (part.endsWith('h')) {
//       hours += parseInt(part, 10);
//     }
//   });

//   return hours;
// };

// app.post('/api/generate-invoice', async (req, res) => {
//   const { employeeName } = req.body;

//   try {
//     // Find the employee in the database
//     const employee = await prisma.user.findUnique({ where: { name: employeeName } });
//     if (!employee) {
//       return res.status(404).json({ error: 'Employee not found' });
//     }

//     // Fetch all tasks from Jira (including completed tasks)
//     const response = await axios.get(JIRA_API_URL, {
//       params: {
//         jql: `assignee="${employeeName}"`, // Removed status filter to include all tasks
//         fields: 'summary,timetracking',
//         maxResults: 1000 // Adjust as needed
//       },
//       headers: {
//         Authorization: `Basic ${Buffer.from(`${JIRA_USER_EMAIL}:${JIRA_API_TOKEN}`).toString('base64')}`,
//         Accept: 'application/json',
//       },
//     });

//     // Log entire response to debug
//     console.log('Jira API Response:', JSON.stringify(response.data, null, 2));

//     if (!response.data.issues || response.data.issues.length === 0) {
//       return res.status(500).json({ error: 'No issues found for the employee in Jira' });
//     }

//     // Process the Jira response
//     let totalHours = 0;
//     const tasks = response.data.issues.map((issue) => {
//       const originalEstimate = issue.fields.timetracking?.originalEstimate || '0h';
//       const hours = parseTimeEstimate(originalEstimate);
//       totalHours += hours;

//       return {
//         title: issue.fields.summary,
//         originalEstimate: originalEstimate,
//       };
//     });

//     const hourlyRate = 10; // $10 per hour
//     const totalAmount = totalHours * hourlyRate;

//     // Create invoice content
//     const invoiceContent = tasks.map((task) => {
//       return `Task: ${task.title}, Time: ${task.originalEstimate}`;
//     }).join('<br>') + `<br><br>Total Hours: ${totalHours}h<br>Total Amount: $${totalAmount}`;

//     // Generate invoice HTML
//     const invoiceHtml = `
//       <html>
//         <body>
//           <h1>Invoice for ${employeeName}</h1>
//           <p>${invoiceContent}</p>
//         </body>
//       </html>
//     `;

//     // Generate PNG from HTML
//     const imagePath = path.join(__dirname, 'invoice.png');
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.setContent(invoiceHtml);
//     await page.screenshot({ path: imagePath });

//     await browser.close();

//     // Respond with the URL of the generated invoice
//     res.json({ invoiceUrl: `http://localhost:${PORT}/invoice.png` });
//   } catch (error) {
//     console.error('Error generating invoice:', error.response ? error.response.data : error.message);
//     res.status(500).json({ error: 'Failed to generate invoice' });
//   }
// });


// app.get('/api/user/:username', async (req, res) => {
//   const {username} = req.params;



//   try{
//     const user = await prisma.user.findUnique({
//       where: {name: username},
//     });

//     if(!user){
//       return res.status(404).json({message: 'User not found'});
//     }

//     res.json({privileges: user.privileges});
//   }catch (error){
//     console.error('Error message');
//     res.status(500).json({message: 'Database error'});
//   }
// })

// app.post('/signup', async (req, res) => {
//   const { username, password} = req.body;
//   console.log(`Check user: ${username}`);

//   try {
//     const saltRounds = 10;
//     const hashedPassword = await bcrypt.hash(password, saltRounds);

//     const newUser = await prisma.user.create({
//       data: {
//         name: username,
//         password: hashedPassword,
//         education: '',
//         privileges: 'MANAGER',
//         email: 'user@gmail.com'
//       },
//     });
//     console.log('User created successfully', newUser);
//     res.json({ success: true });
//   } catch (error) {
//     console.log('Error', error);
//     res.status(500).json({ success: false, message: 'Error' });
//   }
// });






// // app.post('/login', async (req, res) => {
// //   const {username, password} = req.body;


// //   try{

// //   const user = await prisma.user.findUnique({where: {name: username}});

// //   const isMatch = await bcrypt.compare(password, user.password);

// //   if(!isMatch){
// //     return res.status(401).json({message: 'Authentication failed'});
// //   }

// //   }catch (error){
// //     res.status(500).json({message: 'Database error'});
// //   }

// // })

// // app.post('/login', async (req, res) => {
// //   const { name, password } = req.body;

// //   try {
// //     const user = await prisma.user.findUnique({
// //       where: { name: name },
// //     });

// //     if (!user) {
// //       console.log('User not found');
// //       return res.status(401).json({ message: 'User not found' });
// //     }

// //     const isMatch = await bcrypt.compare(password, user.password);

// //     if (!isMatch) {
// //       console.log('Authentication failed');
// //       return res.status(401).json({ message: 'Authentication failed' });
// //     }

// //     // Successful login
// //     res.json({ success: true, message: 'Login successful' });
// //   } catch (error) {
// //     console.error('Database error:', error);
// //     res.status(500).json({ message: 'Database error', error: error.message });
// //   }
// // });





// app.post('/login', async (req, res) => {
//   const { name, password } = req.body;

//   try {
//     const user = await prisma.user.findUnique({
//       where: { name }
//     });

//     if (!user) {
//       return res.status(401).json({ success: false, message: 'Authentication failed' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(401).json({ success: false, message: 'Authentication failed' });
//     }

//     return res.status(200).json({ success: true, message: 'Login successful' });
//   } catch (error) {
//     console.error('Database error:', error);
//     return res.status(500).json({ success: false, message: 'Database error' });
//   }
// });






// // Route handlers
// app.get('/employees', async (req, res) => {
//   try {
//     const employees = await prisma.user.findMany();
//     res.json(employees);
//   } catch (error) {
//     console.error('Error fetching employees:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.post('/employees', async (req, res) => {
//   const { name, skills, education } = req.body;
//   try {
//     const newEmployee = await prisma.user.create({
//       data: { name, skills, education }
//     });
//     res.json(newEmployee);
//   } catch (error) {
//     console.error('Error creating employee:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, '../front-end/build')));
// app.use('/invoice.png', express.static(path.join(__dirname, 'invoice.png')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../front-end/build/index.html'));
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


//























const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');
const axios = require('axios');
const nodeHtmlToImage = require('node-html-to-image');
const bcrypt = require('bcrypt');
const app = express();
const puppeteer = require('puppeteer');
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;



// Middleware to parse JSON bodies
app.use(bodyParser.json());







const parseTimeEstimate = (estimate) => {
  const timeParts = estimate.split(' ');
  let hours = 0;

  timeParts.forEach(part => {
    if (part.endsWith('d')) {
      // Convert days to hours (assume 8 hours per day)
      hours += parseInt(part, 10) * 8;
    } else if (part.endsWith('h')) {
      hours += parseInt(part, 10);
    }
  });

  return hours;
};





app.post('/api/generate-invoice', async (req, res) => {
  const { employeeName } = req.body;

  try {
    // Find the employee in the database
    const employee = await prisma.user.findUnique({ where: { name: employeeName } });
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    // Fetch all tasks from Jira (including completed tasks)
    const response = await axios.get(JIRA_API_URL, {
      params: {
        jql: `assignee="${employeeName}"`, // Removed status filter to include all tasks
        fields: 'summary,timetracking',
        maxResults: 1000 // Adjust as needed
      },
      headers: {
        Authorization: `Basic ${Buffer.from(`${JIRA_USER_EMAIL}:${JIRA_API_TOKEN}`).toString('base64')}`,
        Accept: 'application/json',
      },
    });

    // Log entire response to debug
    console.log('Jira API Response:', JSON.stringify(response.data, null, 2));

    if (!response.data.issues || response.data.issues.length === 0) {
      return res.status(500).json({ error: 'No issues found for the employee in Jira' });
    }

    // Process the Jira response
    let totalHours = 0;
    const tasks = response.data.issues.map((issue) => {
      const originalEstimate = issue.fields.timetracking?.originalEstimate || '0h';
      const hours = parseTimeEstimate(originalEstimate);
      totalHours += hours;

      return {
        title: issue.fields.summary,
        originalEstimate: originalEstimate,
      };
    });

    const hourlyRate = 10; // $10 per hour
    const totalAmount = totalHours * hourlyRate;

    // Create invoice content
    const invoiceContent = tasks.map((task) => {
      return `Task: ${task.title}, Time: ${task.originalEstimate}`;
    }).join('<br>') + `<br><br>Total Hours: ${totalHours}h<br>Total Amount: $${totalAmount}`;

    // Generate invoice HTML
    const invoiceHtml = `
      <html>
        <body>
          <h1>Invoice for ${employeeName}</h1>
          <p>${invoiceContent}</p>
        </body>
      </html>
    `;

    // Generate PNG from HTML
    const imagePath = path.join(__dirname, 'invoice.png');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(invoiceHtml);
    await page.screenshot({ path: imagePath });

    await browser.close();

    // Respond with the URL of the generated invoice
    res.json({ invoiceUrl: `http://localhost:${PORT}/invoice.png` });
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


// Endpoint to save user data
// app.post('/api/user/save', async (req, res) => {
//   const { name, skills, education, rate, type, workExperience, projectAccess, personalGoals } = req.body;

//   try {
//     const updatedUser = await prisma.user.update({
//       where: { name },
//       data: {
//         skills,
//         education,
//         rate,
//         type,
//         workExperience,
//         projectAccess,
//         personalGoals,
//       },
//     });

//     res.json({ message: 'User data updated successfully', user: updatedUser });
//   } catch (error) {
//     console.error('Error updating user data:', error);
//     res.status(500).json({ message: 'Database error' });
//   }
// });




app.post('/api/user/save', async (req, res) => {
  const { id, skills, education, rate, type, workExperience, projectAccess, personalGoals } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id }, // Use the unique identifier
      data: {
        skills,
        education,
        rate,
        type,
        workExperience,
        projectAccess,
        personalGoals,
      },
    });

    res.json({ message: 'User data updated successfully', user: updatedUser });
  } catch (error) {
    console.error('Error updating user data:', error);
    res.status(500).json({ message: 'Database error' });
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
        personalGoals: true
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



// app.get('/api/user/:username', async (req, res) => {
//   const {username} = req.params;



//   try{
//     const user = await prisma.user.findUnique({
//       where: {name: username},
//     });

//     if(!user){
//       return res.status(404).json({message: 'User not found'});
//     }

//     res.json({privileges: user.privileges});
//   }catch (error){
//     console.error('Error message');
//     res.status(500).json({message: 'Database error'});
//   }
// })








// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../front-end/build')));
app.use('/invoice.png', express.static(path.join(__dirname, 'invoice.png')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../front-end/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


//










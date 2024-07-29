const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');
const app = express();
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());




app.get('/api/user/:username', async (req, res) => {
  const {username} = req.params;



  try{
    const user = await prisma.user.findUnique({
      where: {name: username},
    });

    if(!user){
      return res.status(404).json({message: 'User not found'});
    }

    res.json({privileges: user.privileges});
  }catch (error){
    console.error('Error message');
    res.status(500).json({message: 'Database error'});
  }
})

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
        education: ''
      },
    });
    console.log('User created successfully', newUser);
    res.json({ success: true });
  } catch (error) {
    console.log('Error', error);
    res.status(500).json({ success: false, message: 'Error' });
  }
});






// app.post('/login', async (req, res) => {
//   const {username, password} = req.body;


//   try{

//   const user = await prisma.user.findUnique({where: {name: username}});

//   const isMatch = await bcrypt.compare(password, user.password);

//   if(!isMatch){
//     return res.status(401).json({message: 'Authentication failed'});
//   }

//   }catch (error){
//     res.status(500).json({message: 'Database error'});
//   }

// })

// app.post('/login', async (req, res) => {
//   const { name, password } = req.body;

//   try {
//     const user = await prisma.user.findUnique({
//       where: { name: name },
//     });

//     if (!user) {
//       console.log('User not found');
//       return res.status(401).json({ message: 'User not found' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       console.log('Authentication failed');
//       return res.status(401).json({ message: 'Authentication failed' });
//     }

//     // Successful login
//     res.json({ success: true, message: 'Login successful' });
//   } catch (error) {
//     console.error('Database error:', error);
//     res.status(500).json({ message: 'Database error', error: error.message });
//   }
// });





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






// Route handlers
app.get('/employees', async (req, res) => {
  try {
    const employees = await prisma.user.findMany();
    res.json(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/employees', async (req, res) => {
  const { name, skills, education } = req.body;
  try {
    const newEmployee = await prisma.user.create({
      data: { name, skills, education }
    });
    res.json(newEmployee);
  } catch (error) {
    console.error('Error creating employee:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../front-end/build')));

// Serve React app for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../front-end/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


//
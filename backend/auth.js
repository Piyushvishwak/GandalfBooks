const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('./User');
const LoginUser = require('./loginUser');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });
    
    await newUser.save();

    res.status(201).json({
      message: 'User registered successfully!',
      user: newUser
    });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Registration failed, please try again.' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body; 

  try {
      const registeredUser = await User.findOne({ email });
      if (!registeredUser) {
          return res.status(404).json({ message: 'User not registered' });
      }

      const isPasswordCorrect = await bcrypt.compare(password, registeredUser.password);
      if (!isPasswordCorrect) {
          return res.status(400).json({ message: 'Invalid email or password' });
      }

      const newLogin = new LoginUser({ email, password: registeredUser.password });
      await newLogin.save();

      res.status(200).json({ message: 'Login successful' });
  } catch (err) {
      console.error('Login error:', err);
      res.status(500).json({ message: 'Server error' });
  }
});



module.exports = router;

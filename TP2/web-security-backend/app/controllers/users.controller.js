

const bcrypt = require('bcrypt');
const User = require('../models/users.model');

exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Hash the user's password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance with the hashed password
    const newUser = new User({ username, email, password: hashedPassword });

    // Save the user to the database
    await newUser.save();

    // Respond with a success message
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    // Handle any errors and respond with an error message
    res.status(500).json({ error: 'Error registering user' });
  }
};


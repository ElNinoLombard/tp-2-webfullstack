const bcrypt = require("bcrypt");
const User = require("../models/users.model");

exports.createUser = async (req, res) => {
  const { username, usernameLower,  email, phoneNumber, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, usernameLower, email, phoneNumber, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error registering user" });
  }
};

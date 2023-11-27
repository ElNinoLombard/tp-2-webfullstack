const express = require('express');
const mongoose = require('mongoose');
const userController = require('./controllers/users.controller');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors())
// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/TP-Webfullstack', {
  useNewUrlParser: true,
});

// Routes for user operations
app.post('/users', userController.createUser); // Create a new user


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
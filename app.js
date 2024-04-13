// app.js

// Import the express framework, which helps in building web applications in Node.js
const express = require('express');

// Import mongoose, an Object Data Modeling (ODM) library for MongoDB and Node.js
const mongoose = require('mongoose');

// Create an Express application
const app = express();

// Connect to MongoDB database named 'my_database' running locally on port 27017
mongoose.connect('mongodb://localhost:27017/my_database');

// Access the default connection to the MongoDB database
const db = mongoose.connection;

// Log error message if failed to connect to MongoDB
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define a schema for storing user data
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

// Create a model based on the defined schema, which represents a collection in the database
const User = mongoose.model('User', userSchema);

// Middleware to parse incoming JSON requests
app.use(express.json());

// Route to create a new user
app.post('/users', async (req, res) => {
    try {
        // Create a new user instance using the data from the request body
        const user = new User(req.body);
        
        // Save the new user to the database
        await user.save();
        
        // Send back the saved user object as the response
        res.send(user);
    } catch (err) {
        // Handle any errors that occur during user creation and send a 500 (Internal Server Error) status code
        res.status(500).send(err);
    }
});

// Route to get all users
app.get('/users', async (req, res) => {
    try {
        // Find all users in the database
        const users = await User.find();
        
        // Send back the array of users as the response
        res.send(users);
    } catch (err) {
        // Handle any errors that occur during user retrieval and send a 500 (Internal Server Error) status code
        res.status(500).send(err);
    }
});

// Route to get a user by ID
app.get('/users/:id', async (req, res) => {
    try {
        // Find a user by their ID
        const user = await User.findById(req.params.id);
        
        // If user is not found, send a 404 (Not Found) status code with an error message
        if (!user) {
            return res.status(404).send('User not found');
        }
        
        // Send back the user object as the response
        res.send(user);
    } catch (err) {
        // Handle any errors that occur during user retrieval and send a 500 (Internal Server Error) status code
        res.status(500).send(err);
    }
});

// Route to update a user by ID
app.put('/users/:id', async (req, res) => {
    try {
        // Find a user by their ID and update their data with the new data from the request body
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
        // If user is not found, send a 404 (Not Found) status code with an error message
        if (!user) {
            return res.status(404).send('User not found');
        }
        
        // Send back the updated user object as the response
        res.send(user);
    } catch (err) {
        // Handle any errors that occur during user update and send a 500 (Internal Server Error) status code
        res.status(500).send(err);
    }
});

// Route to delete a user by ID
app.delete('/users/:id', async (req, res) => {
    try {
        // Find a user by their ID and delete them from the database
        const user = await User.findByIdAndDelete(req.params.id);
        
        // If user is not found, send a 404 (Not Found) status code with an error message
        if (!user) {
            return res.status(404).send('User not found');
        }
        
        // Send back the deleted user object as the response
        res.send(user);
    } catch (err) {
        // Handle any errors that occur during user deletion and send a 500 (Internal Server Error) status code
        res.status(500).send(err);
    }
});

// Start the server and listen for incoming connections on the specified port
const PORT =  3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

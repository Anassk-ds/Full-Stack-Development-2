const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
    .connect("mongodb://127.0.0.1:27017/mydatabase", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });

// Define User schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// Create User model
const User = mongoose.model("User", userSchema);

// CREATE - Add new user
app.post("/users", async (req, res) => {
    try {
        const user = new User(req.body);

        const savedUser = await user.save();

        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
});

// READ - Get all users
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();

        res.json(users);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// READ - Get user by ID
app.get("/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json(user);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// UPDATE - Update user by ID
app.put("/users/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
});

// DELETE - Delete user by ID
app.delete("/users/:id", async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(
            req.params.id
        );

        if (!deletedUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json({
            message: "User deleted"
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// Start server
app.listen(port, () => {
    console.log(
        `Server running at http://localhost:${port}`
    );
});

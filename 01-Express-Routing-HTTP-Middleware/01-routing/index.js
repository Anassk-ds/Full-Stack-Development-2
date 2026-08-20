const express = require("express");

const app = express();

// Home Route
app.get("/", (req, res) => {
    res.send("Hey still alive ?");
});

// About Route
app.get("/about", (req, res) => {
    res.send("about page");
});

// Route Parameter
app.get("/user/:name", (req, res) => {
    const usersname = `${req.params.name}`;
    res.send(`username is : ${usersname}`);
});

// URL Building
app.get("/using/:name", (req, res) => {
    const usersname = `/user/${req.params.name}?view=full`;
    res.send(`username is : ${usersname}`);
});

// Query Parameter
app.get("/search", (req, res) => {
    const key = req.query.keyword;
    res.send(`You searched for "${key}"`);
});

// Start Server
app.listen(3000, () => {
    console.log("Running on http://localhost:3000");
});

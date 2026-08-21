const express = require("express");

const app = express();

const port = 3000;

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Define route
app.get("/", (req, res) => {
    const data = {
        title: "Welcome",
        message: "Hello from Express and EJS!"
    };

    // Render index.ejs and pass data
    res.render("index", data);
});

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

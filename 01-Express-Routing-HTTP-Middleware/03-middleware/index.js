const express = require("express");

const app = express();

// Custom Middleware
function loggerMiddleware(req, res, next) {
    console.log("First middleware is executed in console");

    // Pass control to the next middleware or route
    next();
}

// Register Middleware
app.use(loggerMiddleware);

// Home Route
app.get("/", (req, res) => {
    res.send("Hello from Express with middleware!");
});

// Start Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

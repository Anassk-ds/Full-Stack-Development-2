const express = require("express");
const session = require("express-session");

const app = express();

const port = 3000;

// Setup session middleware
app.use(
    session({
        secret: "mySecretKey",
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 60000
        }
    })
);

// Count visits using session
app.get("/", (req, res) => {

    if (req.session.views) {

        req.session.views++;

        res.send(
            `Welcome back! You have visited this page ${req.session.views} times.`
        );

    } else {

        req.session.views = 1;

        res.send("Welcome for the first time!");
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

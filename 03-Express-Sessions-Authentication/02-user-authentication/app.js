const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;

// Hardcoded user credentials for demonstration
const USER = {
    username: "user1",
    password: "password123"
};

// Middleware to parse form data
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

// Setup session middleware
app.use(
    session({
        secret: "mySecretKey",
        resave: false,
        saveUninitialized: false
    })
);

// Middleware to protect routes
function checkAuth(req, res, next) {

    if (req.session.loggedIn) {

        next();

    } else {

        res.redirect("/login");
    }
}

// Login page
app.get("/login", (req, res) => {

    res.send(`
        <!DOCTYPE html>
        <html>

        <head>
            <title>Login</title>
        </head>

        <body>

            <h2>Login</h2>

            <form method="POST" action="/login">

                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    required
                />

                <br><br>

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                />

                <br><br>

                <button type="submit">
                    Login
                </button>

            </form>

        </body>

        </html>
    `);
});

// Handle login form submission
app.post("/login", (req, res) => {

    const { username, password } = req.body;

    if (
        username === USER.username &&
        password === USER.password
    ) {

        req.session.loggedIn = true;
        req.session.username = username;

        res.redirect("/dashboard");

    } else {

        res.send(
            'Invalid username or password. <a href="/login">Try again</a>'
        );
    }
});

// Protected dashboard
app.get("/dashboard", checkAuth, (req, res) => {

    res.send(`
        <h2>Dashboard</h2>

        <p>
            Welcome, ${req.session.username}!
        </p>

        <a href="/logout">
            Logout
        </a>
    `);
});

// Logout
app.get("/logout", (req, res) => {

    req.session.destroy(() => {
        res.redirect("/login");
    });
});

// Home page
app.get("/", (req, res) => {

    if (req.session.loggedIn) {

        res.redirect("/dashboard");

    } else {

        res.redirect("/login");
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

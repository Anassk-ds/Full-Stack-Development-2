const express = require("express");

const app = express();

const port = 3000;

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Display the form
app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <title>Form Data</title>
        </head>

        <body>

            <h1>Student Form</h1>

            <form action="/submit" method="POST">

                <label for="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                >

                <br><br>

                <label for="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                >

                <br><br>

                <button type="submit">Submit</button>

            </form>

        </body>

        </html>
    `);
});

// Handle form submission
app.post("/submit", (req, res) => {

    const { name, email } = req.body;

    res.send(
        `Thank you, ${name}! We received your email as: ${email}`
    );
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

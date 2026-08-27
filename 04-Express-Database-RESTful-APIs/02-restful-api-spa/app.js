const express = require("express");

const app = express();

const port = 3000;

// Parse JSON bodies from POST requests
app.use(express.json());

// Serve static files from public folder
app.use(express.static("public"));

// In-memory database
let items = [
    {
        id: 1,
        name: "Learn Express"
    },
    {
        id: 2,
        name: "Build SPA"
    }
];

// GET - Get all items
app.get("/api/items", (req, res) => {
    res.json(items);
});

// POST - Add new item
app.post("/api/items", (req, res) => {

    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            message: "Name is required"
        });
    }

    const newItem = {
        id: items.length
            ? items[items.length - 1].id + 1
            : 1,
        name: name
    };

    items.push(newItem);

    res.status(201).json(newItem);
});

// DELETE - Delete item by ID
app.delete("/api/items/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = items.findIndex(
        (item) => item.id === id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Item not found"
        });
    }

    items.splice(index, 1);

    res.json({
        message: "Item deleted"
    });
});

// Start server
app.listen(port, () => {
    console.log(
        `Server running at http://localhost:${port}`
    );
});

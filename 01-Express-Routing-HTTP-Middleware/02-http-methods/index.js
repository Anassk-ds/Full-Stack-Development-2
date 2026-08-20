const express = require("express");

const app = express();

let items = [];

// Add Item
app.get("/add/:name", (req, res) => {
    const newItem = {
        id: Date.now(),
        name: req.params.name
    };

    items.push(newItem);

    res.send(
        `Added item: ${newItem.name} with id ${newItem.id}`
    );
});

// Retrieve All Items
app.get("/items", (req, res) => {
    res.json(items);
});

// Delete Item
app.get("/delete/:id", (req, res) => {
    const id = parseInt(req.params.id);

    items = items.filter(item => item.id !== id);

    res.send(`Deleted item with id ${id}`);
});

// Start Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

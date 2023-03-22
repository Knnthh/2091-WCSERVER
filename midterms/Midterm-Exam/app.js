const express = require('express');
const app = express();

const dishes = [
    {type: 'sisig', province: 'pampanga', price: 220},
    {type: 'salpicao', province: 'quezon', price: 180},
    {type: 'bagnet', province: 'ilocos', price: 370}
];

// Route to display all records
app.get('/dishes', (req, res) => {
    res.json(dishes);
});

// Route to display a specific record based on the dish type
app.get('/dishes/:type', (req, res) => {
    const dish = dishes.find(d => d.type === req.params.type);
    if (!dish) {
        res.status(404).json({error: 'Record not found'});
    } else {
        res.json(dish);
    }
});

// Route to handle undefined routes
app.use((req, res) => {
    res.status(404).json({error: 'Record not found'});
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});

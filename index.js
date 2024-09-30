const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route for GET request to /hello
app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
});

// Route for GET request to /user with query parameters
app.get('/user', (req, res) => {
    const { firstname, lastname } = req.query;
    res.send(`Hello, ${firstname} ${lastname}`);
});

// Route for POST request to /user with path parameters
app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    res.send(`Hello, ${firstname} ${lastname}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

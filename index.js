const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// POST /register route handler
app.post('/register', (req, res) => {
    // Extract name, email, and password from the request body
    const { name, email, password } = req.body;

    // Check if all required fields are provided
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Name, email, and password are required' });
    }

    // In a real application, you would save the user data to a database here
    // For now, we'll just log the data and return a success message
    console.log('New user registered:', { name, email, password });

    // Return a success message
    res.status(201).json({ message: 'User registered successfully', user: { name, email } });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

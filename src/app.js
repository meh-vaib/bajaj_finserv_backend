const express = require('express');
const cors = require('cors');  // Import the cors package
const bfhlRoutes = require('./routes/bfhlRoutes');

const app = express();

// Enable CORS for all origins
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Your route handlers
app.use('/bfhl', bfhlRoutes);

// Global error handler
app.use((err, req, res, next) => {
    return res.status(500).json({ is_success: false, message: err.message });
});

module.exports = app;

// Example contact route
// This demonstrates the structure for API endpoints

const express = require('express');
const router = express.Router();

// POST /api/contact - Submit contact form
router.post('/', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return res.status(400).json({ error: 'Please enter a valid email address' });
    }

    console.log('New contact message:', { name, email, message });

    res.status(201).json({ 
        success: true, 
        message: 'Thank you for your message! I will get back to you soon.' 
    });
});

module.exports = router;

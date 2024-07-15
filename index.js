const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();

// Enable CORS
app.use(cors());

// Define paths
const imagesPath = path.join(__dirname, 'images');
const templatesPath = path.join(__dirname, 'data', 'templates.json');

// Check if images directory exists
fs.access(imagesPath, fs.constants.F_OK, (err) => {
    if (err) {
        console.error(`Images directory ${imagesPath} does not exist.`);
    } else {
        console.log(`Serving images from: ${imagesPath}`);
        // Serve images statically
        app.use('/images', express.static(imagesPath));
    }
});

// Check if templates file exists
fs.access(templatesPath, fs.constants.F_OK, (err) => {
    if (err) {
        console.error(`Templates file ${templatesPath} does not exist.`);
    }
});

// API endpoint to get templates
app.get('/api/templates', (req, res) => {
    fs.readFile(templatesPath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading templates file: ${err}`);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        const templates = JSON.parse(data);
        res.json(templates);
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

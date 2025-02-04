const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');  // Generate unique IDs

app.use(express.static('public'));  // Serve static HTML

// Endpoint to create a unique form link
app.get('/create-form', (req, res) => {
    const uniqueId = uuidv4();  // Generate a unique ID
    const formUrl = `https://yourserver.com/form/${uniqueId}`;
    
    // Save formUrl in a database for tracking
    res.send(`Share this link with the client: ${formUrl}`);
});

// Endpoint for users to access a unique form
app.get('/form/:id', (req, res) => {
    const formId = req.params.id;
    res.sendFile(__dirname + '/public/form.html');  // Serve the form
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

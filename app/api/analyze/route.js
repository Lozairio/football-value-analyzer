const fetch = require('node-fetch');

// Securely proxy Groq API requests using the GROQ_API_KEY environment variable
async function analyze(req, res) {
    const url = `https://api.groq.com/analyze`; // Replace with actual Groq endpoint
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
    });
    const data = await response.json();
    res.status(response.status).json(data);
}

module.exports = analyze;
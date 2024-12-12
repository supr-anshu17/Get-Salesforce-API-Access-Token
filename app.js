const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<a href="/login">Connect to Salesforce</a>');
});

// Step no.1: Redirect user to Salesforce for authentication
app.get('/login', (req, res) => {
    const authUrl = `${process.env.AUTH_URL}?response_type=code&client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}`;
    res.redirect(authUrl);
});

// Step no.2: Handle the callback from Salesforce
app.get('/oauth/callback', async (req, res) => {
    console.log('Incoming Query Parameters:', req.query);

    const { code } = req.query;

    if (!code) {
        return res.status(400).send('Error: Authorization code not received.');
    }

    try {
        // Step no.3: Exchange authorization code for an access token
        const tokenResponse = await axios.post(process.env.TOKEN_URL, null, {
            params: {
                grant_type: 'authorization_code',
                code: code,
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                redirect_uri: process.env.REDIRECT_URI,
            },
        });

        const { access_token, instance_url } = tokenResponse.data

        // Step no.4: Use the access token to interact with Salesforce
        res.json({
            message: 'OAuth flow successful!',
            access_token,
            instance_url
        });
    } catch (error) {
        console.log('Error during token exchange:', error.response?.data || error.message);
        res.status(500).send('Authentication failed.');
    }
});

//local server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//testing-1
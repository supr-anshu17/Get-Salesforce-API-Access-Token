const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<a href="/login">Connect to Salesforce</a>');
});

// Step no.1: Redirect user to Salesforce for authentication
app.get('/login', (req, res) => {
    const params = new URLSearchParams({
        response_type: 'code',
        client_id: process.env.CLIENT_ID,
        redirect_uri: process.env.REDIRECT_URI
    });

    const authUrl = `${process.env.AUTH_URL}?${params.toString()}`;
    console.log('Auth URL:', authUrl);
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
        const params = new URLSearchParams({
            grant_type: 'authorization_code',
            code: code,
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            redirect_uri: process.env.REDIRECT_URI
        });

        console.log('Token Request Params:', params.toString());

        const tokenResponse = await axios.post(process.env.TOKEN_URL, params.toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        const { access_token, refresh_token, instance_url } = tokenResponse.data;

        res.json({
            message: 'OAuth flow successful!',
            access_token,
            refresh_token,
            instance_url
        });
    } catch (error) {
        console.error('Full error:', error);
        console.error('Error response:', error.response?.data);
        res.status(500).send('Authentication failed: ' + (error.response?.data?.error_description || error.message));
    }
});

// New endpoint to handle token refresh
app.post('/refresh-token', async (req, res) => {
    const { refresh_token } = req.body;

    if (!refresh_token) {
        return res.status(400).send('Refresh token is required');
    }

    try {
        const params = new URLSearchParams({
            grant_type: 'refresh_token',
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            refresh_token: refresh_token
        });

        const tokenResponse = await axios.post(process.env.TOKEN_URL, params.toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        const { access_token, instance_url } = tokenResponse.data;

        res.json({
            message: 'Token refresh successful!',
            access_token,
            instance_url
        });
    } catch (error) {
        console.error('Error during token refresh:', error.response?.data || error.message);
        res.status(500).send('Token refresh failed: ' + (error.response?.data?.error_description || error.message));
    }
});

//local server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//testing-1
console.log("testing-1");
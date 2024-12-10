**Salesforce OAuth App**
A Node.js application for authenticating and interacting with Salesforce using OAuth 2.0.
**Features**
Authenticate with Salesforce via OAuth.
Fetch an access token.
Query Salesforce data like Accounts, Contacts, Leads, etc.
Setup Guide
Follow these steps to set up and run the application.

1. Clone the Repository
First, clone the repository to your local machine:

git clone https://github.com/your-username/salesforce-oauth-app.git
Navigate to the project directory:

cd salesforce-oauth-app

**2. Install Required Packages**
Install all dependencies using npm:

npm install
The required packages are:

express: For creating the server.
axios: To make HTTP requests.
dotenv: To securely handle environment variables.
If you need to install these manually:

npm install express axios dotenv

**3. Create a .env File**
To securely store sensitive data like the client ID, client secret, and redirect URI, create a .env file in the root directory of the project.

Steps to Create .env File:
Open the project directory in a code editor.
Create a new file and name it .env.
Add the following variables in the file:

CLIENT_ID=Your_Salesforce_Client_ID
CLIENT_SECRET=Your_Salesforce_Client_Secret
REDIRECT_URI=https://your_redirect_uri
PORT=3000
AUTH_URL=https://login.salesforce.com/services/oauth2/authorize
TOKEN_URL=https://login.salesforce.com/services/oauth2/token
Example .env File:

CLIENT_ID=3MVG9K5xxxxxxxxxx
CLIENT_SECRET=ABC123xxxxxxxxxx
REDIRECT_URI=http://localhost:3000/callback
PORT=3000
AUTH_URL=https://login.salesforce.com/services/oauth2/authorize
TOKEN_URL=https://login.salesforce.com/services/oauth2/token
**⚠️ Important: Never share your .env file or push it to GitHub!**

**4. Start the Application**
Run the app using Node.js:

**node app.js**
The application will start on the specified port (default: 3000). Open your browser and go to:

http://localhost:3000
How It Works
Authenticate with Salesforce:

The app redirects you to Salesforce's login page (using AUTH_URL).
After login, Salesforce redirects back to your app with an authorization code.
Fetch Access Token:

The app exchanges the authorization code for an access token (using TOKEN_URL).
Use Access Token:

The access token is used to interact with Salesforce's REST API to fetch or modify data.

**Project Structure**   
Get-Salesforce-API-Access-Token/
├── app.js          # Main application file
├── package.json    # Project configuration and dependencies
├── node_modules/   # Installed dependencies
├── .gitignore      # To exclude files like .env and node_modules
└── .env            # Environment variables (not included in GitHub)

Ensure your Salesforce Connected App is set up correctly:
Add your Redirect URI in the Salesforce connected app settings.
Ensure API access is enabled for your app.
Make sure the .env file includes valid CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, PORT, AUTH_URL, and TOKEN_URL.

License
This project is licensed under the MIT License.

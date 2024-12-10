# Salesforce OAuth App

A comprehensive Node.js application for authenticating and interacting with Salesforce using OAuth 2.0.

## 🚀 Features

* Seamless authentication with Salesforce via OAuth 2.0
* Secure access token management
* Powerful querying capabilities for Salesforce objects (Accounts, Contacts, Leads, etc.)
* Environment-based configuration
* Express.js powered web server

## 📋 Prerequisites

* Node.js (v14 or higher)
* npm (Node Package Manager)
* A Salesforce Developer Account
* A configured Salesforce Connected App

## 🛠️ Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/salesforce-oauth-app.git
   cd salesforce-oauth-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

   Core dependencies include:
   * `express` - Web application framework
   * `axios` - HTTP client
   * `dotenv` - Environment configuration

   To install dependencies manually:
   ```bash
   npm install express axios dotenv
   ```

## ⚙️ Configuration

1. **Create Environment File**
   
   Create a `.env` file in the project root:
   ```env
   CLIENT_ID=Your_Salesforce_Client_ID
   CLIENT_SECRET=Your_Salesforce_Client_Secret
   REDIRECT_URI=https://your_redirect_uri
   PORT=3000
   AUTH_URL=https://login.salesforce.com/services/oauth2/authorize
   TOKEN_URL=https://login.salesforce.com/services/oauth2/token
   ```

   Example configuration:
   ```env
   CLIENT_ID=3MVG9K5xxxxxxxxxx
   CLIENT_SECRET=ABC123xxxxxxxxxx
   REDIRECT_URI=http://localhost:3000/callback
   PORT=3000
   AUTH_URL=https://login.salesforce.com/services/oauth2/authorize
   TOKEN_URL=https://login.salesforce.com/services/oauth2/token
   ```

   > ⚠️ **Security Warning**: Never commit your `.env` file to version control!

## 🚀 Running the Application

1. **Start the Server**
   ```bash
   node app.js
   ```

2. **Access the Application**
   
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## 🔄 Authentication Flow

1. **Initial Authorization**
   * User visits the application
   * Application redirects to Salesforce login page
   * User authenticates with Salesforce credentials

2. **Token Exchange**
   * Salesforce redirects back with authorization code
   * Application exchanges code for access token
   * Token is stored for API requests

3. **API Usage**
   * Application uses access token for Salesforce API requests
   * Automatic token refresh when expired

## 📁 Project Structure

```
salesforce-oauth-app/
├── app.js              # Main application entry point
├── package.json        # Project metadata and dependencies
├── node_modules/       # Installed packages (generated)
├── .gitignore         # Git ignore configuration
└── .env               # Environment configuration (create this)
```

## 🔒 Salesforce Setup Requirements

1. **Connected App Configuration**
   * Configure Redirect URI in Salesforce Connected App settings
   * Enable necessary OAuth scopes
   * Ensure API access is enabled

2. **User Permissions**
   * Verify API access is enabled for user profile
   * Configure appropriate object permissions

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📚 Additional Resources

* [Salesforce OAuth Documentation](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_understanding_authentication.htm)
* [Express.js Documentation](https://expressjs.com/)
* [Node.js Documentation](https://nodejs.org/)
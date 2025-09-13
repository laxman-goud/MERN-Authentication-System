# ⚡ Server – Authentication System

This is the backend (server) of the Authentication System.  
It’s built with Node.js, Express, and MongoDB, providing secure authentication APIs including registration, login, logout, email verification (OTP), and password reset (OTP).

The server uses JWT (JSON Web Tokens) stored in HTTP-only cookies for authentication and authorization.

## ✨ Features

- 🔑 User registration & login with JWT-based authentication
- 🔒 Secure cookie handling (HTTP-only, `sameSite`, `secure`)
- 📧 Email verification using OTP (via Nodemailer)
- 🔄 Password reset with OTP
- 🛡 Middleware for protected routes
- 🗄 MongoDB + Mongoose for database handling
- ⚙️ Environment-based configurations (development/production ready)

## 🛠 Tech Stack

- **Node.js + Express**
- **MongoDB + Mongoose**
- **jsonwebtoken (JWT)** – Authentication tokens
- **bcryptjs** – Password hashing
- **Nodemailer** – Email services
- **cookie-parser** – Cookie handling
- **cors** – Cross-Origin Resource Sharing

## ⚙️ Installation & Setup

1. Navigate to the server folder:
    ```bash
    cd server
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Setup Environment Variables:  
    Create a `.env` file in `server/` (or copy from `.env.example`):
    ```env
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    NODE_ENV=development

    SMTP_USER=your_smtp_user
    SMTP_PASS=your_smtp_password
    SENDER_EMAIL=your_email@example.com
    ```

4. Start the server:
    ```bash
    npm run server
    ```

👉 The server runs on: `http://localhost:3000`

## 📂 Project Structure

```plaintext
server/
│── config/               # Database & mailer configs
│── controllers/          # Auth & user controllers
│── middleware/           # JWT middleware for protected routes
│── models/               # Mongoose models (User, etc.)
│── routes/               # Express routes (auth, user)
│── server.js             # App entry point
│
│── .env                  # Local environment variables
│── .env.example          # Example env file
│── package.json          # Dependencies & scripts
│── README.md             # This file
```

## 📡 API Routes

### 🔐 Auth Routes

- **POST** `/api/auth/register` → Register a new user
- **POST** `/api/auth/login` → Login user, sets JWT cookie
- **POST** `/api/auth/logout` → Logout user, clears cookie
- **GET** `/api/auth/is-auth` → Check if user is authenticated (protected)
- **POST** `/api/auth/send-verify-otp` → Send OTP for email verification (protected)
- **POST** `/api/auth/verify-account` → Verify email with OTP
- **POST** `/api/auth/send-reset-otp` → Send OTP for password reset
- **POST** `/api/auth/reset-password` → Reset password with OTP

### 👤 User Routes

- **GET** `/api/user/data` → Fetch user details (protected)


## 🚀 Deployment Notes

- Set `NODE_ENV=production` in production.
- Use a cloud database (e.g., MongoDB Atlas) for `MONGODB_URI`.
- Configure email service credentials (`SMTP_USER`, `SMTP_PASS`).
- On platforms like Render/Heroku, ensure environment variables are set in the dashboard.

## 🤝 Contributing

Please check the root `CONTRIBUTING.md` for contribution guidelines.

# 🎨 Client – Authentication System

This is the frontend (client) of the Authentication System.  
Built with **React (Vite)** and **TailwindCSS**, it provides a seamless user experience for authentication flows such as registration, login, logout, email verification, and password reset.

The client communicates with the server APIs using **Axios** and manages global state with **React Context**.

## ✨ Features

- ⚡ Built with **Vite** for fast development
- 🎨 Styled with **TailwindCSS** (responsive & mobile-friendly)
- 🔑 User flows: **Register**, **Login**, **Logout**
- 📧 Email verification via **OTP (One-Time Password)**
- 🔄 Password reset via **OTP**
- 🔔 Notifications with **React Toastify**
- 🌍 Global authentication state management via **Context API**
- 🚦 Route protection with **React Router**

## 🛠 Tech Stack

- **React (Vite)** – Frontend framework
- **React Router DOM** – Routing
- **TailwindCSS** – Styling
- **Axios** – API requests
- **React Toastify** – Notifications

## ⚙️ Installation & Setup

1. Navigate to the client folder:
    ```bash
    cd client
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:  
    Create a `.env` file inside the `client/` directory (or copy from `.env.example`):
    ```env
    VITE_BACKEND_URL=http://localhost:3000
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

👉 The client runs on: [http://localhost:5173](http://localhost:5173)

## 📂 Project Structure

```
client/
│── public/                # Static assets
│── src/
│   ├── assets/            # Images & icons
│   ├── components/        # Reusable UI components (NavBar, Inputs, etc.)
│   ├── context/           # Global state (AppContext)
│   ├── pages/             # App pages (Login, Register, EmailVerify, etc.)
│   ├── App.jsx            # Root component
│   └── main.jsx           # Entry point
│
│── .env                   # Local environment variables
│── .env.example           # Example env file
│── package.json           # Dependencies & scripts
│── vite.config.js          # Vite configuration
│── tailwind.config.js      # Tailwind configuration
│── eslint.config.js        # ESLint configuration
│── README.md              # This file
```

## 📄 Available Pages

- `/login` → User login
- `/register` → New user registration
- `/email-verify` → OTP-based email verification
- `/reset-password` → Password reset flow
- `/` → Home (default landing page, dynamic based on auth state)


## 🤝 Contributing

Please check the root `CONTRIBUTING.md` for contribution guidelines.

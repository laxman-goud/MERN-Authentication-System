# 🔐 Authentication System

A **full-stack authentication system** built with **React (Vite)** on the frontend and **Node.js, Express, MongoDB** on the backend.  
It includes user registration, login, logout, email verification via OTP, and password reset via OTP — all secured with **HTTP-only cookies**.

---

## ✨ Features

- 🔑 User Registration & Login
- 🔒 JWT Authentication with secure cookies
- 🚪 Logout (clears cookies safely)
- 📧 Email Verification (OTP sent to user’s email)
- 🔄 Password Reset (via OTP email)
- 🛡 Protected Routes using middleware
- 🎨 Responsive UI with TailwindCSS
- 🔔 Toast notifications for instant feedback

---

## 🛠 Tech Stack

**Frontend (Client)**  
- React (Vite)  
- React Router DOM  
- TailwindCSS  
- Axios  
- React Toastify  

**Backend (Server)**  
- Node.js + Express  
- MongoDB + Mongoose  
- JWT (jsonwebtoken)  
- bcryptjs (password hashing)  
- Nodemailer (OTP emails)  
- cookie-parser, cors  

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/auth-system.git
cd auth-system
```

### 2️⃣ Setup Backend
```bash
cd server
npm install
```

Create a `.env` file in the `server/` directory (or copy `.env.example`):
```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development

SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
SENDER_EMAIL=your_email@example.com
```

Run the server:
```bash
npm run server
```

### 3️⃣ Setup Frontend
```bash
cd ../client
npm install
```

Create a `.env` file in the `client/` directory (or copy `.env.example`):
```env
VITE_BACKEND_URL=http://localhost:3000
```

Run the client:
```bash
npm run dev
```

---

## 📂 Project Structure
```
Authentication System/
│── client/                 # React frontend
│   ├── src/                # Components, Context, Pages
│   ├── public/             # Static files
│   └── README.md
│
│── server/                 # Express backend
│   ├── config/              # DB & nodemailer configs
│   ├── controllers/        # Auth & User controllers
│   ├── middleware/         # JWT middleware
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── server.js           # Entry point
│   └── README.md
│
│── LICENSE.md
│── CONTRIBUTING.md
│── README.md               # Root project README
```

---

## 📜 License
This project is licensed under the MIT License.  
See [MIT License](LICENSE) for details.

---

## 🤝 Contributing
Contributions are welcome! 🎉  
Please check [CONTRIBUTING.md](CONTRIBUTING) for guidelines.

---
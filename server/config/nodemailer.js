// =======================
// config/nodemailer.js
// =======================

import nodemailer from 'nodemailer';

// Creates transporter for sending emails via Brevo SMTP
const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    auth: {
        user: process.env.SMTP_USER, // SMTP username from .env
        pass: process.env.SMTP_PASS  // SMTP password from .env
    }
});

export default transporter;

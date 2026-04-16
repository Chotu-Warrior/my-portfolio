const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ====================== MIDDLEWARE ======================
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (if you have a public folder)
app.use(express.static(path.resolve(__dirname, 'public')));

// ====================== NODEMAILER SETUP ======================
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'chotuwarrior2@gmail.com',        // Your Gmail
    pass: 'xwdb qhjx rsrm flzt'             // Your Gmail App Password
  }
});

// ====================== ROUTES ======================

// Contact Form Route
app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const mailOptions = {
    from: email,
    to: 'harshchouhan4547@gmail.com',
    subject: `New Contact Form Submission: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send message. Please try again.' });
    }

    console.log('Email sent successfully:', info.response);
    res.status(200).json({ message: 'Message sent successfully!' });
  });
});

// ====================== START SERVER ======================
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

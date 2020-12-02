const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
});

connection.connect((err) => err ? console.error(err) : console.log('connected'));

app.get('/', (req, res) => {
  res.json({ 'message': 'welcome to prodmng' });
});

app.post('/contact', (req, res) => {
  const data = req.body;
  const name = data['name'];
  const email = data['email'];
  const message = data['message'];
  const transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS
    }
  }));
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `New Message from ${name} at ${email}`,
    text: message
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('MAIL ERROR: ', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 'message': 'welcome to prodmng' });
});

app.post('/contact', (req, res) => {
<<<<<<< HEAD
=======
  console.log(req.body);
>>>>>>> 3ab3650108ad136e326e7a7ff027af13f4e1031f
  const data = req.body;
  const name = data['name'];
  const email = data['email'];
  const message = data['message'];
<<<<<<< HEAD
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
=======
  console.log(name, email, message);
  res.json(data);
>>>>>>> 3ab3650108ad136e326e7a7ff027af13f4e1031f
});
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
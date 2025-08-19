const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: 'ksachade203@gmail.com',
      subject: `Portfolio Contact: ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>Sent from your portfolio website</em></p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Save to Excel file
    const excelData = {
      timestamp: new Date().toISOString(),
      name,
      email,
      message
    };

    const excelPath = path.join(__dirname, 'contact_submissions.xlsx');
    let workbook;
    let worksheet;

    if (fs.existsSync(excelPath)) {
      workbook = XLSX.readFile(excelPath);
      const sheetName = workbook.SheetNames.includes('Contacts') ? 'Contacts' : workbook.SheetNames[0];
      const existingSheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(existingSheet);
      jsonData.push(excelData);
      workbook.Sheets[sheetName] = XLSX.utils.json_to_sheet(jsonData);
    } else {
      workbook = XLSX.utils.book_new();
      worksheet = XLSX.utils.json_to_sheet([excelData]);
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Contacts');
    }

    XLSX.writeFile(workbook, excelPath);

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ message: 'Failed to send message. Please try again.' });
  }
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

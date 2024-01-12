// email-sender-lib.js

const nodemailer = require('nodemailer');

class EmailSenderLib {
  constructor(smtpConfig) {
    this.transporter = nodemailer.createTransport(smtpConfig);
  }

  async sendEmail(options) {
    try {
      const info = await this.transporter.sendMail(options);
      console.log('Email sent:', info.response);
      return true;
    } catch (error) {
      console.error('Error sending email:', error.message);
      return false;
    }
  }

  // Add more methods for handling different email functionalities,
  // such as sending HTML emails, attachments, etc.
}

module.exports = EmailSenderLib;

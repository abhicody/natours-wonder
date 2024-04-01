// eslint-disable-next-line import/no-extraneous-dependencies
const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,

    auth: {
      user: process.env.EMAIL_USERNAME, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  // 2) Define the email options
  const mailOptions = {
    from: 'Honey singh <honey@email.com',
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html: options.html,
  };

  // 3) Actually send the email
  await transporter.sendMail(mailOptions);

  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log('Email sent:' + info.response);
  //   }
  // });
};

module.exports = sendEmail;

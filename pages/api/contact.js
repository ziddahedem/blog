require("dotenv").config();
const nodemailer = require("nodemailer");

const password = process.env.PASSWORD;

export default async function contact(req, res) {
  const { name, email, message } = JSON.parse(req.body);
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "contact@wpcodevo.com",
      pass: password,
    },
    secure: true,
  });

  const mailData = {
    from: email,
    to: "contact@wpcodevo.com",
    subject: `Message From ${name}`,
    text: message,
    html: `<div>${message}</div><p>Sent from:
    ${email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
  });
  res.status(200).send("It worked");
}
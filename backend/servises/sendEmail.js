"use strict";

const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
module.exports = async function (data) {
  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.meta.ua",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "sepalena@meta.ua", // generated ethereal user
        pass: "sepalena1982L", // generated ethereal password
      },
    });

    // send mail with defined transport object
    const { userName, userEmail, userText } = data;

    const output = `<h2>Ви отримали листа</h2>
    <p>Лист від: ${userName} </p>
    <p>Імейл відправника: ${userEmail} </p>
    <p>Текст повідомлення: ${userText} </p>`;

    const options = {
      from: userEmail, // sender address
      to: "sepalena@gmail.com", // list of receivers
      subject: "Я зацікавлений придбати Вашу продукцію", // Subject line
      text: userText, // plain text body
      html: output, // html body
    };
    let info = await transporter.sendMail(options);

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  } catch (error) {
    console.log(error.message);
  }
};

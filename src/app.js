var fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const path = require('path');
require('dotenv').config()
"use strict";

const mailer = require("nodemailer");
var template_path = path.join(__dirname, '../templates/');

module.exports = async (request, response) => {
  //get the current event
  const env = request.env;

  //get data from user
  const data = JSON.parse(env.APPWRITE_FUNCTION_EVENT_DATA)
  var user_email = data['email'];
  var user_name = data['name'];
  var mail_subject;

  switch(env.APPWRITE_FUNCTION_EVENT){
    case "users.create":
      mail_subject = "CHANGE THIS SUBJECT";
      break;
    case "users.delete":
      mail_subject = "CHANGE THIS SUBJECT";
      break;
    case "users.update.email":
      mail_subject = "CHANGE THIS SUBJECT";
      break;
    default:
      throw Error("event is not implemented");
  }

  const mail = await rewriteMailContent(template_path + env.APPWRITE_FUNCTION_EVENT, mail_subject, user_name, env);
  const log = await sendMail(user_email, mail_subject, mail, env);
  response.json(log);
}

async function rewriteMailContent(file, mail_subject, user_name, env) {
  let content = await readFile(file + ".html", 'utf8');
  if (content !== null) {
    //replace placeholder with user data
    content = content.replace("{SUBJECT}", mail_subject);
    content = content.replace("{NAME}", user_name);

    return content;
  }
};

async function sendMail(user_email, mail_subject, mail_content, env){
  //create reuseable transporter for SMTP transporter
  let transporter = mailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: env.SMTP_EMAIL,
      pass: env.SMTP_PASSWORD,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: env.MAIL_NAME + '<' + env.MAIL_ADRESS +'>',
    to: user_email,
    subject: mail_subject,
    html: mail_content
  });

  // log if message was send
  return "Message sent: %s", info.messageId + "\n Send to:" + user_email + " type:" + env.APPWRITE_FUNCTION_EVENT;
};

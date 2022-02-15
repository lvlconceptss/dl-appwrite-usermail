var fs = require('fs');
const path = require('path');
require('dotenv').config()
"use strict";

const mailer = require("nodemailer");
const env = process.env;
var template_path = path.join(__dirname, '../templates/');


async function main() {
  //get the current event
  var event = env.APPWRITE_FUNCTION_EVENT;

  //get data from user
  const appwrite_data = JSON.parse(env.APPWRITE_FUNCTION_EVENT_DATA)
  var user_email = appwrite_data['email'];
  var user_name = appwrite_data['name'];
  var mail_subject;

  switch(event){
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

  rewriteMailContentAndSendMail(template_path + event, mail_subject, user_name, user_email);
}

function rewriteMailContentAndSendMail(file, mail_subject, user_name, user_email) {
  fs.readFile(file + ".html", 'utf8', function (err, data) {
    if (err) {
      console.log(err);
      return null;
    }

    //replace placeholder with user data
    data = data.replace("{SUBJECT}", mail_subject);
    data = data.replace("{NAME}", user_name);

    if (data !== null && mail_subject !== null && user_email !== null) {
      sendMail(user_email, mail_subject, data);
    }
  });
};

async function sendMail(user_email, mail_subject, mail_content){
  //create reuseable transporter for SMTP transporter
  let transporter = mailer.createTransport({
    host: env.MAIL_SMTP_HOST,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: env.MAIL_ADRESS,
      pass: env.MAIL_PASSWORD,
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
  console.log("Message sent: %s", info.messageId);
};

main().catch(console.error);
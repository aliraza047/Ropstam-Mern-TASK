import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

const options = {
  auth: {
    api_key: process.env.SEND_GRID_API_KEY,
  },
};

const transporter = nodemailer.createTransport(sgTransport(options));

//@helper function
const sendMail = async (subject, body, sendTo) => {
  try {
    var mailOptions = {
      from: "update@runmysale.com",
      to: sendTo,
      subject: subject,
      html: body,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent");
      }
    });
  } catch (error) {
    console.log("error in sending mail", error);
  }
};

export default sendMail;

var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "youremail@gmail.com",
    pass: "yourpassword",
  },
});

var mailOptions = {
  from: "ghorbel.Ayman.2000@gmail.com",
  to: "ghorbel.Ayman.2000@gmail.com",
  subject: "Sending Email using Node.js",
  text: "Don't forget to delete your personal information before uploading it to GitHub :) !",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

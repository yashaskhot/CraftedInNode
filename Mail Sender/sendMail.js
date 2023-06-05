const nodemailer = require('nodemailer');

const sendMail = async (req, res) => {

    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'ofelia.boyer45@ethereal.email',
        pass: 'rsvAtWwr9buPxcK8gs'
    }
    });

    let info = await transporter.sendMail({
    from: '"Yashas Khot" <ykuk9876@gmail.com>', // sender address
    to: "khotyashas2@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
    console.log("Message sent: %s", info.messageId);
    res.json(info);

    res.send('Sending Mail');
};





module.exports = sendMail;
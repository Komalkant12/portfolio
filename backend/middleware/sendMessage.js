const { createTransport } = require("nodemailer");

const sendMessage = async (userMsg) => {
           //settingup transporter
    const transporter = createTransport({
        service:"gmail",
        auth: {
            user: process.env.APP_EMAIL,
            pass: process.env.APP_PASSWORD,

        },
    });

    //sending the message

    const sentMessage = await transporter.sendMail({
        from: process.env.APP_EMAIL,
        to: process.env.APP_EMAIL,
        subject: "New Message from portfolio site",
       text: userMsg, 
    })
    return sentMessage;
}


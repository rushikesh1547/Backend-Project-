import dotenv from "dotenv";
dotenv.config();

import Mailgen from "mailgen";
import nodemailer from "nodemailer"

const sendEmail = async (options) => {
    const mailGenerator = new Mailgen({
        theme: "default",
        product: {
            name:"Task Manager" ,
            link: "https://taskmanagelink.com"
        }
    })

    const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent)
    const emailHtml = mailGenerator.generate(options.mailgenContent)

    const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_SMTP_HOST,
        port: Number(process.env.MAILTRAP_SMTP_PORT),
        auth: {
            user: process.env.MAILTRAP_SMTP_USER,
            pass: process.env.MAILTRAP_SMTP_PASS

        }

    })

    const mail = {
        from:"mail.task@example.com",
        to: options.to,
        subject:options.subject,
        text: emailTextual,
        html: emailHtml
    }

    try{
        await transporter.sendMail(mail)
    }catch(error){
        console.error("MAIL ERROR FULL:", error);

    }
}






const emailVerificationMailgenContent = (username, verificationUrl) => {
    return {
        body:{
            name: username,
            intro: "welcome to our App! we are excited to have you on board.",
            action: {
                instructions:"To verify your email please click on the following button",
                button: {
                    color: "#22BC66",
                    text:"Verify your email here",
                    link: verificationUrl,
                },
            },
            outro: "Need help, or have questions? Just reply to this email, we'd love to help!  "
        },
    };
}

const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
    return {
        body:{
            name: username,
            intro: "We got request to reset the password of your account",
            action: {
                instructions:"o reset your password click on the following button or link",
                button: {
                    color: "#22BC66",
                    text:"Reset Password",
                    link: passwordResetUrl,
                },
            },
            outro: "Need hel , or have questions? Just reply to this email, we'd love to help.  "
        },
    };
}

// // TEMP TEST - DELETE AFTER CONFIRMING
// sendEmail({
//   to: "test@example.com",
//   subject: "Mailtrap HTML Test",
//   mailgenContent: emailVerificationMailgenContent(
//     "Rishi",
//     "https://example.com/verify"
//   ),
// });


export {
    emailVerificationMailgenContent,
    forgotPasswordMailgenContent,
    sendEmail
};
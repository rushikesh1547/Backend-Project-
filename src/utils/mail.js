import Mailgen from "mailgen";



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
                    link: verificationUrl
                },
            },
            outro: "Need hel , or have questions? Just reply to this email, we'd love to help.  "
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
                    text:"Verify your email here",
                    link: verificationUrl
                },
            },
            outro: "Need hel , or have questions? Just reply to this email, we'd love to help.  "
        },
    };
}
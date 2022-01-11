import { createTransport } from 'nodemailer';
import { email } from '../config/index.js';

export const sendEmail = async (content) => {
    const transporter = await createTransport({
        host: email.host,
        port: Number(email.port),
        secure: Number(email.port) === 465, // true for 465, false for other ports
        auth: {
            user: email.user, // generated ethereal user
            pass: email.pass, // generated ethereal password
        },
    });

    await transporter.sendMail({
        from: `掘金 ${email.user}`, // sender address
        to: email.to, // list of receivers
        subject: '掘金自动签到', // Subject line
        html: content, // html body
    });
};

import { createTransport } from 'nodemailer';
import { email } from '../../config/index.js';
import LogService from './log-service.js';

class EmailService extends LogService {
    constructor() {
        super();
        this.isValidate = email.host && email.port && email.user && email.pass && email.to;
    }

    async log(...data) {
        console.log('email log:', ...data);
    }

    async error(...data) {
        console.error('email error:', ...data);
    }

    async sendMessage(content) {
        if (!this.isValidate) return;

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
            from: `掘金<${email.user}>`, // sender address
            to: email.to, // list of receivers
            subject: '掘金自动签到', // Subject line
            html: this.assembledText(content), // html body
        });
    }

    assembledText(content) {
        if (Array.isArray(content)) {
            const html = [];

            content.forEach((text) => {
                html.push(`<p>${text}</p>`);
            });

            return `<div>${html.join('')}</div>`;
        } else if (typeof content === 'string') {
            return content;
        }
    }
}

export default new EmailService();

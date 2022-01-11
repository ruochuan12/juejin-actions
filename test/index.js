import { main } from '../src/index.js';
import { sendEmail } from '../src/services/email.js';

main().then(async (resArr) => {
    const [err, res] = resArr;
    if (err) {
        console.error(err);
        await sendEmail(err);
        return;
    }
    console.log(res.err_msg);
    await sendEmail(res.err_msg);
});

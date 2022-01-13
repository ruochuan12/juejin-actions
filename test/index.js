import { main } from '../src/index.js';
import LogServices from '../src/services/log/index.js';
import to from '../src/services/await-to-js.js';

main().then(async (resArr) => {
    const [err, res] = resArr;
    if (err) {
        console.error(err);
        for (let logService of LogServices) {
            const [logServiceError] = await to(logService.sendMessage(err.err_msg));
            if (logServiceError) await logService.error(logServiceError);
        }
        return;
    }
    console.log(res.err_msg.join('\n'));
    for (let logService of LogServices) {
        const [logServiceError] = await to(logService.sendMessage(res.err_msg));
        if (logServiceError) await logService.error(logServiceError);
    }
});

import { main } from './src/index.js';
import * as core from '@actions/core';
import * as github from '@actions/github';
import { sendEmail } from './src/services/email.js';

try {
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    const time = new Date().toTimeString();
    core.setOutput('time', time);
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`);
    main().then(async (resArr) => {
        const [err, res] = resArr;
        if (err) {
            core.setOutput('checkInResult', err);
            await sendEmail(err);
            return;
        }
        core.setOutput('checkInResult', res.err_msg);
        await sendEmail(res.err_msg);
    });
} catch (error) {
    core.setFailed(error.message);
}

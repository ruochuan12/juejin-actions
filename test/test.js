import { execFile } from 'child_process';
import { promisify } from 'util';
import * as env from './env.js';

const execFilePromise = promisify(execFile);

async function main() {
    const result = await execFilePromise('node', ['./test/index.js'], {
        env: { ...process.env, ...env },
    });
    console.log(result);
}

main();

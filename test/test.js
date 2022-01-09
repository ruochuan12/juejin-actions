
import { execFile } from 'child_process';
import { promisify } from 'util';
// 当前路径下 cookie.js export const cookie = 'xxxx';
import { cookie } from './cookie.js';
const execFilePromise = promisify(execFile);

async function main(){
    const result = await execFilePromise('node', ['./test/index.js'], { env: { ...process.env, JUEJIN_COOKIE: cookie } });
    console.log(result);
}
main();
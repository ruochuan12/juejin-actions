import { checkIn, getStatus } from './services/index.js';

export async function main(){
    const [err, res] = await getStatus();
    console.log(err, res, 'main');
    if(err){
        throw new Error(err.reponse);
    }
    // 未签到
    if(res.err_no === 0 && !res.data){
        // 签到
        const result = await checkIn();
        console.log(result);
    }
}
// main();
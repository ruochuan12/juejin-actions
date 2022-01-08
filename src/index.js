import { checkIn, getStatus } from './services/index.js';

export async function main(){
    const [err, res] = await getStatus();
    if(err){
        return [err, res];
    }
    // 未签到
    if(res.err_no === 0 && !res.data){
        // 签到
        return await checkIn();
    }
    else{
        return [err, { err_msg: '您今日已完成签到，请勿重复签到！' }];
    }
}
// main().then(resArr => {
//     const [err, res] = resArr;
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(res.err_msg);
// });
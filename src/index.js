import { checkIn, getStatus, getCounts, getCurPoint } from './services/index.js';

async function getInfo(){
    const [err1, res1] = await getCounts();
    const [err2, res2] = await getCurPoint();
    let message = '';
    if(!err1){
        message += `连续签到天数：${res1.data.cont_count}\n`;
        message += `累计签到天数：${res1.data.sum_count}\n`;
    }
    if(!err2){
        message += `当前矿石数：${res2.data}`;
    }
    return message;
}

export async function main(){
    const [err, res] = await getStatus();
    if(err){
        return [err, res];
    }
    // 未签到
    if(res.err_no === 0 && !res.data){
        // 签到
        const [err, res] = await checkIn();
        const message = await getInfo();
        return [err, { err_msg: `${res.err_msg}\n${message}` }];
    }
    else{
        const message = await getInfo();
        return [err, { err_msg: '您今日已完成签到，请勿重复签到！\n' + message }];
    }
}
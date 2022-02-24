import { checkIn, getStatus, getCounts, getCurPoint, draw } from './services/index.js';

async function getInfo() {
    const [err1, res1] = await getCurPoint();
    const [err2, res2] = await getCounts();
    const message = [];
    if (!err1) {
        message.push(`当前矿石数: ${res1.data}`);
    }
    if (!err2) {
        message.push(`连续签到天数: ${res2.data.cont_count}`);
        message.push(`累计签到天数: ${res2.data.sum_count}\n`);
    }
    return message;
}

async function drawActions(){
    const message = [];
    const [lotteryErr, lotteryRes] = await getLotteryConfig();
    if(!lotteryErr){
        message.push('您今日已抽奖！');
    }
    const [drawErr, drawRes] = await draw();
    console.log(lotteryRes, drawRes, 'lotteryRes, drawRes');
    if(drawErr){
        message.push('抽奖失败');
    }
    message.push('获得的奖品是：' + drawRes.lottery_name);
    return message;
}

export async function main() {
    const [err, res] = await getStatus();
    if (err) {
        return [err, res];
    }
    // 未签到
    if (res.err_no === 0 && !res.data) {
        // 签到
        const [err] = await checkIn();
        const message = await getInfo();
        const msg2 = await drawActions();
        return [err, { err_msg: [...message, ...msg2] }];
    } else {
        const message = await getInfo();
        message.unshift('您今日已完成签到，请勿重复签到！');
        return [err, { err_msg: message }];
    }
}

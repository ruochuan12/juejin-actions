import axios from 'axios';
import to from './await-to-js.js';
import { COOKIE } from '../config/index.js';
const headers = {
    cookie: COOKIE,
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "content-type": "application/json",
    "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"97\", \"Chromium\";v=\"97\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "Referer": "https://juejin.cn/",
    "Referrer-Policy": "strict-origin-when-cross-origin",
};

export const request = async function({ url, method = 'get' }){
    console.log(url);
    const [err, res]= await to(axios({ url, method, headers }));
    // console.log(err, res, 'await-to-js');
    const result = [err, res];
    if(res && res.data && res.data.err_no !== 0){
        // console.log(data.err_msg);
    }
    return result;
}
import axios from 'axios';
import to from './await-to-js.js';
import { headers } from '../config/index.js';

export const isObject = (val) => typeof val === 'object' && val !== null;

export const request = async function(options){
    console.log('调用的接口：', options);
    const lastOptions = Object.assign({}, options, { headers });
    const [err, res] = await to(axios(lastOptions));
    // res.data
    // { err_no: 0, err_msg: 'success', data: 52055 }
    // { err_no: 403, err_msg: 'must login', data: null }
    let result = [err, res];
    if(err || !isObject(res)){
        return result;
    }
    const { data: { err_no : dataErrNo } } = res;
    if(dataErrNo === 0){
        result = [err, res && res.data];
    }
    if(dataErrNo === 403){
        result = [{ ...res.data, err_msg: `${res.data.err_msg} \n 目前未登录，请检查 JUEJIN_COOKIE 是否正确` }, res.data];
    }
    return result;
}
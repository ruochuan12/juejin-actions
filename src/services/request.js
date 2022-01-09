import axios from 'axios';
import to from './await-to-js.js';
import { headers } from '../config/index.js';

export const request = async function(options){
    console.log('调用的接口：', options);
    const lastOptions = Object.assign({}, options, { headers });
    const [err, res] = await to(axios(lastOptions));
    const result = [err, res && res.data];
    return result;
}
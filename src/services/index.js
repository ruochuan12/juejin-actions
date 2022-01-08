import { request } from './request.js';


export const draw = async function(){
    await request('lottery_config/get');
}


export const getStatus = async function(){
    return await request({ 
        url: 'https://api.juejin.cn/growth_api/v1/get_today_status',
    });
}

export const checkIn = async function(){
    return await request({ 
        url: 'https://api.juejin.cn/growth_api/v1/check_in',
        method: 'post',
    });
}
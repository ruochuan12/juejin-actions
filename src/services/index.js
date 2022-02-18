import { request } from './request.js';
const prefix = 'https://api.juejin.cn/growth_api/v1/';

/**
 * 抽奖
 * @author 若川
 * @date 2022-01-09
 */
export const draw = async function(){
    return await request({
        url: `${prefix}lottery_config/get`,
    });
}

/**
 * 获取签到状态
 * @author 若川
 * @date 2022-01-09
 */
export const getStatus = async function(){
    return await request({
        url: `${prefix}get_today_status`,
    });
}

/**
 * 签到
 * @author 若川
 * @date 2022-01-09
 */
export const checkIn = async function(){
    return await request({
        url: `${prefix}check_in`,
        method: 'post',
    });
}

/**
 * 获取连续签到天数、累计签到天数
 * @author 若川
 * @date 2022-01-09
 */
export const getCounts = async function(){
    return await request({
        url: `${prefix}get_counts`,
    });
}

/**
 * 获取当前积分
 * @author 若川
 * @date 2022-01-09
 */
export const getCurPoint = async function(){
    return await request({
        url: `${prefix}get_cur_point`,
    });
}

/**
 * 抽奖~不是第一次会花200矿石
 * @author StevenLee
 * @date 2022-02-18
 */
export const freeDraw = async function(){
    return await request({
        url: `${prefix}lottery/draw`,
        method: 'post'
    });
}

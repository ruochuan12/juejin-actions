import * as core from '@actions/core';
import * as github from '@actions/github';

try {
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    const time = new Date().toTimeString();
    core.setOutput('time', time);
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`);
    const msg = `2022年2月18日，掘金@梅楼封发布了自动签到的警告封号处理消息：https://juejin.cn/pin/7065954293509160997\n
    我开发的自动签到小工具，可能导致各位被封号，所以我禁用签到功能了，目前无法正常签到了。\n
    大家可以学习本仓库。另外欢迎添加我的微信 ruochuan12，参加近3000人报名的源码共读活动 https://www.yuque.com/ruochuan12/topics/1\n
    学会看源码相当于打开了新的世界，成长会比较快`;
    core.setOutput('checkInResult', msg);
} catch (error) {
    core.setFailed(error.message);
}

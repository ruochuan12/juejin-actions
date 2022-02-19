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
    core.setOutput('checkInResult', '2月18日，由于掘金政策不允许，梅楼封发布的警告封号处理消息：https://juejin.cn/pin/7065954293509160997，可能被封号。\n\n');
    core.setOutput('checkInResult', '，所以我禁用了，无法正常签到了\n\n');
    core.setOutput('checkInResult', '大家可以学习本仓库。另外欢迎添加我的微信 ruochuan12，参加近3000人报名的源码共读活动 https://www.yuque.com/ruochuan12/topics/1\n\n');
    core.setOutput('checkInResult', '学会看源码相当于打开了新的世界，成长会比较快\n\n');
} catch (error) {
    core.setFailed(error.message);
}

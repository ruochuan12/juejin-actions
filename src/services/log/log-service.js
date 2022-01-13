// 所有消息推送服务继承这个类
export default class LogService {
    isValidate = false;

    constructor() {}

    async log(...data) {}

    async error(...data) {}

    async sendMessage(...data) {}
}

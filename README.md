# juejin-actions
> 每天掘金自动签到 时间自定义，默认11:00

你好，我是[**若川**](https://lxchuan12.gitee.io)。目前持续组织了5个月[每周一起学200行左右源码共读活动](https://www.yuque.com/ruochuan12/topics/1)，每周一期，已进行到20期，感兴趣的可以加我微信 [ruochuan12](https://mp.weixin.qq.com/s?__biz=MzA5MjQwMzQyNw==&mid=2650756550&idx=1&sn=9acc5e30325963e455f53ec2f64c1fdd&chksm=8866564abf11df5c41307dba3eb84e8e14de900e1b3500aaebe802aff05b0ba2c24e4690516b&token=917686367&lang=zh_CN#rd) 加群参与，长期交流学习。

## 使用
### fork

项目 settings => secrets 添加 JUEJIN_COOKIE 掘金 cookie
### 新建项目或者已有项目

添加 workflows main.yml

```yml
on: 
 push:
 schedule:
 # 定时任务 每天 11:00 自动签到，按照计划任务队列，可能延迟 3 + 8 = 北京时间 11
    - cron: '00 3 * * *'

jobs:
  juejin:
    runs-on: ubuntu-latest
    name: 掘金自动签到
    steps:
      - name: Hello world action step
        id: hello
        uses: lxchuan12/juejin-actions@main
        env: 
          JUEJIN_COOKIE: ${{secrets.JUEJIN_COOKIE}}
        with:
          who-to-greet: '若川'
      # Use the output from the `hello` step
      - name: Get the output
        run: | 
          echo "The time was ${{ steps.hello.outputs.time }}"
          echo "签到结果： ${{ steps.hello.outputs.checkInResult }}"
```

同样在项目 settings => secrets 添加 JUEJIN_COOKIE 掘金 cookie

## 本地开发

```bash
npm i -g pnpm
pnpm install
```

在 `test` 文件夹新增 `cookie.js` 文件代码如下：

```js
export const cookie = '你在掘金的cookie';
```

## 本地测试

```bash
node test/test.js
```

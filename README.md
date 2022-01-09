# juejin-actions
## 每天零点5分自动签到

## 使用
### fork

项目 settings => secrets 添加 JUEJIN_COOKIE 掘金 cookie
### 新建项目或者已有项目

添加 workflows main.yml

```yml
on: 
 push:
 schedule:
 # 定时任务 每天 00:05 自动签到 北京时间+8
    - cron: '30 16 * * *'

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

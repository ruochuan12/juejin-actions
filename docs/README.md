## 写了一个小工具，帮我在掘金自动签到

## 前言

作为开发，我们为了促活，常常会做签到、抽奖功能。连续签到越多天获得的越多。但对于用户，签到一般都会忘记。

这时我们想，要是有工具帮我们定时自动签到多好。

作为一名互联网打工人，我们自己就可以开发这样的工具。

主要技术思路就是：结合 `github action` 的定时任务 `schedule` 功能，每天定时用 `axios` 调用签到接口。

## 使用

第一步：`fork` 我的项目，或者在已有的 `github` 项目或者新建 `github` 项目，新增 `.github/workflows/main.yml` 文件（其中 `main.yml` 可以自定义名称），复制我写的 `github actions` 配置，可以自行设置定时时间。

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

第二步：settings => secrets 新增一个 `JUEJIN_COOKIE` 的字段，粘贴掘金 `cookie`。等待每天定时签到即可。



## 思路分析

获取

## 实现

## 打包

```
```



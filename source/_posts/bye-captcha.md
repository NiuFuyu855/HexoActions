---
abbrlink: captcha
categories:
- 技术分享
date: '2022-09-04 23:03:33'
tags:
- captcha
- 机器人验证
title: 验证码小工具：与烦人的验证码说再见
updated: '2022-09-04 23:03:35'
---
# 验证码小工具

Buster、Noptcha 是两款全平台浏览器插件，可自动解决验证码，为用户省心省时。

验证码最初是为了分辨真人和机器人而生，而目前的 ReCAPTCHA v2 的街景等图片验证码耗时长，而且常有重选情况，语音验证码只支持英文，对于中文用户极度不友好。因而，开发者开发出了以上两款浏览器插件，可以解决几乎所有 ReCAPTCHA 验证码。

**目前这两款插件对国内的极验（Bilibili 在用）未能适配，但极验的验证码相对更简单省时，后续有适配，本站将第一时间更新。**

两款插件建议搭配使用，不会相互冲突，同时在一边出现问题之后可以立刻换用另一插件解决！

## Noptcha（新）

> 百分百免费，适用于所有 hCAPTCHA 与 ReCAPTCHA 网站，适用于所有语言（然而在使用时，其它语言的测试结果相对更差，站长注）。

Noptcha 使用深度学习算法，把验证码内容交给服务器自动识别。随着越来越多的用户使用 Noptcha，AI 在解决验证码方面会变得更好。当添加新的验证码类型时，AI 会学习实时解决它们！

### 使用教程

安装好 Noptcha，后，打开菜单，**启用** Auto Solve 与 Auto Open，将 Solve Delay 与 Open Delay 设置为  **0** ，ReCaptcha Method 切换成  **Voice** （此配置经测试成功率最高）。之后，插件会自动解决所有验证码。

### 安全警告

Noptcha 含有未告知用户的违规 aff 链（类似于返利邀请码，Github 上有去后门版本，可以使用这个）

## Buster

> Buster 是一个浏览器扩展程序，可帮助您通过使用语音识别完成 reCAPTCHA 音频挑战来解决困难的验证码。通过单击 reCAPTCHA 小部件底部的扩展按钮来解决挑战。

reCAPTCHA 挑战仍然是网络上的一个相当大的负担，根据我们的身体和认知能力、我们的社会和文化背景以及我们连接的设备或网络，延迟并经常阻止我们访问服务和信息。

验证码的难度可能如此不平衡，有时它们对机器人似乎比对人类更友好。

该项目的目标是通过让我们轻松访问自动化系统已经使用的解决方案来改善我们使用验证码的体验。

### 使用教程

安装即用。为了提高成功率，ReCAPTCHA 的语言以及自动设置为英文。在验证码窗口中，手动点击黄色小人即可（项目将来也不会支持自动操作，因为这样触犯了 Google 的相关权益）。站长在着手开发可以自动点击的油猴脚本。

Buster 同时提供了详细教程与模拟用户操作的客户端，参见 [Github 项目主页 ](https://github.com/dessant/buster)。

## 软件明细


| 属性     | 值                                                   |
| -------- | ---------------------------------------------------- |
| 适用平台 | 全平台（现代浏览器）                                 |
| 语言     | 英语                                                 |
| 发行格式 | Chrome / Firefox / Bing / Opera 插件中心，未封装 zip |

## 下载地址

### Buster

* Github（官方）：[ 下载地址](https://github.com/dessant/buster/releases/)
* Chrome 网上应用店（大陆用户无法访问）：[ 商店页面](https://chrome.google.com/webstore/detail/mpbjkejclgfgadiemmefgebjfooflfhl)
* Firefox 扩展商店：[ 商店页面](https://addons.mozilla.org/en-US/firefox/addon/buster-captcha-solver/)
* Edge 扩展商店：[ 商店页面](https://microsoftedge.microsoft.com/addons/detail/admkpobhocmdideidcndkfaeffadipkc)
* Opera 扩展商店：[ 商店页面](https://addons.opera.com/en/extensions/details/buster-captcha-solver-for-humans/)

（由于资源过多，不提供 MD5。对应浏览器直接在商店下载可解决一切问题。）

### Noptcha

* Chrome 网上应用店（大陆用户无法访问）：[ 商店页面【不推荐从这里下载】](https://chrome.google.com/webstore/detail/dknlfmjaanfblgfdfebhijalfmhmjjjo)
* Firefox 扩展商店：[商店页面【不推荐从这里下载】](https://addons.mozilla.org/zh-CN/firefox/addon/noptcha/)
* Github（第三方，去除后门版本）：[下载地址](https://github.com/Sqaaakoi/noptcha-patch/releases/)

（由于资源过多，不提供 MD5。强烈建议下载去除后门版本。）

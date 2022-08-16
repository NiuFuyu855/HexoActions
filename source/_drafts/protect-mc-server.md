---
abbrlink: protect-mc-server
categories:
- 技术分享
date: '2022-08-16 09:26:28'
tags:
- ''
- MC
- Minecraft
- 我的世界
- 服务器
title: 使用免费的Cloudflare保护Minecraft服务器
updated: '2022-08-16 09:46:36'
---
# 前言

> ***网络攻击无处不在，最近Apache Log4j病毒在JAVA中肆无忌惮的传播，对我们小服主造成了极大的危害，还有网络DDoS等等，心血来潮给大家写一个教程关于保护自己的Minecraft服务器以免受DDoS攻击***

# 课前准备

1.一台Minecraft云服务器( ~~有多的可以送我一台(bushi [doge]~~ )
2.CloudFlare账户
4.域名
3.专注的脑子*
~4.Money~
**教程开始**

# 教程

首先我们打开帮我们托管云服务器的服务商，这里我用的是 [腾讯云](https://cloud.tencent.com/) 的轻量学生服务器，在管理页面中点击概要，往下滑，找到服务器的公网IP（一定要是公网，内网行不通噢）![腾讯云](https://s2.loli.net/2022/01/02/Cg4Yc1STu86ND7Z.png "腾讯云")

我们把公网IP复制下来，打开 [cloudflare](https://dash.cloudflare.com) 的控制面板，找到你的域名，进入后单击左边的DNS![Cloudflare](https://s2.loli.net/2022/01/02/YHn5i8EhOFxKNVX.png "Cloudflare")
单击添加记录，类型选择A，名称任意，喜欢就好（我用mc做名称，那我将来进服务器时使用的地址就是mc.muliny.xyz），内容填写在服务商那复制的公网IP（我是在腾讯云复制的），接下来就是代理状态，看图吧，一定要经过cloudflare的云，TTL自动即可![解析](https://s2.loli.net/2022/01/02/8ZQrtVa3YNhfbld.png "解析")
这时候我们Win+R打开CMD ping我们解析的域名（我的是mc.muliny.xyz）
![Ping](https://s2.loli.net/2022/01/02/DTXfZG8oOyEp4r7.png "Ping")
ping不通？请求超时？没事的，我们主要是看箭头指的位置是不是和我们在服务商那里看到的公网IP不一样就行，如果不一样，说明我们成功了，我们已经完成了非常重要的任务------隐藏源站IP。但还没有结束，这时用这个地址是不能连接上服务器的，我们还要对它进行SRV转发。
同样，我们需要再次添加一个新记录，类型选择SRV 其他的看图抄作业吧！注意:名称和目标需要根据自己在前面的设置适当更改

![作业](https://s2.loli.net/2022/01/02/a7pFUZ14hrP3kzm.png "作业")

```
设置好后，大功告成！
稍等一分钟待解析生效，我们就可以用设置的解析的地址进入我们的服务器啦！
```

# 搬运声明

版权属于： **HunterYP1**

本文链接： [http://www.muliny.xyz/archives/1/](http://www.muliny.xyz/archives/1/)

作品采用： **《** [署名-非商业性使用-相同方式共享 4.0 国际 (CC BY-NC-SA 4.0)](http://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh) **》许可协议授权**

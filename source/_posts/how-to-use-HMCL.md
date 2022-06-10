---
title: 什么？你会不会用 HMCL 玩MC？
date: 2022-06-06 20:30:00
cover: https://pic.rmb.bdstatic.com/bjh/b6cc5566db8c66501926c215fec27d58.jpeg
tags:
- HMCL
- 教程
- Minecraft
categories:
- [日常, 游戏, Minecraft, HMCL]
---

用 HMCL 启动 Minecraft，多是一件美事啊。
---
> 本文将从最基础的安装 Java 开始讲解，请合理使用 `Ctrl+F` 寻找您需要阅读的内容
---
## Java 的配置

根据 [Minecraft Wiki 的介绍](https://wiki.biligame.com/mc/Java%E7%89%88#.E8.BD.AF.E4.BB.B6.E9.9C.80.E6.B1.82)，为了可以舒服、稳定地游玩游戏，我认为在计算机上最好安装 Java 8 和 Java 17，这两个都是长期支持版本，并且可以满足大部分正式版本的启动。

### 安装 Java

这是我推荐的一种方法，Java会安装到计算机中并添加到环境变量。并且这样安装也支持其他启动器识别 Java 并启动。

有许多可选的平台来下载 Java，我相信大部分用户都是在 Oracle Java 官网下载的 Java。但我更推荐去 [Bellsoft](https://bell-sw.com/pages/downloads/) 下载 Java。

在 `JDK 8` 选项下选择你的操作系统，在 `Package` 中选择 `Full JRE` ，然后点击 `Download MSI` （或者其他操作系统对应格式的安装包，注意不要下载 ZIP）下载，下载完成后运行安装包并一路 Next 即可完成 Java 安装。

安装 `JDK 17` 的步骤和安装 `JDK 8` 的方法一样，只要换到 `JDK 17` 的标签并重复下载、安装 `JDK 8` 的过程。

### 便携版安装 Java

下载 `JDK 8` 的 Full Jre ZIP 版本并解压，将文件夹重命名为 `jre-x64` 并将文件夹放置在 HMCL-3.*.exe 同目录下。这个方法仅支持 `HMCL 3.2.119` 及更高版本。

## 下载 HMCL

你可以到 [HMCL 官网](https://hmcl.huangyuhui.net/download/)下载。稳定版和开发版都可以，开发版可以获得比稳定版更多的一些功能。当然你也可以去 [HMCL 的 Jenkins](http://ci.huangyuhui.net/job/HMCL/) 下载，点击 `View` ，然后点击 `HMCL/Build/libs` ，点击你需要的可执行文件格式并下载。

## 配置游戏文件夹和添加账户

将你下载好的 HMCL 放在一个文件夹中（文件夹路径和名称最好不要有特殊字符、空格和中文文字），这个文件夹将当作你的游戏目录。点击 HMCL，在很快的初始化后，便可以看到 HMCL 的窗口。

![](https://pic.rmb.bdstatic.com/bjh/d08152093e341e87130f77fae210b0dc.png)

点击「没有游戏帐户」添加账户，你可以选择「离线模式」、「Mojang 账户」和、「微软账户」和「外置登录」

![](https://pic.rmb.bdstatic.com/bjh/53406e28cff59f7f91a0ce89be7a4989.png)

{% raw %}<article class="message is-info"><div class="message-body">{% endraw %}
提示：Mojang 账户马上就要无法游戏，所以建议各位仍在使用 Mojang 账户登录的玩家尽快到 [Minecraft 官网](https://minecraft.net)迁移到 Microsoft 账户。
{% raw %}</div></article>{% endraw %}

### 离线模式

![点击「离线模式」并输入你的游戏ID，点击「登录」](https://pic.rmb.bdstatic.com/bjh/429b5dd14adcb75b7dccb022bc125d90.png)

离线模式在不安装任何 Mod 时在本地游戏中是会显示默认的 Steve 或 Alex 皮肤的。但也可以使用 `CustomSkinLoader` 来加载，你可以在 [MCBBS 原帖](https://www.mcbbs.net/thread-269807-1-1.html)中查看如何配置。当然你也可以点击「上传皮肤」来更换皮肤，但是不建议在 HMCL 中这样操作。

### Mojang 账户

![点击「Mojang 账户」，输入你的邮箱和密码点击「登录」](https://pic.rmb.bdstatic.com/bjh/9037fb15ab14163cc3a8e0b4d88e0af6.png)

## 微软账户

点击「微软账户」，并点击「登录」。随后你会跳转到你的系统的默认浏览器中进行登录，复制 HMCL 中显示的应用代码，并登录你的 Microsoft 账户。

## 外置登录

以 `LittleSkin` 为例，点击「添加认证服务器」，并复制皮肤站的 `Yggdrasil` 地址，并点击「下一步」。

![](https://pic.rmb.bdstatic.com/bjh/a888ac2f11e6aeead9c5a0f7fcc0ce20.png)

![](https://pic.rmb.bdstatic.com/bjh/7e1cffff886342e6cdc074adca9055bf.png)

![你可以直接使用角色名进行登录，也可以输入你注册时使用的邮箱登录。](https://pic.rmb.bdstatic.com/bjh/4060043ffa149d1ad0de23e6c4b0d6ac.png)

这篇文章可能不能完全解决外置登录、`CustomSkinLoader` 的使用问题，请联系你的外置登录提供商解决。如果你使用 `LittleSkin`，可以参考 [LittleSkin 用户使用手册](https://manual.littlesk.in/)

## 下载游戏并启动

> 如果你只下载一个游戏版本，则可以直接进行下载，如果你要安装两个或者两个以上游戏版本，或者要安装各种各样的整合包和模组，最好先在「设置>全局游戏设置>版本隔离」中设置为「各版本独立」

![](https://pic.rmb.bdstatic.com/bjh/25fe5e20182494aad0aec060ad45fd41.png)

![在启动器主页点击下载，并选择你需要的版本](https://pic.rmb.bdstatic.com/bjh/c528dc4624426cc8ee512f840216442a.png)

以 `1.16.5` 为例，点击 `1.16.5` 并点击「安装」。安装结束后即可回到游戏主页点击「启动游戏」。

{% raw %}<article class="message is-success"><div class="message-body">{% endraw %}
如果你安装了 `1.17+` 和 `1.17-` 的游戏版本，最好在「设置>全局游戏设置>Java 路径」中设置为「自动选择合适的 Java」
![如果你安装了 `1.17+` 和 `1.17-` 的游戏版本，最好在「设置>全局游戏设置>Java 路径」中设置为「自动选择合适的 Java」](https://pic.rmb.bdstatic.com/bjh/b65fe2641a34e58a28f8b482015081ee.png "如果你安装了 `1.17+` 和 `1.17-` 的游戏版本，最好在「设置>全局游戏设置>Java 路径」中设置为「自动选择合适的 Java」")
{% raw %}</div></article>{% endraw %}

## 开始吧！

恭喜，你已经成功启动了 Minecraft，开始游戏吧！

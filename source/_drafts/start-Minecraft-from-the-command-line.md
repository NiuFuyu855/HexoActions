---
abbrlink: start-Minecraft-from-the-command-line
categories:
- - 日常
- - 技术教程
date: '2023-02-17 22:59:08'
sticky: ''
tags:
- Minecraft
- 教程
title: 用命令行启动Minecraft
updated: '2023-02-17 22:59:08'
---

## 前言

最近，S*网易严厉打压了第三方启动器，包括PCL、BakaXL等，随后又想将一名合法运营的腐竹送了进去，按照如此事态继续发展下去，各位MC国际版(Java版)玩家可能就无法继续使用第三方启动器了。所以，今天就来教大家制作一个命令脚本，来应该将来可能到来的最坏结果。

## 准备工作

1. 一台装有 Windows 系统的电脑（Linux没有试过）
2. 官方启动器一枚（~~官起在网易眼里总算合法了吧~~，没有正版不要紧）
   下载地址：[Download options for Minecraft | Minecraft](https://www.minecraft.net/zh-hans/download/alternative)
3. ~~一双勤劳的双手和一个脑袋~~

## 制作步骤

1. 使用官方启动器打开你想要游玩的版本
   首先，打开在准备工作中下载好的安装包，运行安装，打开安装好的启动器。
   ![](https://s-sh-4608-picbucket.oss.dogecdn.com/pic/MCLauncher1.png)

   接着，我们点击上方第二个``配置``按钮，来到配置游戏版本的页面。
   ![](https://s-sh-4608-picbucket.oss.dogecdn.com/pic/MCLauncher2.png)
   点击``加配置``，你会来到这样的一个页面。
   ![](https://s-sh-4608-picbucket.oss.dogecdn.com/pic/MCLauncher3.png)

   > 这里我以``1.8.9``为例，其他版本操作都是一致的。
   >

   然后，我们点击``显示更多选项``按钮，配置一下``JVM启动参数``，当然你也可以不更改。
   ![](https://s-sh-4608-picbucket.oss.dogecdn.com/pic/MCLauncher4.png)

   > PS. 这里其实只需要更改 ``"JVM参数"`` 中 ``"-Xmx 1G"`` 一项，具体几G看个人电脑配置，这里不多赘述。
   >

   最后点击右下角绿色按钮``保存``即可。
2. 启动刚刚我们配置好的游戏

   ![](https://s-sh-4608-picbucket.oss.dogecdn.com/pic/MCLauncher1.png)

   > PS. 如果你没有正版账号，可以选择右边的``开始试玩``按钮。
   >

   然后等待启动项下载相关配置文件后启动。
3. 游戏运行后，打开cmd，获取MC的启动命令。
   如果你是点击``开始试玩``的话，游戏运行后的是这样的
   ![](http://s-sh-4608-picbucket.oss.dogecdn.com/pic/MCLauncher5.png)
   不够你先别担心，直接``Win+R``打开``cmd``，输入下面这串命令（正版启动的也是一样操作）。

   ```cmd
   wmic process where caption='javaw.exe' get commandline
   ```

   或者输入

   ```cmd
   wmic process where caption='java.exe' get commandline
   ```

   ![](https://s-sh-4608-picbucket.oss.dogecdn.com/pic/MCLauncher6.png)

   > PS. 命令的生成可能因各种因素而异，不过别担心。
   >
   > 使用正版账号的同学就可以直接把生成的命令复制出来，``Win+R``调用运行，输入``notepad``，粘贴刚刚生成的命令，直接可以看下一步。
   >
   > 使用Demo(即点击``开始试玩``的同学)需要注意一下。还是和正版账号玩家一样，先复制一下生成的命令，然后``Win+R``调用运行，输入``notepad``，将，然后拉到脚本**最下面**，有一个``--demo``，我们把它删去。再稍微向前面看一点，有一个``--uuid xxxxxxxxxxxxxxxxxxxxxxxxx``这个就是玩家的UUID，就是玩家的通用唯一识别码，这里建议删去。然后再往前看一点，有一个``--username xxxxxx``，这个就是游戏中的名字了，你可以随便改。这三处都修改完成以后，就可以进行下一步了。
   >

   这里补充一下使用``PowerShell``获取启动命令的方法（可跳过，~~给深造者看的~~）：

   ```powershell
   echo \$(Get-Process -Name javaw).CommandLine
   ```

   或者

   ```powershell
   echo \$(Get-Process -Name java).CommandLine
   ```

   把echo换成scb，还能一步到位写进剪切版! 即

   ```powershell
   scb \$(Get-Process -Name javaw).CommandLine
   ```

   或者

   ```powershell
   scb \$(Get-Process -Name java).CommandLine
   ```
4.

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
title: 如何用命令行启动 Minecraft ？
updated: '2023-02-18 00:43:29'
---
## 前言

最近，S*网易严厉打压了第三方启动器，包括PCL、BakaXL等，随后又想将一名合法运营的腐竹送了进去，按照如此事态继续发展下去，各位MC国际版(Java版)玩家可能就无法继续使用第三方启动器了。所以，今天就来教大家制作一个命令脚本，来应该将来可能到来的最坏结果。

<!-- more -->

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

   把``echo``换成``scb``，还能一步到位写进剪切版! 即

   ```powershell
   scb \$(Get-Process -Name javaw).CommandLine
   ```

   或者

   ```powershell
   scb \$(Get-Process -Name java).CommandLine
   ```
4. 另存为启动命令
   把刚刚整理好的启动命令另存为，按``Ctrl+Shift+S``，在弹出的另存为窗口中，``文件类型``选择``所有文件 (*)``，然后把文件名改成``MCLauncher1.8.9.cmd``(或者别的，但后缀名一定要改成``.cmd``或者``.bat``)。
   ![](https://s-sh-4608-picbucket.oss.dogecdn.com/pic/MCLauncher7.png)
   至此，我们就完成了启动脚本的制作！

   ## 深入探究

   ### MCJE微软正版登录流程

#### 前言&大体流程

找了一圈看上去此类详细教程不多，虽然实现门槛不高，但仍作此记录。

这是大体流程 https://wiki.vg/Zh:Microsoft_Authentication_Scheme

那么就让我们开始吧

#### 背景：拆解启动参数

```
"<javaw或java路径>"
<一堆"-X"和"-D"打头的东西, 用于配置JVM等>
net.minecraft.client.main.Main
--username <用户名>
--version <游戏版本号>
--gameDir <游戏路径>
--assetsDir <资源文件路径>
--assetIndex <资源索引版本>
--uuid <用户UUID>
--accessToken <登录令牌>
--userType mojang
--versionType release
--width <窗口宽度>
--height <窗口高度>
```

我省去了大部分用于配置JVM的内容。（因为我也没搞懂全部，以后再说吧）

那么剩下的这个net.minecraft.client.main.Main就是主类了，也就是mc客户端的入口

他也有一点参数，我们细细地看其中决定启动者身份的：

username、uuid、accessToken

有了这三个，玩家就能登入服务器了。

username和uuid极易拿到，mojang是有专门api的。比如那个叫WisW人的uuid就可以通过如下方法获取：

https://api.mojang.com/users/profiles/minecraft/WisW

接下来，让我们来看看accessToken的获取流程

#### AccessToken的获取

##### 微软OAuth授权

第一步，我们须获得微软的访问令牌。

但是微软的文档（ https://learn.microsoft.com/zh-cn/azure/active-directory/develop/v2-oauth2-auth-code-flow ）似乎更新了，也就是说文档里面压根就没提到 login.live.com 。这是很神奇的一件事情。所以我们如果完全跟着那个文档走，你会发现在Azure的应用里面找不到登陆Xbox的权限（至少是我）。所以接下来的教程完全是参考 wiki.vg 给的那个例子走的。

所幸，格式大抵相同。首先要请求授权代码。先看例子（此处演示的是OAuth 2.0 授权代码流，也是主流启动器所使用的。设备权限授予流我不会）。这些东西直接复制到浏览器地址栏就好。

```
https://login.live.com/oauth20_authorize.srf
?client_id=00000000402b5328
&response_type=code
&scope=service::user.auth.xboxlive.com::MBI_SSL
&redirect_uri=https://login.live.com/oauth20_desktop.srf
```

先讲讲client id。这个id理论上应该你自己申请，但是我找不到门道，所以使用例子里给的那个（它是他人申请的，用途符合我们需要的要求）。它会验证你接下来的两个参数，如果不符合，就报错。

然后是scope这个参数，它的意思是需要用户同意授权的服务，这应该是微软相关的服务规定的，写XboxLive.signin应该也可以，目前没有找到相关的列表。

redirect_url指的是重定向的网址，在验证通过后，浏览器会重定向到这个网址，并且在后面跟上code（也就是一个授权代码，token）和lc（用途未知，可能是用于验证，但目前可忽略）。重定向后的网址就像这样：

```
https://login.live.com/oauth20_desktop.srf?code=xxxxx.....
&lc=2052
```

我们保存这个code（这玩意应该叫授权代码）。正如PCL启动器某个版本的做法：它会打开浏览器，让你登陆；随后让你复制一个url（这就是重定向后的url，是包含token的）。而HMCL的做法大抵是走的硬件权限授予流，所以说它会让你输入一个硬件码以识别。

下一步，我们要获得真正的访问令牌。

```
POST https://login.live.com/oauth20_token.srf
{
"client_id": "00000000402b5328",
"code": "<上一步取得的code>",
"grant_type": "authorization_code",
"redirect_uri": "https://login.live.com/oauth20_desktop.srf",
"scope": "service::user.auth.xboxlive.com::MBI_SSL"
}

Headers：
Content-Type: application/x-www-form-urlencoded
```

大括号内的内容就是POST请求的内容了。（注意！！！必须用双引号，以及英文输入法的冒号，还有记得把那个<>里面的内容替换掉）

那么请求头也就是Headers经我测试应该是可有可无，但是最好加上。

成功请求后返回的格式看起来像这样：

```
{
"token_type":"bearer",
"expires_in":86400,
"scope":"service::user.auth.xboxlive.com::MBI_SSL",
"access_token":"xxxxxxxxxxxxxxxxxxxxx......xxxxxxxxxx",
"refresh_token":"xxxxxxxxxxxxxxxxx......xxxxxx"，
"user_id":"xxxxxx",
"foci":"1"
}
```

expires in告诉了我们这个令牌最多维持一天。

先记录下access token。refresh token是用于重新申请的。重新申请会在本文末尾提到。

恭喜你！完成了第一步！

##### xbox live授权

接下来，我们要登陆xbox。

接下来的路程有一点困难。这帮子api如果请求错误，那就直接一个400给你，没有原因。所以你得好好地看这些内容。请求如下：

```
POST https://user.auth.xboxlive.com/user/authenticate
{
	"Properties": {
		"AuthMethod": "RPS",
		"SiteName": "user.auth.xboxlive.com",
		"RpsTicket": "<accessToken>"
	},
	"RelyingParty": "http://auth.xboxlive.com",
	"TokenType": "JWT"
}

Headers：
Content-Type: application/json
Accept: application/json
```

那么如果它跟你说400，你最好检查一下你的请求。我踩的坑就是把所有的双引号错误地变成了单引号。

如果请求正确，那么返回格式看起来像这样：

```
{
	"IssueInstant":"2023-02-12T08:44:39.0054858Z",
	"NotAfter":"2023-02-26T08:44:39.0054858Z",
	"Token":"xxxxxxxxxxxxx......xxxxxxxxxxxx",
	"DisplayClaims":{
		"xui":[
			{
				"uhs":"xxxx......xxxxxx"
			}
		]
	}
}
```

可得注意了，"xui"后面跟的是个列表，并且列表里面只有一项，里面是个json。

这里需要记录的东西多一点，我们不仅需要token，还需要那个"uhs"（也就是user hash code）。

##### xsts授权

好了，接下来依然和xbox打交道：

```
POST https://xsts.auth.xboxlive.com/xsts/authorize
{
	"Properties": {
		"SandboxId": "RETAIL",
		"UserTokens": {
			"xbl_token": "<token>"
		}
	},
	"RelyingParty": "rp://api.minecraftservices.com/",
	"TokenType": "JWT"
}

Headers：
Content-Type: application/json
Accept: application/json
```

正确响应：

```
{
	"IssueInstant":"2023-02-12T08:44:39.8987323Z",
	"NotAfter":"2023-02-13T00:44:39.8987323Z",
	"Token":"xxxxxxxxx......xxxxx",
	"DisplayClaims":{
		"xui":[
			{
				"uhs":"xxxxxxxxx...xxx"
			}
		]
	}
}
```

同样，记录token。这里的uhs应该和上一步的uhs一样。

##### Mojang授权

终于和mojang打交道了！

```
POST https://api.minecraftservices.com/authentication/login_with_xbox
{
	"identityToken": "XBL3.0 x=<uhs>;<token>"
}
```

再次注意：这里的identityToken得把uhs和token合起来！
正确响应：

```
{
"username" : "xxxx......xxxxxx",
"roles" : [ ],
"metadata" : { },
"access_token" : "xxxxx......xxxxxxxx",
"expires_in" : 86400,
"token_type" : "Bearer"
}
```

这个会一天后失效。事情到这里已经完毕了，响应中的access token就是开头启动参数中的那个。接下来我们会通过这个参数获得玩家的uuid、id和皮肤。

#### 获取皮肤

```
GET https://api.minecraftservices.com/minecraft/profile

Headers:
Authorization: "Bearer <access_token>"
```

可得注意了，这是GET请求，我们的token放在包头里边。记得Bearer后面有个空格，之后再跟着我们的token。响应留给各位去试吧，里面有id（也就是uuid）和name。

#### RefreshToken再利用

因为access_token有效期一天，于是我们要用refresh token来重新申请：

```
POST https://login.live.com/oauth20_token.srf
{
"client_id": "00000000402b5328",
"refresh_token": "<refresh_token>",
"grant_type": "refresh_token",
"scope": "service::user.auth.xboxlive.com::MBI_SSL"
}

Headers：
Content-Type: application/x-www-form-urlencoded
```

响应和上文请求访问令牌返回的一样：

```
{
"token_type":"bearer",
"expires_in":86400,
"scope":"service::user.auth.xboxlive.com::MBI_SSL",
"access_token":"xxxxxxxxxxxxxxxxxxxxx......xxxxxxxxxx",
"refresh_token":"xxxxxxxxxxxxxxxxx......xxxxxx"，
"user_id":"xxxxxx",
"foci":"1"
}
```

于是你得再走一遍流程。当然，记得把老的refresh_token替换成新的（也就是响应里面的那个）。

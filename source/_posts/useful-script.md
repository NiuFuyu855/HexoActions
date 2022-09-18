---
abbrlink: e42546e7
categories:
- - 日常
  - 脚本
date: '2022-06-10 19:07:00'
permalink: posts/useful-script/
sticky: 3
tags:
- 脚本
title: 整理亿些常用的脚本（持续更新中）
updated: '2022-09-18 20:44:15'
---
![Linux命令](https://off.cx/img/Linux-command.png "Linux命令")

<!-- more -->

## 综合工具箱（强烈推荐，集成了很多脚本）

```
wget -O box.sh https://raw.githubusercontent.com/BlueSkyXN/SKY-BOX/main/box.sh && chmod +x box.sh && clear && ./box.sh
```

## DD相关

### 甲骨文DD脚本

#### DD成Debian 10

```
bash <(wget --no-check-certificate -qO- 'https://raw.githubusercontent.com/MoeClub/Note/master/InstallNET.sh') -d 10 -v 64 -p "自定义root密码" -port "自定义ssh端口"
```

#### DD成Ubuntu 20.04

```
bash <(wget --no-check-certificate -qO- 'https://raw.githubusercontent.com/MoeClub/Note/master/InstallNET.sh') -u 20.04 -v 64 -p "自定义root密码" -port "自定义ssh端口"
```

### MoeClub脚本

**重点推荐:**

时间：22/11/2021 15:21 萌咖更新脚本：

1.新增对 Oracle AMD，Oracle ARM全面支持. 可支持从 Ubuntu, Oracle Linux 等系统网络重装.
2.更新 dd 镜像的基础系统版本.
3.移除对外部 wget 的依赖.
4.新增 -port 参数, 可更改默认SSH端口.
5.更新 内置的网络参数计算 逻辑.
6.更新 grub 配置文件定位逻辑, 可支持任意引导grub的系统.

以下系统已通过测试(其他自测):
Debian: 9, 10, 11;
Ubuntu: 18.04, 20.04;
CentOS: 6.10;
以下平台已通过测试(其他自测):
Oracle、Do、Azure

```
bash <(wget --no-check-certificate -qO- 'https://raw.githubusercontent.com/MoeClub/Note/master/InstallNET.sh') -d 10 -v 64 -p "自定义root密码" -port "自定义ssh端口"
```

-d 10 -v 64
-d 9 -v 64
-u 20.04 -v 64
-u 18.04 -v 64

开机改密码脚本：

开机改密：

```
#!/bin/bash
echo root:Vicer |sudo chpasswd root
sudo sed -i 's/^#\?PermitRootLogin.*/PermitRootLogin yes/g' /etc/ssh/sshd_config;
sudo sed -i 's/^#\?PasswordAuthentication.*/PasswordAuthentication yes/g' /etc/ssh/sshd_config;
sudo reboot
```

#### 另一位大佬的脚本

```
wget --no-check-certificate -O AutoReinstall.sh https://git.io/AutoReinstall.sh && bash AutoReinstall.sh
```

CentOS默认密码Pwd@CentOS 其它系统Pwd@Linux

OpenVZ / LXC 架构系统不适用

来源：https://blog.hicasper.com/post/135.html 参考：https://www.ydyno.com/archives/1245.html 感谢大佬的付出！

```
bash <(wget --no-check-certificate -qO- 'https://file.geekn.net/CNODnjau/InstallNET.sh') -d 11 -v 64 -a -firmware
```

-firmware 额外的驱动支持
-d 后面是系统版本号
-v 后面写64位 32位
-a （不清楚这个干啥的但是每个脚本都带）
–mirror 后面是镜像源地址

-p 后面写自定义密码

```镜像站地址
官方给出的地址列表：https://www.debian.org/mirror/list

一些国内的
ftp.cn.debian.org
mirror.bjtu.edu.cn
mirror.lzu.edu.cn      
mirror.nju.edu.cn      
mirrors.163.com      
mirrors.bfsu.edu.cn      
mirrors.hit.edu.cn      
mirrors.huaweicloud.com      
mirror.sjtu.edu.cn      
mirrors.tuna.tsinghua.edu.cn      
mirrors.ustc.edu.cn      

使用方法：（大致都是一样的）

清华源
--mirror 'https://mirrors.ustc.edu.cn/debian/'

腾讯源
--mirror 'https://mirrors.aliyun.com/debian/'

阿里源
--mirror 'https://mirrors.aliyun.com/debian/'

华为源
--mirror 'https://mirrors.huaweicloud.com/debian/'
```

## 测试相关

### 机器测试

#### 最全测速脚本

```
curl -fsL https://ilemonra.in/LemonBenchIntl | bash -s fast
```

#### superbench

```
wget -qO- git.io/superbench.sh | bash
```

#### Bench.sh

```
wget -qO- bench.sh | bash
```

### 速度测试

#### 直接显示回程线路

```
curl https://raw.githubusercontent.com/zhucaidan/mtr_trace/main/mtr_trace.sh|bash
```

```
wget -q route.f2k.pub -O route && bash route
```

```
# 第一个
wget https://raw.githubusercontent.com/nanqinlang-script/testrace/master/testrace.sh
bash testrace.sh

# 第二个
wget -qO- git.io/besttrace | bash
```

#### 四网测速

```
wget -O jcnf.sh https://raw.githubusercontent.com/Netflixxp/jcnfbesttrace/main/jcnf.sh

bash jcnf.sh
```

#### 三网测速

```
bash <(curl -Lso- http://yun.789888.xyz/speedtest.sh)
```

#### 测试25端口是否开放

```
telnet smtp.aol.com 25
```

#### 测试IPv4优先还是IPv6优先

```
curl ip.p3terx.com
```

#### 流媒体测试

##### 全媒体测试

```
bash <(curl -L -s https://raw.githubusercontent.com/lmc999/RegionRestrictionCheck/main/check.sh)
```

##### 奈飞测试

```
wget -O nf https://github.com/sjlleo/netflix-verify/releases/download/2.5/nf_2.5_linux_amd64 && chmod +x nf && clear && ./nf
```

```
#第一个
bash <(curl -L -s https://raw.githubusercontent.com/lmc999/RegionRestrictionCheck/main/check.sh)

# 第二个
bash <(curl -sSL "https://github.com/CoiaPrant/MediaUnlock_Test/raw/main/check.sh")
```

## WARP

```
wget -N --no-check-certificate https://cdn.jsdelivr.net/gh/YG-tsj/CFWarp-Pro/multi.sh && chmod +x multi.sh && ./multi.sh
```

之后进入脚本快捷方式为 ```bash multi.sh```

## 服务器时间

### CentOS 同步时间

```
yum -y install ntpdate
timedatectl set-timezone Asia/Shanghai
ntpdate ntp1.aliyun.com
```

## BBR

### CentOS 7 BBR

```
wget -N --no-check-certificate "https://raw.githubusercontent.com/chiakge/Linux-NetSpeed/master/tcp.sh" && chmod +x tcp.sh && ./tcp.sh
```

### 一键开启BBR

<font color="red">注意：需要Linux Kernel 内核升级到 4.9 及以上版本可以实现 BBR 加速</font>

```
uname -srm
```

输出结果：

```
Linux 3.10.0-957.12.2.el7.x86_64 x86_64
3 - 内核版本.
10 - 主修订版本.
0-957 - 次要修订版本.
12 - 补丁版本.
```

一般来说，Ubuntu18.04以上就可以(默认的内核4.15)

```
echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf
echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf

sysctl -p

sysctl net.ipv4.tcp_available_congestion_control

lsmod | grep bbr
```

## Docker相关

### 更新、安装必备软件

```
apt-get update && apt-get install -y wget vim
```

### 海外服务器

#### 非大陆Docker安装

```
wget -qO- get.docker.com | bash
```

#### 卸载Docker

```
sudo apt-get purge docker-ce docker-ce-cli containerd.io
```

```
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
```

#### 非大陆Docker-compose安装

```
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

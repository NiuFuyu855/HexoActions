---
abbrlink: hexo-to-valaxy
categories:
- - 日常
date: '2022-11-06 10:23:37'
sticky: ''
tags:
- Valaxy
- 迁移
title: Valaxy —— 快到没边的全新静态博客框架
updated: '2022-11-08 21:53:57'
---
## 前言

最近我看到 [BigCake](https://bigcake.cakemc.top) 在测试 [Valaxy](https://valaxy.site) ，我看他搭的[测试站](https://valaxy.bigcake.cakemc.top)还不错（~~其实就是看上了 [Valaxy](https://valaxy.site) 的翻译功能~~）,听说速度也很快，所以我也想整一个了（

![整一个](https://cdn.off.cx/pic/rnwtq.jpg "整一个")

<!-- more -->

## 开始

> ⚡️ Vue 3, Vite 2, pnpm, ESBuild - born with fastness

### 本地初始化

[项目地址](https://github.com/YunYouJun/valaxy)

新建一个文件夹，然后在这个文件夹内打开终端，输入如下内容进行初始化：

```
npm init valaxy
# `pnpm create valaxy` is recommened by author
```

根据命令行提示即可完成项目初始化。默认使用 Yun 主题，也可以选择文档主题（theme-press）。

进入到生成的项目文件夹内，输入指令安装依赖并启动本地预览

```
npm install 
# yarn
npm run dev
# yarn dev
```

本地预览启动以后，可以访问 `http://localhost:4859` 查看效果。然后就可以修改 `valaxy.config.ts` 来自定义你的博客了。

### 自动构建

可以使用 GitHub Pages/Netlify/Vercel/Cloudflare Pages。

`.github/workflows/gh-pages.yml` 将会自动部署 GitHub Pages，其他请参考文档。

### 手动部署

输入如下指令生成静态文件，然后就可以把 `dist` 文件夹下的内容部署到自己的服务器上了：

```
npm run build
# npm run build:spa for SPA
```

## 注意事项

Valaxy 目前还处于早期开发阶段，Yun 主题的功能仅复刻了 Hexo 版本的主要功能，你可以通过反馈 Bug/捐助云游君来支持 Valaxy 的开发。

> ~现在使用就是高贵的内测用户~

## 害！不会迁移~

因为 Valaxy 给的文档并没有涉及到 Hexo 迁移的方法，但我又不会迁移，所以目前只能慢慢琢磨琢磨（

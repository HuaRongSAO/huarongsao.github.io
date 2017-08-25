# 个人站点 See You

https://huarongsao.github.io/
> 基于[Nuxt.js](https://zh.nuxtjs.org) 开发的个人站点，部署于[GitHub Page](https://pages.github.com/)

![](https://hbimg.b0.upaiyun.com/999f6fc1aff3cb5c3f6a456be4062c095d6c7c7e41cd2-a3mCeu)

## 安装
由于要发布于github page 所以master分之只能用于静态文件，也就是nuxt生成dist文件，安装和开发都在dev分之。
``` bash

# install dependencies

$ npm install cp-file-cli --global #用于拷贝readme

$ npm install -g nuxt

$ git clone -b dev  git@github.com:HuaRongSAO/HuaRongSAO.github.io.git

$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```
## nuxt.js 如何部署到GitHub Page:
[链接](https://zh.nuxtjs.org/faq/github-pages)

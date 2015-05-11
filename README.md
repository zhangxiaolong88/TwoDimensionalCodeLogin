# twoDimensionalCodeLogin
二维码扫描登录 过程模拟

###环境配置

####1. nodejs 

本例环境建议版本：v0.10.26

####2. mongodb

创建datebase： twoDimensionalCodeLogin

### 初始化

```
  npm install
```

### 启动

```
  node server
```

###测试步骤：

####1. 打开http://localhost:8888, 点击`登录`按钮

在本地调试工具和服务器打印台均可视见 一次获取UID的请求，之后是轮询查看该UID是否绑定账户。

将日志中的UID记录下来。

####2. 打开地址 模拟移动端请求

请求地址：http://localhost：8888/uid/setUser?uid=<上一步记录的UID>&username=test

打开上面地址。

查看日志，可视见 客户端 获取到了用户名，即可执行登录之后的页面代码。

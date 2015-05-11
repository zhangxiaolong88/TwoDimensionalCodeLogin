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

####1. 轮询请求

打开http://localhost:8888, 点击`登录`按钮。

在本地调试工具和服务器打印台均可视见 一次获取UID的请求，之后是轮询查看该UID是否绑定账户。

将日志中的UID记录下来。

####2. 模拟移动端请求

本例子中省略了后台生成二维码的步骤，因此采用直接请求接口的方式 替代 移动端用户扫描二维码的动作。

http://localhost：8888/uid/setUser?uid=<上一步记录的UID>&username=test，打开上面请求地址。

查看日志，可视见 客户端 获取到了用户名，之后即可执行登录之后的页面代码。

PS：测试中，可打开多个浏览器，模拟多个用户，可以看到多个用户的登录过程没有相互影响。

var app = require("./app"),
	http = require("http").createServer(app),
	io = require('socket.io')(http),
	model = require("./server/mongoModel");

io.on('connection', function(socket) {
	console.log('a user connected');

	socket.on("check", function(obj) {
		console.log("user checking: " + obj.uid);

		var UidModel = model.UidModel;
		// 查询用户状态
		UidModel.findOne({
			_id: obj.uid
		}, function(err, data) {
			// 如果该uid绑定了用户 则返回登录成功的状态
			if (data.username) {
				console.log("user logined: " + obj.uid + ", username is " + data.username);
				// 响应client 可以执行登录的代码了
				socket.emit("checked", {
					state: 1,
					data: {
						uid: obj.uid,
						username: data.username
					}
				});
			} else {
				socket.emit("checked", {
					state: 0,
					data: {
						uid: obj.uid
					}
				});
			}
		})
	});

	socket.on("disconnect", function() {
		console.log("a user connection closed");
	});
});

http.listen("8888", function() {
	console.log("server is listen on port 8888.");
});
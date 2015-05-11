/** 
 * 总路由
 */

var UidModel = require("./mongoModel").UidModel;

module.exports = function(app) {
	// 静态文件
	app.get("*.html", function(req, res, next) {
		next();
	});

	/**
	 * 生成uid，uid将作为PC端与服务器相互识别的标志；
	 * 一般情况，数据库要生成能保证唯一性的uid；
	 * 这里我采用了mongodb的_id。
	 */
	app.get('/uid/getUid', function(req, res) {
		var uid = new UidModel({
			username: ""
		});

		uid.save(function(err) {
			if (err) {

			} else {
				res.send({
					state: 1,
					data: {
						uid: uid._id
					}
				});
			}
		});
	});

	/** 
	 * uid 绑定用户
	 * 这个接口接受来自移动端的发送的请求，参数如下：
	 * @param uid<string>
	 * @param username<string>
	 */
	app.get('/uid/setUser', function(req, res) {
		var uid = new UidModel({
			_id: req.query.uid,
			username: req.query.username
		});

		UidModel.findOne({
			_id: req.query.uid
		}, function(err,data){
			data.username = req.query.username;
			data.save(data, function(err, data){
				res.send({
					state: 1,
					data: {
						msg: "success"
					}
				});
			});
		})
	});


	app.use(function(req, res) {
		res.send('404');
	});

};
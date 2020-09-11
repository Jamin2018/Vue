var app = require('express')()
var server = require('http').Server(app);
var io = require('socket.io')(server)

server.listen(80)

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

// 建立实时通讯的连接
// io.on('connection', 事件的回调函数) 监听连接事件
io.on('connection', function(socket) {

	
	socket.server.onmessage = function(e) {
		console.log("回调数据")
	};
	
	socket.emit('news', {
		hello: 'world express'
	}); // 发送客户端数据
	socket.on('my other event', function(data) {
		console.log(data);
		socket.emit('news', {
			data: 'server:' + data
		}); // 发送客户端数据

	}); // 监听客户端发送过来的内容
});

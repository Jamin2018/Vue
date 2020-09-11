var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(80);

// 处理WEB服务器正常的请求
function handler(req, res) {
	fs.readFile(__dirname + '/index.html',
		function(err, data) {
			if (err) {
				res.writeHead(500);
				return res.end('Error loading index.html');
			}

			res.writeHead(200);
			res.end(data);
		}); 
}

// 建立实时通讯的连接
// io.on('connection', 事件的回调函数) 监听连接事件
io.on('connection', function(socket) {
	socket.emit('news', {
		hello: 'world'
	}); // 发送客户端数据
	socket.on('my other event', function(data) {
		console.log(data);
	});  // 监听客户端发送过来的内容
});

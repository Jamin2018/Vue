let socketio = {}
var XMLHttpRequest = require('XMLHttpRequest')


function getSocket(server) {
	socketio.io = require('socket.io')(server)


	// setTimeout延时执行，不然io还没初始化完
	// 这里修改了 bin/www文件的23到26行，目的是执行自定义方法getSocket，把require('socket.io')(server)赋值到对象socketio.io中

	let io = socketio.io // 获得www中实例化的require('socket.io')(server)对象
	io.on('connection', function(socket) {
		console.log(socket.id + "建立连接")


	});


}

socketio.getSocket = getSocket;

module.exports = socketio

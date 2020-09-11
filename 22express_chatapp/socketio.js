let socketio = {}

function getSocket(server){
	socketio.io = require('socket.io')(server)
	
	
	// setTimeout延时执行，不然io还没初始化完
	// 这里修改了 bin/www文件的23到26行，目的是执行自定义方法getSocket，把require('socket.io')(server)赋值到对象socketio.io中

	let io = socketio.io // 获得www中实例化的require('socket.io')(server)对象
	// 建立实时通讯的连接
	// io.on('connection', 事件的回调函数) 监听连接事件
	io.on('connection', function(socket) {
		// 此处的socket是某个用户的浏览器与服务器对象
		
		// 当新用户连接时，向所有人广播此人的id
		
		// io.sockets.emit向所有的用户发消息
		io.sockets.emit('addUser', {
			id:socket.id,
			content:'新用户加入'
		})
		
		socket.emit('news', {
			hello: 'world express chat app'
		}); // 发送客户端数据
		socket.on('my other event', function(data) {
			socket.emit("hello", {
				content:"msg of server"
			})
			console.log(data);
		});  // 监听客户端发送过来的内容
		
		// 向某个socket用户发送消息
		socket.on('sendUser', function(data){
			// data = {
			// 	from: "发送者ID",
			// 	to:"收到者ID",
			// 	content:"xxxx"
			// }
			socket.to(data.to).emit('sendClient', data)
		})
		
		socket.on('addRoom', function(data){
			let roomObj = socket.join(data.room)
		})
		
		// 监听群聊事件并广播给所有人
		socket.on('sendMsgRoom', function(data){
			console.log(data)
			// 不发给自己
			socket.to(data.room).emit('qunliao',data)
		})
		
		
	});
	
	// 命名空间
	let qq = io.of('/qq')
	qq.on('connection', function(socket) {
		socket.emit('news', {
			hello: 'qq命名空间内容'
		}); // 发送客户端数据
	});
	

	// 命名空间
	let vx = io.of('/vx')
	vx.on('connection', function(socket) {
		socket.emit('news', {
			hello: 'vx命名空间内容'
		}); // 发送客户端数据
	});
}

socketio.getSocket = getSocket;

module.exports = socketio
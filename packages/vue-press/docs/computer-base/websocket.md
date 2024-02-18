## websocket
websocket 是一种网络通信协议，它在单个TCP连接上提供全双工[1]建立在浏览器和服务端之间的通信通道。也就是说建立websocket直到关闭都是在一次TCP连接里进行的。

### 如何建立websocket
建立websocket之前，都需要进行一次Http1.1的请求：
```js
GET /chat HTTP/1.1
Connection: Upgrade
Upgrade: websocket
Sec-WebSocket-Key: Ia3dQjfWrAug/6qm7mTZOg==
```

服务端返回：
```js
HTTP/1.1 101 Switching Protocols
Connection: Upgrade
Upgrade: websocket
Sec-WebSocket-Accept: JkE58n3uIigYDMvC+KsBbGZsp1A=
```

1.双工：双工分为全双工和半双工，全双工是指客户端与服务端可以同时发送和接收信息。与之对应的是半双工，某一个时刻只能有一方进行发送。类似于电话和对讲机，电话是全双工，对讲机是半双工。
const express = require('express');
const path    = require('path'); // 경로 
const fs      = require('fs'); // 파일 시스템
const http    = require('http');
const https   = require('https');
const sio     = require('socket.io');
const favicon = require('serve-favicon'); //웹사이트 icon 모드 
const compression  = require('compression');

const app = express(), 
  port = process.env.PORT || 3000.
  server = process.env.NODE_ENV === 'production'
  ? http.createServer(app).listen(port) : http.createServer(options, app).listen(port), 
  io = sio(server);

app.use(compression());
app.use(express.static(path.join(__dirname, 'dist'))); //정적 폴더로 처리하는 부분 여기서는 dist 
app.use((req,res) => res.sendFile(__dirname + '/dist/index.html')); // index file을 처리하도록 
app.use(favicon('./dist/favicon.ico')); //favicon 사용 
app.disable('x-powered-by'); // 보안을 위한 설정 

io.sockets.on('connection', socket => {
  let room = '';
  socket.on('message', message => socket.broadcast.to(room).emit('mmessage'. message));
  socket.on('find', () => {
    const url = socket.request.headers.referer.split('/');
    room = url[url.length - 1];
    const sr = io.sockets.adapter.rooms[room];
    // 방이 없다
    if (sr == undefined) {
      socket.join(room);
      socket.emit('create');
    }
    else if ( sr.length == 1){
      socket.emit('join');
    }
  });
  // 방안의 client 에게 메시지 전달 
  socket.on('auth', data => {
    data.sid = socket.id;
    socket.broadcast.to(room).emit('approve', data);
  });
  socket.on( 'accept', id => {
    io.sockets.connected[id].join(room);
    io.in(room).emit('bridge');
  });
  socket.on('reject', () => socket.emit('full'));
  
  socket.on('leave', () => {
    socket.broadcast.to(room).emit('hangup');
    socket.leave(room);
  });
});

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const serverPort = 3000;

app.use(express.static(__dirname + '/../js/'));
app.use(express.static(__dirname + '/../html/'));

app.get('/', (req, res)=>{
    let path = require('path');
    res.sendFile(path.resolve(__dirname + '/../html/index.html'));
});

io.on('connection', (socket)=>{
  socket.on('chat message', (msg)=>{
    io.emit('chat message', msg);
  });
});

http.listen(serverPort, ()=>{
    console.log('listening on *:' + serverPort);
});

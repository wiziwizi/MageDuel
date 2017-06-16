var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/../js/'));
app.use(express.static(__dirname + '/../html/'));

app.get('/', (req, res)=>{
    var path = require('path');
    res.sendFile(path.resolve(__dirname + '/../html/index.html'));
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});

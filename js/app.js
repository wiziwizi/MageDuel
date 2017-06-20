const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const serverPort = 3000;
let count = 0,
    turn = 0;

var playerInfo = {
    id: 0,
    element: 0,
    battlefase: false,
    health: 100
}

let players = [];

app.use(express.static(__dirname + '/../js/'));
app.use(express.static(__dirname + '/../html/'));
app.use(express.static(__dirname + '/../images/'));

app.get('/', (req, res) => {
    let path = require('path');
    res.sendFile(path.resolve(__dirname + '/../html/index.html'));
});

io.on('connection', (socket) => {

    players.push(Object.assign({}, playerInfo));
    players[count].id = socket.id;
    console.log(players);
    count++;

    socket.on('powerSelect', (power) =>{
        for (let i = 0; i < players.length; i++)
        {
            if (players[i].id == socket.id)
            {
                players[i].element = power;
            }
        }
    });
    
    socket.on('attack', (dmg) => {
        console.log("turn");

        if (turn % 2 === 0) {
            players[0].health -= dmg;
        } else {
            players[1].health -= dmg;
        }
        turn++;
    });

    socket.on('disconnect', () => {

        for (let i = 0; i < players.length; i++)
        {
            if (players[i].id == socket.id)
            {
                players.splice(i,1);
                count--;
            }
        }
    });
});

http.listen(serverPort, () => {
    console.log('listening on *:' + serverPort);
});

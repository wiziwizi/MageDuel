const express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http);

const serverPort = 3000;
let count = 0,
    turn = 0,
    current = 0;

var playerInfo = {
    id: 0,
    element: 0,
    battlefase: false,
    health: 100,
    currentAttack: 0
}

let players = [];

app.use(express.static(__dirname + '/../js/'));
app.use(express.static(__dirname + '/../html/'));
app.use(express.static(__dirname + '/../images/'));

app.get('/', (req, res) => {
    let path = require('path');
    res.sendFile(path.resolve(__dirname + '/../html/index.html'));
});

function dmgCalc(attack, playerElement) {

    if (playerElement == 4) playerElement = -1;

    if (attack == playerElement + 1) return 10;

    if (playerElement == 0) playerElement = 5;

    if (attack == playerElement - 1) return 50;
    else return 30;
}

function endTurn() {
    turn++;
    current = (turn % 2 === 0 ? 0 : 1);
    socket.emit('displayInfo', (players, turn));
};

io.on('connection', (socket) => {

    console.log(players);
    players.push(Object.assign({}, playerInfo));
    players[count].id = socket.id;
    count++;

    socket.on('powerSelect', (power) => {
        power = Math.abs(parseInt(power));
        for (let i = 0; i < players.length; i++) {
            if (players[i].id == socket.id && power < 6) players[i].element = parseInt(power);
            console.log(players);
        }
    });

    socket.on('attack', (currentAttack) => {

        players[current].health -= dmgCalc(currentAttack, players[current].element);
        
        endTurn();
    });

    socket.on('disconnect', () => {

        for (let i = 0; i < players.length; i++) {
            if (players[i].id == socket.id) {
                players.splice(i, 1);
                count--;
            }
        }
    });
    socket.emit('displayInfo', players, turn);
});

http.listen(serverPort, () => {
    console.log('listening on *:' + serverPort);
});

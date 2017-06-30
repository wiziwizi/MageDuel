var express = require('express'),
    http = require('http'),
    app = express(),
    server = http.createServer(app),
    io = require('socket.io').listen(server),
    serverPort = 5000;

var currentPlayer = 0,
    otherPlayer = 1,
    turn = 0,
    currentTurn = 0;

//The Information of each player
var playerInfo = {
    id: null,
    element: null,
    battlefase: false,
    health: 100,
    currentAttack: 0
}

//All players connected
let players = [];

app.set('port', serverPort);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    let path = require('path');
    res.sendFile(path.resolve(__dirname + '/html/index.html'));
});

// Check the chosen attck with the players weakness/strength
function dmgCalc(attack, playerElement) {

    // attack = arcane, weakness = arcane
    if (attack == 5 && playerElement == 5) return 50;

    // attack = +1 in array = strength = less damage
    if (attack == playerElement) return 10;

    if (playerElement == 4) playerElement = -1;
    // attack = -1 in array = weakness = more damage
    if (attack == playerElement + 1) return 50;
    // anything else is neutral damage
    else return 30;
}

//check what player is asking
function checkPlayer(socket) {
    for (let i = 0; i < players.length; i++) {
        if (players[i].id == socket.id) {
            currentPlayer = i;
            otherPlayer = currentPlayer + (currentPlayer % 2 === 0 ? 1 : -1);
            return true;
        }
    }
}

function displayInfo(socket) {
    socket.to(players[otherPlayer].id).emit('displayInfo', players[otherPlayer], players[currentPlayer], turn);
    socket.emit('displayInfo', players[currentPlayer], players[otherPlayer], turn);
}

//When the player end its turn
function endTurn() {
    turn++;
    currentTurn = (turn % 2 === 0 ? 0 : 1);
}

//When a player connects to the server
io.on('connection', socket => {

    //adding the player info to the array
    players.push(Object.assign({}, playerInfo));
    players[players.length - 1].id = socket.id;

    //Player selects its Power
    socket.on('powerSelect', power => {
        power = Math.abs(parseInt(power));
        if (checkPlayer(socket) && power < 6) players[currentPlayer].element = parseInt(power);
        console.log(players);
        players[currentPlayer].battlefase = true;
        currentTurn = (turn % 2 === 0 ? 0 : 1);
        displayInfo(socket);
    });

    //When he attacks with the element of choice
    socket.on('attack', currentAttack => {

        console.log(turn);
        console.log(currentPlayer, otherPlayer);

        //Check if there is a player to attack
        if (players.length < 2) return;
        if (checkPlayer(socket) && currentTurn == currentPlayer && players[otherPlayer].battlefase) {
            players[otherPlayer].health -= dmgCalc(currentAttack, players[otherPlayer].element);

            if (players[otherPlayer].health <= 0) io.sockets.emit('gameOver');

            displayInfo(socket);
            endTurn();
        }
    });

    socket.on('disconnect', () => {

        if (checkPlayer(socket)) {
            players.splice(currentPlayer, 1);
        }
        if (players.length < 2) turn = 0;
    });

    if (players.length < 2) return;
    displayInfo(socket);
});

server.listen(serverPort);

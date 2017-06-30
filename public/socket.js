//var socket = io('https://mage-duel.herokuapp.com:5000/');
var socket = io('localhost:5000');

socket.on('displayInfo', (players, turn) => {
    document.getElementById("player1Health").innerHTML = "Player 1 health: " + players[0].health;
    document.getElementById("turn").innerHTML = "Turn: " + turn;

    document.getElementById("player2Health").innerHTML = "Player 2 health: " + players[1].health;
    document.getElementById("turn1").innerHTML = "Turn: " + turn;
});

socket.on('gameOver', () => GameOver());
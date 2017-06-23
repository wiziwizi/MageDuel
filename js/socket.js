var socket = io();

function selectElement(number) {
    socket.emit('powerSelect', number);
};

function attack(element) {
    socket.emit('attack', element);
};

socket.on('displayInfo', (players, turn) => {
    console.log('player info');
    document.getElementById("player1Health").innerHTML = "Player 1 health: " + players[0].health;
    document.getElementById("turn").innerHTML = "Turn: " + turn;
    
    document.getElementById("player2Health").innerHTML = "Player 2 health: " + players[1].health;
    document.getElementById("turn1").innerHTML = "Turn: " + turn;
});

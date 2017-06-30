//var socket = io('https://mage-duel.herokuapp.com:5000');
var socket = io('localhost:5000');
let message;

socket.on('displayInfo', (player, enemy, turn) => {
    
    if(enemy.health == null) message = "Waiting for enemy to connect";
    else message = "Enemy player health: " + enemy.health;
    
    document.getElementById("player2Health").innerHTML = message;
    document.getElementById("turn").innerHTML = "Turn: " + turn;

    switch (player.element) {
        case 0:
            message = "Player Element: fire";
            break;
        case 1:
            message = "Player Element: water";
            break;
        case 2:
            message = "Player Element: electricity";
            break;
        case 3:
            message = "Player Element: ground";
            break;
        case 4:
            message = "Player Element: wind";
            break;
        case 5:
            message = "Player Element: arcane";
            break;
        default:
            message = "Waiting for enemy to connect";
            break;
    }

    document.getElementById("player1Health").innerHTML = "Player health: " + player.health;
    document.getElementById("element").innerHTML = message;
});

socket.on('gameOver', () => GameOver());

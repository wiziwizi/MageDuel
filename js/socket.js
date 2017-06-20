$(function () {
    var socket = io();
    var damage = 25;
    
    $('form').submit( () =>{
        socket.emit('onDamage', damage);
        return false;
    });
    socket.on('onDamage', (dmg) => {
        console.log(100 - dmg);
    });
});

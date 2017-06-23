var socket = io();

function selectElement (number) {
    socket.emit('powerSelect', number);
};
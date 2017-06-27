let element = 0;
let prepDone = false;
buttons[0].press = () => element = 0; //fire
buttons[1].press = () => element = 1; //water
buttons[2].press = () => element = 2; //elecctricity
buttons[3].press = () => element = 3; //ground
buttons[4].press = () => element = 4; //wind
buttons[5].press = () => element = 5; //arcane

buttons[6].press = () =>
    (prepDone ? socket.emit('attack', element) : setElement());

function setElement() {
    socket.emit('powerSelect', element);
    prepDone = true;
}
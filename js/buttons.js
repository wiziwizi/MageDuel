let element = 0;
let stage = 0;
if (stage === 0) {

} else if (stage === 1) {
    buttons[0].press = () => element = 0; //fire
    buttons[1].press = () => element = 1; //water
    buttons[2].press = () => element = 2; //elecctricity
    buttons[3].press = () => element = 3; //ground
    buttons[4].press = () => element = 4; //wind
    buttons[5].press = () => element = 5; //arcane
    buttons[6].press = () => {
        socket.emit('attack', element);
        console.log(element);
    }
}
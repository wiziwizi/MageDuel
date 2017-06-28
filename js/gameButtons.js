let buttonTexture1 = PIXI.Texture.fromImage('button1.png');
let buttonTexture2 = PIXI.Texture.fromImage('button2.png');

let readyTexture1 = PIXI.Texture.fromImage('ready.png');
let readyTexture2 = PIXI.Texture.fromImage('ready2.png');

let buttonImages = [buttonTexture1, buttonTexture2, buttonTexture1];
let readyImages = [readyTexture1, readyTexture2, readyTexture1];

var buttons = [tink.button(buttonImages, 10, 520),
              tink.button(buttonImages, 188, 520),
              tink.button(buttonImages, 366, 520),
              tink.button(buttonImages, 544, 520),
              tink.button(buttonImages, 722, 520),
              tink.button(buttonImages, 900, 520),
              tink.button(readyImages, 1078, 520)];
let element = 0;
let prepDone = false;

buttons[6].color = 0xff0000;

for (i = 0; i < 7; i++)
    GameScene.addChild(buttons[i]);

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
let element = 0;
let prepDone = false;

//buttons
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

//players
let playerTexture1 = PIXI.Texture.fromImage('junkrat.png');
let playerTexture2 = PIXI.Texture.fromImage('cat.png');

var player1 = new PIXI.Sprite(playerTexture1);
player1.position.set(50, 300);
player1.scale.set(0.4, 0.4);

var player2 = new PIXI.Sprite(playerTexture2);
player2.position.set(975, 200);
player2.scale.set(0.5, 0.5);

//add to scene
GameScene.addChild(player1);
GameScene.addChild(player2);

for (i = 0; i < 7; i++)
    GameScene.addChild(buttons[i]);


//button functions
buttons[0].press = () => element = 0; //fire
buttons[1].press = () => element = 1; //water
buttons[2].press = () => element = 2; //elecctricity
buttons[3].press = () => element = 3; //ground
buttons[4].press = () => element = 4; //wind
buttons[5].press = () => //arcane
    (prepDone ? element = 5 : shake());
buttons[6].press = () => //ready
    (prepDone ? socket.emit('attack', element) : setElement());

function setElement() {
    socket.emit('powerSelect', element);
    prepDone = true;
}

function shake() {

}
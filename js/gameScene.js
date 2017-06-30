let element = 0;
let prepDone = false;

//button textures
let buttonTexture = [PIXI.Texture.fromImage('buttons/fire.png'),
                    PIXI.Texture.fromImage('buttons/water.png'),
                    PIXI.Texture.fromImage('buttons/electricity.png'),
                    PIXI.Texture.fromImage('buttons/ground.png'),
                    PIXI.Texture.fromImage('buttons/wind.png'),
                    PIXI.Texture.fromImage('buttons/arcane.png')];

let hoverTexture = [PIXI.Texture.fromImage('buttons/fire2.png'),
                    PIXI.Texture.fromImage('buttons/water2.png'),
                    PIXI.Texture.fromImage('buttons/electricity2.png'),
                    PIXI.Texture.fromImage('buttons/ground2.png'),
                    PIXI.Texture.fromImage('buttons/wind2.png'),
                    PIXI.Texture.fromImage('buttons/arcane2.png')];

let readyTexture1 = PIXI.Texture.fromImage('buttons/ready.png');
let readyTexture2 = PIXI.Texture.fromImage('buttons/ready2.png');

//button images given in for loop

var buttonImages = [];
for (i = 0; i < 6; i++) {
    buttonImages[i] = [buttonTexture[i], hoverTexture[i], buttonTexture[i]];
}

let readyImages = [readyTexture1, readyTexture2, readyTexture1];

var buttons = [tink.button(buttonImages[0], 25, 520),
              tink.button(buttonImages[1], 203, 520),
              tink.button(buttonImages[2], 381, 520),
              tink.button(buttonImages[3], 559, 520),
              tink.button(buttonImages[4], 737, 520),
              tink.button(buttonImages[5], 915, 520),
              tink.button(readyImages, 1093, 520)];

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
buttons[2].press = () => element = 2; //electricity
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
    charm.breathe(buttons[5],3,1.2,20,true, 1);
}
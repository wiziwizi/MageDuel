/*/////////////
// Defining  //
// Variables //
/////////////*/

//Scenes
let MainMenu = new PIXI.Container();
scene.addChild(MainMenu);

let TutScreen = new PIXI.Container();
scene.addChild(TutScreen);

var GameScene = new PIXI.Container();
scene.addChild(GameScene);

let GameOverScreen = new PIXI.Container();
scene.addChild(GameOverScreen);

MainMenu.visible = true;
MainMenu.interactive = true;
GameScene.visible = false;
GameScene.interactive = false;
GameOverScreen.visible = false;
GameOverScreen.interactive = false;
TutScreen.visible = false;
TutScreen.interactive = false;


//Buttons
let startButtonTexture = PIXI.Texture.fromImage('button1.png');
let startButtonTextureGlow = PIXI.Texture.fromImage('button2.png');
let startButtonImages = [startButtonTexture, startButtonTexture, startButtonTextureGlow];

let tutButtonTexture = PIXI.Texture.fromImage('button1.png');
let tutButtonTextureGlow = PIXI.Texture.fromImage('button2.png');
let tutButtonImages = [tutButtonTexture, tutButtonTexture, tutButtonTextureGlow];

let backButtonTexture = PIXI.Texture.fromImage('button1.png');
let backButtonTextureGlow = PIXI.Texture.fromImage('button2.png');
let backButtonImages = [backButtonTexture, backButtonTexture, backButtonTextureGlow];

/*////////////
//   Main   //
//   Menu   //
////////////*/

StartGame = tink.button(startButtonImages, 528, 150);
MainMenu.addChild(StartGame);

Explanation = tink.button(tutButtonImages, 528, 250);
MainMenu.addChild(Explanation);

/*////////////
//   Tut    //
//  Screen  //
////////////*/

BackToMain = tink.button(backButtonImages, 528, 50);
TutScreen.addChild(BackToMain);

/*/////////////
//  Update   //
// Visiblity //
/////////////*/

StartGame.press = () => {
    GameScene.visible = true;
    GameScene.interactive = true;
    MainMenu.visible = false;
    MainMenu.interactive = false;
    GameOverScreen.visible = false;
    GameOverScreen.interactive = false;
    TutScreen.visible = false;
    TutScreen.interactive = false;
}
Explanation.press = () => {
    TutScreen.visible = true;
    TutScreen.interactive = true;
    GameOverScreen.visible = false;
    GameOverScreen.interactive = false;
    MainMenu.visible = false;
    MainMenu.interactive = false;
    GameScene.visible = false;
    GameScene.interactive = false;
}
BackToMain.press = () => {
    MainMenu.visible = true;
    MainMenu.interactive = true;
    GameScene.visible = false;
    GameScene.interactive = false;
    GameOverScreen.visible = false;
    GameOverScreen.interactive = false;
    TutScreen.visible = false;
    TutScreen.interactive = false;
}

function GameOver() {
    GameOverScreen.visible = true;
    GameOverScreen.interactive = true;
    GameScene.visible = false;
    GameScene.interactive = false;
    MainMenu.visible = false;
    MainMenu.interactive = false;
    TutScreen.visible = false;
    TutScreen.interactive = false;
}
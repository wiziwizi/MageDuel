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

//Images
let backgroundTexture = PIXI.Texture.fromImage('background.png');
let backgroundSprite = new PIXI.Sprite(backgroundTexture);
let tutBackgroundSprite = new PIXI.Sprite(backgroundTexture);

let menuBackgroundTexture = PIXI.Texture.fromImage('menubg.png');
let menuBackgroundSprite = new PIXI.Sprite(menuBackgroundTexture);


/*////////////
// Standard //
//   Scene  //
// Settings //
////////////*/

MainMenu.visible = true;
MainMenu.interactive = true;
GameScene.visible = false;
GameScene.interactive = false;
GameOverScreen.visible = false;
GameOverScreen.interactive = false;
TutScreen.visible = false;
TutScreen.interactive = false;

/*////////////
//   Main   //
//   Menu   //
////////////*/

MainMenu.addChild(menuBackgroundSprite);

StartGame = tink.button(startButtonImages, 528, 250);
MainMenu.addChild(StartGame);

Explanation = tink.button(tutButtonImages, 528, 350);
MainMenu.addChild(Explanation);

/*////////////
//   Tut    //
//  Screen  //
////////////*/

TutScreen.addChild(tutBackgroundSprite);
BackToMain = tink.button(backButtonImages, 528, 50);
TutScreen.addChild(BackToMain);


/*/////////////
// GameScene //
//  Screen   //
/////////////*/

GameScene.addChild(backgroundSprite);

/*/////////////
//  Update   //
// Visiblity //
/////////////*/

StartGame.press = () => {
    GameScene.visible = true;
    MainMenu.visible = false;
    GameOverScreen.visible = false;
    TutScreen.visible = false;
}
Explanation.press = () => {
    TutScreen.visible = true;
    GameOverScreen.visible = false;
    MainMenu.visible = false;
    GameScene.visible = false;
}
BackToMain.press = () => {
    MainMenu.visible = true;
    GameScene.visible = false;
    GameOverScreen.visible = false;
    TutScreen.visible = false;
}

function GameOver() {
    GameOverScreen.visible = true;
    GameScene.visible = false;
    MainMenu.visible = false;
    TutScreen.visible = false;
}
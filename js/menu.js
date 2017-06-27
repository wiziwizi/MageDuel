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

//Booleans
let checkSceneMenu = true;
let checkSceneGame = false;
let checkSceneGameOver = false;
let checkTutScreen = false;


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

/*////////////
//  Update  //
//   Bool   //
////////////*/

StartGame.press = () =>{
    checkSceneMenu = false;
    checkSceneGame = true;
    checkSceneGameOver = false;
    checkTutScreen = false;
}
Explanation.press = () =>{    
    checkSceneMenu = false;
    checkSceneGame = false;
    checkSceneGameOver = false;
    checkTutScreen = true;
}
BackToMain.press = () =>{ 
    checkSceneMenu = true;
    checkSceneGame = false;
    checkSceneGameOver = false;
    checkTutScreen = false;
}

/*/////////////
//   Update  //
//   Scene   //
/////////////*/

setInterval(loop, 100);

function loop() {
    
    if(checkSceneGame == true)
        {
            GameScene.visible = true;
            MainMenu.visible = false;
            GameOverScreen.visible = false;
            TutScreen.visible = false;
        }
    else if(checkSceneMenu == true)
        {
            MainMenu.visible = true;
            GameScene.visible = false;
            GameOverScreen.visible = false;
            TutScreen.visible = false;
        }
    else if(checkSceneGameOver == true)
        {
            GameOverScreen.visible = true;
            MainMenu.visible = false;
            GameScene.visible = false;
            TutScreen.visible = false;
        }
    else if(checkTutScreen == true)
        {
            TutScreen.visible = true;
            GameOverScreen.visible = false;
            MainMenu.visible = false;
            GameScene.visible = false;
        }
}
let pickElementTitle = new PIXI.Text('Picking your element!');
pickElementTitle.scale.set(1.3,1.3);
pickElementTitle.x = 200;
pickElementTitle.y = 130;


let pickElementText = new PIXI.Text('Select the element you want as strength! The element to the right of it will be their weakness.');
pickElementText.x = 100;
pickElementText.y = 180;
pickElementText.style = {wordWrap: true, wordWrapWidth: 600};

let fireTexture = PIXI.Texture.fromImage('images/buttons/fire.png'),    waterTexture = PIXI.Texture.fromImage('images/buttons/water.png'),
    fireElement = new PIXI.Sprite(fireTexture),
    waterElement = new PIXI.Sprite(waterTexture),
    beatsText = new PIXI.Text('beats');

fireElement.x = 1000;
fireElement.y = 180;
waterElement.x = 800;
waterElement.y = 180;
beatsText.x = 927;
beatsText.y = 190;

let howToWinTitle = new PIXI.Text('How to win?');
howToWinTitle.scale.set(1.3,1.3);
howToWinTitle.x = 280;
howToWinTitle.y = 330;

let howToWinText = new PIXI.Text('Find your opponent their weakness to defeat them. The first player to get their opponents HP down to 0 wins!');
howToWinText.x = 100;
howToWinText.y = 380;
howToWinText.style = {wordWrap: true, wordWrapWidth: 600};
 


TutScreen.addChild(pickElementTitle)
TutScreen.addChild(pickElementText);
TutScreen.addChild(fireElement);
TutScreen.addChild(waterElement);
TutScreen.addChild(beatsText);
TutScreen.addChild(howToWinTitle);
TutScreen.addChild(howToWinText);
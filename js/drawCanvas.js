let stage       = new PIXI.Container();
let renderer    = PIXI.autoDetectRenderer(
    1080,600,
    {antialias: true, transparent: false, resolution: 1});
let tink        = new Tink(PIXI, renderer.view);


let buttonImage = new PIXI.Graphics();
buttonImage.beginFill(0x66CCFF);
buttonImage.lineStyle(4, 0xFF3300, 1);
buttonImage.drawRect(170, 170, 100, 50);
buttonImage.endFill();
tink.makeInteractive(buttonImage);
buttonImage.press = () => 
{
    console.log("Test");
}

stage.addChild(buttonImage);

document.body.appendChild(renderer.view);

renderer.view.style.border = "2px inset black";
renderer.backgroundColor = 0xffffff;

setInterval(loop, 10);

function loop()
{
    tink.update();
    renderer.render(stage);
}
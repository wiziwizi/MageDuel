let stage = new PIXI.Container(),
    renderer = PIXI.autoDetectRenderer(
        1080, 600, {
            antialias: true,
            transparent: false,
            resolution: 1
        }),
    tink = new Tink(PIXI, renderer.view),
    buttonTexture;

buttonTexture = PIXI.Texture.fromImage('button1.png');

let buttonImages = [buttonTexture, buttonTexture, buttonTexture];

let playButton = tink.button(buttonImages, 32, 96);
playButton.press() =>

    stage.addChild(playButton);

document.body.appendChild(renderer.view);

renderer.view.style.border = "2px inset black";
renderer.backgroundColor = 0xffffff;

setInterval(loop, 10);

function loop() {
    tink.update();
    renderer.render(stage);
}
var scene = new PIXI.Container(),
    renderer = PIXI.autoDetectRenderer(
        1256, 600, {
            antialias: true,
            transparent: false,
            resolution: 1
        }),     
    tink = new Tink(PIXI, renderer.view);

let buttonTexture1 = PIXI.Texture.fromImage('button1.png');
let buttonTexture2 = PIXI.Texture.fromImage('button2.png');

let buttonImages = [buttonTexture1, buttonTexture2, buttonTexture1];

var buttons = [tink.button(buttonImages, 10, 520),
              tink.button(buttonImages, 188, 520),
              tink.button(buttonImages, 366, 520),
              tink.button(buttonImages, 544, 520),
              tink.button(buttonImages, 722, 520),
              tink.button(buttonImages, 900, 520),
              tink.button(buttonImages, 1078, 520)];

for (i = 0; i < 7; i++)
    scene.addChild(buttons[i]);

document.body.appendChild(renderer.view);

renderer.view.style.border = "2px inset black";
renderer.backgroundColor = 0xffffff;

setInterval(loop, 10);

function loop() {
    tink.update();
    renderer.render(scene);
}
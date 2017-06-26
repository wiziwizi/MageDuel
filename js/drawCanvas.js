let stage = new PIXI.Container(),
    renderer = PIXI.autoDetectRenderer(
        1080, 600, {
            antialias: true,
            transparent: false,
            resolution: 1
        }),
    tink = new Tink(PIXI, renderer.view),
    buttonsprite;

PIXI.loader
    .add("button1.png")
    .load(setup);

function setup() {
    buttonsprite = new PIXI.Sprite(
        PIXI.loader.resources["button1.png"].texture
    );
}

tink.makeInteractive(buttonsprite);
//buttonsprite.press = () => console.log("Test");

stage.addChild(buttonsprite);

document.body.appendChild(renderer.view);

renderer.view.style.border = "2px inset black";
renderer.backgroundColor = 0xffffff;

setInterval(loop, 10);

function loop() {
    tink.update();
    renderer.render(stage);
}
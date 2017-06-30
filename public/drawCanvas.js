var scene = new PIXI.Container(),
    renderer = PIXI.autoDetectRenderer(
        1256, 600, {
            antialias: true,
            transparent: false,
            resolution: 1
        }),
    tink = new Tink(PIXI, renderer.view);

document.body.appendChild(renderer.view);

renderer.view.style.border = "2px inset black";
renderer.backgroundColor = 0xffffff;

setInterval(loop, 10);

function loop() {
    tink.update();
    renderer.render(scene);
}

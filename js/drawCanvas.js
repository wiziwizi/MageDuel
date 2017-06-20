let stage       = new PIXI.Container();
let renderer    = PIXI.autoDetectRenderer(
    1080,600,
    {antialias: true, transparent: false, resolution: 1});

document.body.appendChild(renderer.view);

renderer.view.style.border = "2px inset black";
renderer.backgroundColor = 0xffffff;

renderer.render(stage);
//renderer.view.style
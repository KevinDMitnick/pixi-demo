import * as PIXI from 'pixi.js';

const imageUrl = require('./imgs/background.jpg');

let pixi = new PIXI.Application({
    height: window.innerHeight,
    width: window.innerWidth
});
document.getElementById('pixi_container').appendChild(pixi.view);

let bgSprite = new PIXI.Sprite(PIXI.Texture.fromImage(imageUrl));
bgSprite.name = 'background';
pixi.stage.addChild(bgSprite);

function show


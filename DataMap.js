//Add object: Add(_x, _y, _w, _h, '_name', '_sprite', '_event', '_map')

Add(-4000, 600, 200, 300, 'sprite', 'teleport.png', 'map2.png', "map.png")
var spriteh = new Image()
spriteh.src = 'hand.png';

//UI elements and custom object.
function OnRender() {
    ctx.drawImage(sprite, 10, 10, w / 20, h / 20);
    ctx.drawImage(spriteh, 700, 700, 400, 400);
    square(1, h / 20, (-x / 20) + (500 / 20), 10, 'Red')
}
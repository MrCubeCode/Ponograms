var canvas = document.getElementById("canvasid")
var ctx = canvas.getContext("2d")


var imported = document.createElement('script');
imported.src = '/path/to/imported/script';
document.head.appendChild(imported);

var sprite = new Image()
sprite.src = 'map.png';
var x = 0;
var y = 0;
var speed = 10;
var w = 10000;
var h = 1000;
var map = 'map.png';
var active = false;
var ev = '';
var tmpac
setTimeout(Render, 1000);
var ScenObject = [];

function Add(_x, _y, _w, _h, _name, _sprite, _event, _map) {

    ScenObject[ScenObject.length] = {
        x: _x,
        w: _w,
        h: _h,
        y: _y,
        name: _name,
        spriteObj: new Image(),
        event: _event,
        map: _map
    };
    ScenObject[ScenObject.length - 1].spriteObj.src = _sprite;
}

function Render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(sprite, x, y, w, h);
    tmpac = false;
    for (let i = 1; i < 100; i++) {
        ctx.drawImage(sprite, x - w * i, y, w, h);
        ctx.drawImage(sprite, x + w * i, y, w, h);
        for (let j = 0; j < ScenObject.length; j++) {
            if (ScenObject[j].map == map) ctx.drawImage(ScenObject[j].spriteObj, (ScenObject[j].x + x) - w * i, ScenObject[j].y, ScenObject[j].w, ScenObject[j].h);
            if ((ScenObject[j].x + x) - w * i < 500 && ((ScenObject[j].x + x) - w * i) + ScenObject[j].w > 500) { ev = ScenObject[j].event; tmpac = true }
           
        }
        for (let u = 0; u < ScenObject.length; u++) {
            if (ScenObject[u].map == map) ctx.drawImage(ScenObject[u].spriteObj, (ScenObject[u].x + x) + w * i, ScenObject[u].y, ScenObject[u].w, ScenObject[u].h);
            if (((ScenObject[u].x + x) + w * i) <= 500 && ((ScenObject[u].x + x) + w * i) + ScenObject[u].w >= 500) { ev = ScenObject[u].event; tmpac = true }            
           
            console.log();
            //if (((ScenObject[u].x + x) + w * i) <= 500 && ((ScenObject[u].x + x) + w * i) + ScenObject[u].w >= 500) 
            //square(ScenObject[u].w, ScenObject[u].h, (ScenObject[u].x + x) + w * i, ScenObject[u].y, 'red')
        }
    }
    for (let i = 0; i < ScenObject.length; i++) {
        if (ScenObject[i].map == map) ctx.drawImage(ScenObject[i].spriteObj, ScenObject[i].x + x, ScenObject[i].y, ScenObject[i].w, ScenObject[i].h);
        if (ScenObject[i].x + x < 500 && ScenObject[i].x + x + ScenObject[i].w > 500) { ev = ScenObject[i].event; tmpac = true }
        else {
            if (tmpac != true) {
                tmpac = false
            }

        }
        if (tmpac == true) {
            active = true;
        }
        else {
            active = false;
        }
        
    }
    OnRender()
    requestAnimationFrame(Render);
}
document.addEventListener('keypress', (event) => {
    const keyName = event.key;
    if (keyName == 'a') {
        x += speed;
    }
    if (keyName == 'd') {
        x -= speed;
    }

    if (keyName == 'e' && active == true) {
        Tp(ev)
    }
    if (keyName == 'o') {
        x += speed;
        if (active == true) {
            alert("active");
        }
    }
    if (keyName == 'p') {
        x -= speed;
        if (active == true) {
            alert("active");
        }
      
    }
});

function Tp(tp) {
    console.warn(tp);
    sprite.src = '' + tp;
    map = tp;
}

function square(side1, side2, x, y, color) {
      ctx.fillStyle = color
       ctx.strokeStyle = color;
       ctx.strokeRect(x, y, side1, side2);
     ctx.fill();
      ctx.stroke();
}

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

let x = 200;
let speed = 5;
let width = 50;
let color = 'black';

function draw() {
    console.log('redrawing the screen')
    // frameRate(1);
    clear();

    if(x >= 500 - width/2) {
       // width += 4;
        speed *= -1;
    }

    if(x <= 150 + width/2) {
       // width += 4;
        speed *= -1;
    }

    // draw walls:
    fill('red');
    rect(100, 0, 50, canvasHeight);
    rect(500, 0, 50, canvasHeight);

    // draw circle:
    fill(color);
    circle(x, canvasHeight/2, width);
    x += speed;
    console.log("x position is:", x);

    drawGrid(canvasWidth, canvasHeight);
}

const changeBallColor = ev => {
    console.log(ev.code);
   if (ev.code == 'KeyR') {
        console.log('Change Ball to Red!');
        color = 'blue';
    }
    if (ev.code == 'KeyE') {
        console.log('Change Ball to Red!');
        color = 'black';
    }
    if (ev.code == 'KeyT') {
        console.log('Change Ball to Red!');
        color = 'purple';
    }
    else if (ev.code == 'Space') {
        x += 100;
    }
}

document.addEventListener('keydown', changeBallColor);
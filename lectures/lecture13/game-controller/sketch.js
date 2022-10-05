let x = 100;
let y = 200;
let width = 50;
let fillColor = 'white';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

const moveController = ev => {
    console.log(ev.code);
    if (ev.code == 'KeyW') {
        console.log('Go Up!')
        y = y-3;
    }
    else if (ev.code == 'KeyS') {
        console.log('Go Down!')
        y = y+3;
    }
    else if (ev.code == 'KeyA') {
        console.log('Go Left!')
        x = x-3;
    }
    else if (ev.code == 'KeyD') {
        console.log('Go Right!')
        x = x+3;
    }
    else if (ev.code == 'Space') {
        console.log('Get Bigger!')
        width += 30;
    }
    // a arrow moves circle left
    // d arrow moves circle right
    // w arrow moves circle up
    // s arrow moves circle down

    // redraw circle:
    clear();
    noFill();
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);

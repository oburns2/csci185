const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

const data = {
    x: canvasWidth/2,
    y: canvasHeight/2,
    d: 75
}


function setup() {
    createCanvas(canvasWidth, canvasHeight);  
    drawGrid(canvasWidth, canvasHeight);
}

// define your drawCreature function here:

function moveController(ev) {
    console.log(ev.code);
    if (ev.code == 'ArrowUp') {
        console.log('up arrow!');
        data.y -= 2;
    } else if (ev.code == 'ArrowDown') {
        console.log('down arrow!');
        data.y += 2;
    } else if (ev.code == 'ArrowLeft') {
        console.log('left arrow!');
        data.x -= 2;
    } else if (ev.code == 'ArrowRight') {
        console.log('right arrow!');
        data.x += 2;
    } 
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    drawGrid(canvasWidth, canvasHeight);
}


// replace this function with YOUR creature!
function draw(){
    clear();
    let sf = data.d/6.5;
  fill('#71382C');
    ellipse(data.x-sf*3, data.y, sf * 3, sf * 6);
    
    fill('#71382C');
    ellipse(data.x+sf*3, data.y, sf * 3, sf * 6);
    
    fill('#9A675C')
    circle(data.x, data.y, data.d);

    fill('black')
    circle(data.x-sf, data.y-sf, sf);

    fill('black');
    circle(data.x+sf, data.y-sf, sf);

    fill('black');
    circle(data.x, data.y+5, sf*1.5);
    
    noFill()
    strokeWeight(sf/6)
    curve(
        data.x-sf*2, data.y-data.d,
        data.x-sf*2, data.y+sf,
        data.x+sf*2, data.y+sf,
        data.x+sf*2, data.y-data.d,
    )
    strokeWeight(1);

    
    noFill()
    strokeWeight(sf/6)
    line(
        data.x, data.y,
        data.x, data.y+sf*1.8,
    )
    strokeWeight(1); 
   
}

document.addEventListener('keydown', moveController);

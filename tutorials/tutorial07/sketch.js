function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Exercise 1:
    drawCircle(100, 100, 80, 'hotpink');
    drawCircle(200, 100, 40, 'navy');
    drawCircle(300, 100, 80, 'teal');
    drawCircle(400, 100, 40, 'hotpink');

    // Exercise 2: 
    drawOval(100, 200, 100, 60, 'teal');
    drawOval(200, 200, 60, 100, 'hotpink');
    drawOval(300, 200, 100, 60, 'navy');
    drawOval(400, 200, 60, 100, 'teal');

    // Exercise 3:
    drawBullseye(100, 300, 100); 
    drawBullseye(200, 300, 50); 
    drawBullseye(300, 300, 100); 
    drawBullseye(400, 300, 50); 

    // Exercise 4:
    drawFace(100, 400, 50);
    drawFace(200, 400, 100);
    drawFace(300, 400, 50);
    drawFace(400, 400, 100);
    

    drawGrid(canvasWidth, canvasHeight);
}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor


// drawCircle(300, 400, 40, 'yellow');
function drawCircle(centerX, centerY, size, fillColor) {
    fill(fillColor);
    circle(centerX, centerY, size);
}

// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, sizeX, sizeY, and fillColor
function drawOval(centerX, centerY, sizeX, sizeY, fillColor) {
    fill(fillColor);
    ellipse(centerX, centerY, sizeX, sizeY);
}


// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawBullseye(centerX, centerY, size) {
    fill('teal');
    circle(centerX, centerY, size);
    fill('navy');
    circle(centerX, centerY, size * .75);
    fill('teal');
    circle(centerX, centerY, size * .50);
    fill('navy');
    circle(centerX, centerY, size * .25);
}

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace(centerX, centerY, size, red="orange", fillColor='black') {
    fill(red);
    circle(centerX, centerY, size);
    fill(fillColor);
    let sf = size/6.5;
    circle(centerX-sf, centerY-sf, sf);
    circle(centerX+sf, centerY-sf, sf);

    noFill()
    strokeWeight(sf/5)
    curve(
        centerX-sf*2, centerY-size,
        centerX-sf*2, centerY+sf,
        centerX+sf*2, centerY+sf,
        centerX+sf*2, centerY-size,
    )
    strokeWeight(1)
}



    //fill('white');
    //circle(100, 400, 50);
    //fill('black');
    //circle(92, 392, 8);
    //circle(108, 392, 8);
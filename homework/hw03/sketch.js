function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
    drawCreature(700, 300, 400, '#9A675C', '#71382C');
    drawCreature(487, 110, 101,'#bfdc65', '#abb880');
    drawCreature(454, 423, 141, '#aebb83', '#227876');
    drawCreature(333, 227, 99, '#94ba77', '#3f5364');
    drawCreature(117, 314, 91, '#648d8e', '#afc272');
    
    drawGrid(canvasWidth, canvasHeight);
}

// define your drawCreature function here:

function drawCreature(centerX, centerY, size, primaryColor, secondaryColor, fillColor='black'){
    let sf = size/6.5;
  fill(secondaryColor);
    ellipse(centerX-sf*3, centerY, sf * 3, sf * 6);
    
    fill(secondaryColor);
    ellipse(centerX+sf*3, centerY, sf * 3, sf * 6);
    
    fill(primaryColor)
    circle(centerX, centerY, size);

    fill(fillColor)
    circle(centerX-sf, centerY-sf, sf);

    fill(fillColor);
    circle(centerX+sf, centerY-sf, sf);

    fill(fillColor);
    circle(centerX, centerY+10, sf*1.5);
    
    noFill()
    strokeWeight(sf/6)
    curve(
        centerX-sf*2, centerY-size,
        centerX-sf*2, centerY+sf,
        centerX+sf*2, centerY+sf,
        centerX+sf*2, centerY-size,
    )
    strokeWeight(1);

    
    noFill()
    strokeWeight(sf/6)
    line(
        centerX, centerY,
        centerX, centerY+sf*1.8,
    )
    strokeWeight(1); 
}
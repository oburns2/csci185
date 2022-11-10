const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // function invocations goes here:
    drawElmo(100, 100, 150, '#0bc9cd', true);  
    drawElmo(300, 200, 75, '#0bc9cd', false);   
    drawElmo(100, 325, 100, '#8093f1', false);  
    drawElmo(250, 375, 125, '#7fb285', true);  
    drawElmo(550, 200, 250, '#102e4a', true);  


    drawGrid(canvasWidth, canvasHeight);
}


// function definition goes here:

function drawElmo(x, y, size, color, hasNose){
    let sf = size/6.5;

    fill(color)
    circle(x, y, size, color);

    fill('white')
    circle(x + sf, y + sf/-1, size/3.5)
    fill('white')
    circle(x - sf, y + sf/-1, size/3.5)

    fill('black')
    circle(x + sf, y + sf/-1, size/12)
    fill('black')
    circle(x - sf, y + sf/-1, size/12)

    if(hasNose == true){
        fill('#db5461');
        ellipse(x, y, size*.2, size*.3);
    }
}
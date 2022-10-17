const circleData = [
    {x: 500, y: 50, d: 100, speedX: 3, speedY: 3, color: 'red'},
    {x: 300, y: 150, d: 50, speedX: 2, speedY: 0, color: 'orange'},
    {x: 400, y: 400, d: 25, speedX: 0, speedY: 1, color: 'yellow'},
    {x: 40, y: 520, d: 80, speedX: 2, speedY: 0, color: 'green'},
    {x: 140, y: 120, d: 150, speedX: 0, speedY: -0.5, color: 'blue'},
    {x: 350, y: 350, d: 70, speedX: 1, speedY: 1, color: 'purple'}
];

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animate the circle by changing the x and y position
// every time the animation loop invokes the draw() function:
function draw() {
    clear();

    let i = 0;
    while(i < circleData.length){
    const ball = circleData[i];

    //circle code
    fill(ball.color);
    circle(ball.x, ball.y, ball.d);
    ball.x += ball.speedX;
    ball.y += ball.speedY;
    //
    
    
    i++;
    }

    drawGrid(canvasWidth, canvasHeight);
}


// HW4 NOTES
// FUNCTION CALLED MATH.RANDOM
// multiply math.random by a number to set bounds (ex. * 100 is a random number from 1-100)
// circle(Math.random()*200, Math.random()*canvasHeight, Math.random*100)
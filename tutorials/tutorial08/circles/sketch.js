function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    // 1. what do we want to repeat? = draw a circle
    // 2. how long do we want to repeat it? = 5 times
    // 3. what will change each time? = y position by 50

    let x = canvasWidth/2;
    let y = canvasHeight/2;
    let size = canvasWidth;
    let fillColor = 'black';
    while(size >= 0) {
        if (fillColor == 'black'){
            fillColor = 'white';
        } else {
            fillColor = 'black';
        }
        fill(fillColor);
        circle(x, y, size);
        size -= 25;
    }

    drawGrid(canvasWidth, canvasHeight);
}

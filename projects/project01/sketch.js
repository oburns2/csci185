const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

let color = 'purple';
const bubbles = [];

const player = {x: canvasWidth / 2, y: 700, d: 50};


let creatures = [
    {x:300, y:150, size:75, species: 'dog', alive: true},
    {x: 500, y: 150, size: 75, species: 'frog', alive: true},
    {x: 700, y: 150, size: 75, species: 'dog', alive: true},
    {x: 900, y: 150, size: 75, species: 'frog', alive: true},
    {x: 1100, y: 150, size: 75, species: 'dog', alive: true}
]

//asteroids
const a1 ={
    x: -100,
    y: 500,
    width: 200,
    speed: 10
};
const a2 ={
    x: -150,
    y: 500,
    width: 100,
    speed: 9
};
const a3 ={
    x: -200,
    y: 500,
    width: 70,
    speed: 8
};

//stars
const stars = [];


function setup() {
    createCanvas(canvasWidth, canvasHeight);
    circle(player.x, player.y, player.d);

    for (let i = 0; i < 400; i++) {
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const width = Math.random() * 2 + 2;
        stars.push({x: x, y: y, width: width})
    }

}

//intersection
// function checkIntersection(bubbles, ?????) {
//     const distance = dist(bubbles.x, bubbles.y, ????.x, ????.y);
//     if (distance <= (bubbles.d/2 + ????.d/2)) {
//         return true;
//     } else {
//         return false;
//     }
// }





function shoot() {
    // 1. When you drag your mouse, create a bubble 
    //    object and add it to the "bubbles" list.
    const bubble = {
        x: player.x,
        y: player.y - 25,
        d: 10,
        speed: 10
    }
    bubbles.push(bubble)
}


function draw() {
    clear();

    // stars
    fill('white');
    for (let i = 0; i < stars.length; i++) {
        circle(stars[i].x, stars[i].y, stars[i].width);
    }

    //asteoids
    a1.x += a1.speed;
    if (a1.x == 1600){
        a1.x = -100;
    }
    drawAsteroid(a1.x, a1.y, a1.width);
    a2.x += a2.speed;
    if (a2.x == 1600){
        a2.x = -100;
    }
    drawAsteroid(a3.x, a3.y, a3.width);
    a3.x += a3.speed;
    if (a3.x == 1600){
        a3.x = -100;
    }
    drawAsteroid(a2.x, a2.y, a2.width);

    //bubbles
    fill('#AC94F4')
    for (const bubble of bubbles) {
        circle(bubble.x, bubble.y, bubble.d);
        bubble.y -= bubble.speed;
    }


    //player
    circle(player.x, player.y, player.d);
    if (player.x > canvasWidth){
        player.x = 0;
    }else if (player.x < 0){
        player.x = canvasWidth;
    }
    if (player.y > canvasHeight){
        player.y = 0;
    }else if (player.y< 0){
        player.y = canvasHeight;
    }


    //aliens
    for(let i= 0; i < creatures.length; i++) {
        let p = creatures[i];
        if(isIntersection(p)) {
            p.alive = false;
        }
        if(p.alive){
        if (p.species == 'frog') {
            drawFrog(p.x, p.y, p.size);
        } else {
            drawDog(p.x, p.y, p.size);
        }
    }
    } 
      
}

function isIntersection(creature){
    for(let i = 0; i < bubbles.length; i++){
        const distance = dist(creature.x, creature.y, bubbles[i].x, bubbles[i].y);
        if(distance <= creature.size/2 + 5){
            return true;
        }
    } 
    return false;
}


function moveController(ev) {
    console.log(ev.code);
    if (ev.code == 'ArrowLeft') {
        console.log('left arrow!');
        player.x -= 10;
    } else if (ev.code == 'ArrowRight') {
        console.log('right arrow!');
        player.x += 10;
    } else if (ev.code == 'ArrowUp') {
        console.log('up arrow!');
        player.y -= 10;
    } else if (ev.code == 'ArrowDown') {
        console.log('down arrow!');
        player.y += 10;
    } else if (ev.code == 'Space') {
        shoot();
    }
}
// Event listener
document.addEventListener('keydown', moveController);


function drawDog(centerX, centerY, size){
    let sf = size/6.5;
  fill('#71382C');
    ellipse(centerX-sf*3, centerY, sf * 3, sf * 6);
    fill('#71382C');
    ellipse(centerX+sf*3, centerY, sf * 3, sf * 6);
    fill('#9A675C')
    circle(centerX, centerY, size);
    fill('black')
    circle(centerX-sf, centerY-sf, sf);
    fill('black');
    circle(centerX+sf, centerY-sf, sf);
    fill('black');
    circle(centerX, centerY+5, sf*1.5);
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

function drawFrog(centerX, centerY, size){
    fill('green');
    circle(centerX, centerY, size);
    fill('black')
    let sf = size/2.5;
    circle(centerX-sf,centerY-sf,sf);
    circle(centerX+sf,centerY-sf,sf);
    fill('white')
    sf = size/2.5
    circle(centerX-sf,centerY-sf,sf*.7);
    circle(centerX+sf,centerY-sf,sf*.7);
    noFill()
    strokeWeight(sf/5)
    curve(
        centerX-sf/ 2, centerY-size,
        centerX-sf/2,  centerY+sf/2.5, 
        centerX+sf/2, centerY+sf/2.5, 
        centerX+sf/2, centerY-size,
    )
    strokeWeight(1)
}


//stars
function drawStars() {
    strokeWeight(0);
    fill('white');
   
}


function drawAsteroid(x, y, width){
    fill('gray');
    circle(x, y, width);
}
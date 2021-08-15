var ball;
var ball2;
var database;
var ballCam1;
var value1, value2;
var timer;
var counter = 0;
var interval;
var timer = null;
var redPoints = 0;
var greenPoints = 0;
var rounds = 1;

function setup(){
    createCanvas(1200, 700);

    ball = createSprite(585,450,25, 25);
    ball.shapeColor = "red";

    ball2 = createSprite(615,450,25,25);
    ball2.shapeColor = "green"; 

  button = createButton('Begin Challenge');
  button.position(120, 650);
  button.size(200, 30);
  button.style('font-size', '20px');
  button.style('color', 'blue');
  button.mousePressed(genValues);


}

function genValues() {
   value1 = round(random(1, 1000), 0);
   value2 = round(random(1, 700), 0);

   if(value1%3 === 1) {
       value1 += 2
   } else if (value1%3 === 2) {
       value1 += 1
   }

   if(value2%3 === 1) {
    value2 += 2
} else if (value2%3 === 2) {
    value2 += 1
}
    timer = 25 - (redPoints + greenPoints/2);
}


function draw(){
    background(250);
   
    if(button.mousePressed(genValues)) {
        if (frameCount % 30 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        timer --; 
       }
    }
       if(timer >= 0 && ball.x === value1 && ball.y === value2) {
           
        if(ball.x === value1 && ball.y === value2) {
        if(ball2.x != value1 && ball2.y != value2) {

            timer = null;
            genValues();
            redPoints++;

            rounds++;
        }   
    }

    if(timer >= 0 && ball2.x === value1 && ball2.y === value2) {
           
        if(ball2.x === value1 && ball2.y === value2) {
        if(ball.x != value1 && ball.y != value2) {

            timer = null;
            genValues();
            greenPoints++;

            rounds++;
        }   
    }
}

if (timer === 0 && ball.x != value1 && ball.y != value2) {
    if(ball.x != value1 && ball.y != value2) {
        genValues();
    timer = 25;
    }
    
}
           
           
       }
     

    stroke(12);
    textSize(30);
    fill('red');
    text("x: " + ball.x + " y: " + ball.y, 20,  50);

    fill('green');
    text("x: " + ball2.x + " y: " + ball2.y, 20, 90);

    fill('blue');
    text("x: ", 1020, 50);
    
    fill('blue');
    text("y: ", 1020, 90);

    fill('blue');
    text(value1, 1050, 50);
    
    fill('blue');
    text(value2, 1050, 90);

    fill('grey');
    text(timer + " seconds left", 990, 150);

    fill('red');
    text(redPoints + " points", 220, 50);

    fill('green');
    text(greenPoints + " points", 220, 90);

    fill('gold');
    text("Round " + rounds , 550, 50);
    
    if(keyDown(LEFT_ARROW)){
        ball.x += -3;
    }
    else if(keyDown(RIGHT_ARROW)){
        ball.x += 3;
    }
    else if(keyDown(UP_ARROW)){
        ball.y += -3;
    }
    else if(keyDown(DOWN_ARROW)){
        ball.y += 3;
    }

    if(keyDown(65)){
      ball2.x += -3;
    }
    else if(keyDown(83)){
        ball2.x += 3;
    }
    else if(keyDown(87)){
        ball2.y += -3;
    }
    else if(keyDown(90)){
        ball2.y += 3;
    }

    if(redPoints === 5) {
        fill('orange');
        textSize(30);
        text("Congratulations you have won the game 🥳😃", 300, 50);

        rounds = null;
        timer = null;
        ball.x = null;
        ball.y = null;
        ball2.x = null;
        ball2.y = null;
        value1 = null;
        value2 = null;
    } else if (greenPoints === 5) {
        fill('green');
        textSize(30);
        text("Congratulations you have won the game 🥳😃", 300, 50);

            rounds.hide();
        text("Made by Umar Bashir, Age 13", 300, 400);
    }

  //  ball2.x = mouseX;
  //  ball2.y = mouseY;
    
    
    drawSprites();
}

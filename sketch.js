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

var Up1, Up2;
var Down1, Down2;
var Left1, Left2;
var Right1, Right2;

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

  Up1 = createButton('↑');
  Up1.position(1100, 650);
  Up1.size(40, 40);
  Up1.style('font-size', '30px');
  Up1.style('background-color', '#fa624b');
  Up1.mousePressed(up1);

  Down1 = createButton('↓');
  Down1.position(1100, 690);
  Down1.size(40, 40);
  Down1.style('font-size', '30px');
  Down1.style('background-color', '#fa624b');
  Down1.mousePressed(down1);

  Left1 = createButton('←');
  Left1.position(1060, 670);
  Left1.size(40, 40);
  Left1.style('font-size', '30px');
  Left1.style('background-color', '#fa624b');
  Left1.mousePressed(left1);

  Right1 = createButton('→');
  Right1.position(1140, 670);
  Right1.size(40, 40);
  Right1.style('font-size', '30px');
  Right1.style('background-color', '#fa624b');
  Right1.mousePressed(right1);

  Up2 = createButton('↑');
  Up2.position(900, 650);
  Up2.size(40, 40);
  Up2.style('font-size', '30px');
  Up2.style('background-color', 'green');
  Up2.mousePressed(up2);

  Down2 = createButton('↓');
  Down2.position(900, 690);
  Down2.size(40, 40);
  Down2.style('font-size', '30px');
  Down2.style('background-color', 'green');
  Down2.mousePressed(down2);

  Left2 = createButton('←');
  Left2.position(860, 670);
  Left2.size(40, 40);
  Left2.style('font-size', '30px');
  Left2.style('background-color', 'green');
  Left2.mousePressed(left2);

  Right2 = createButton('→');
  Right2.position(940, 670);
  Right2.size(40, 40);
  Right2.style('font-size', '30px');
  Right2.style('background-color', 'green');
  Right2.mousePressed(right2);


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

function up1() {
    ball.y += -9;
}

function down1() {
    ball.y += 9;
}

function left1() {
    ball.x += -9;
}

function right1() {
    ball.x += 9;
}

function up2() {
    ball2.y += -9;
}

function down2() {
    ball2.y += 3;
}

function left2() {
    ball2.x += -9;
}

function right2() {
    ball2.x += 9;
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
    timer = 18;
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

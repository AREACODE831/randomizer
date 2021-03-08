let st = 0;
let sz = 0;
let fmove = 0;
let cmove = 0;
let magic = 0;


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  frameRate(30);
  
}

function draw() {
  background( 154, 181, 217);
  
  
  keyTyped();
  vkeyTyped();

  if ((frameCount % 1 ) == 0) {
    fmove = fmove + magic;
  }
  if (fmove > 360){
    fmove = -100;
  }
  
  flower(width * .01, (height * .1)+fmove, 10, 1.5);
  flower(width * .04, (height * .6)+fmove, 30, .8);
  flower(width * .7, (height * .15)+fmove, 40, .4);
  flower(width * .3, (height * .000001)+fmove, 40, 1.2);
  flower(width * .9, (height * .000001)+fmove, 50, .9);
  flower(width * .5, (height * .8)+fmove, 50, 1.9);
  flower(width * .7, (height * .4)+fmove, 20, 2.0);
  flower(width * .6, (height * .5)+fmove, 80, 1.1);
  flower(width * .4, (height * .3)+fmove, 90, 1.7);
  
  ears();
  body();
  head();
  hat();
  magicstick();
  cheek();
  eyes();
  mouthteeth();
  //movement();
  sprinkles();
  
  
  
  //sprinkle color
  //fill(242, 214, 73);
  //noStroke();
  //sprinkle(width * .1, height * .2, 10);
  
  // fill(4, 138, 191);
  // sprinkle(width * .9, height * .1, -20);
  // fill(217, 72, 20);
  // sprinkle(width * .25, height * .3, 40);
  // fill(242, 214, 73);
  // sprinkle(width * .8, height * .6, 60);
  // fill(34, 139, 34);
  // sprinkle(width * .85, height * .4, -60);
  
  
}

function keyTyped(){
  if (key === 'x') {
    st = 0;
    sz = 0;
  } else if (key === 'm') {
    st = 3;
    sz = 10;
  }
}

function vkeyTyped(){
  if (key === 'x') {
    magic = 0;
  } else if (key === 'm') {
    magic = 9;
  }
  
}
function ears(){
  
  fill(108, 105, 191);
  stroke(10);
  strokeWeight(3);
  beginShape(TRIANGLES);
  vertex(width * .35, height * .39);
  vertex(width * .4, height * .26);
  vertex(width * .3, height * .25);
  
  vertex(width * .68, height * .39);
  vertex(width * .73, height * .25);
  vertex(width * .62, height * .26);

  endShape();
 
}

function body(){
  fill(108, 105, 191);
  stroke(10);
  strokeWeight(3);
  
  //body
  beginShape();
  //armpit
  curveVertex(width * .38, height * .64);
  
  curveVertex(width * .4, height * .9);
  curveVertex(width * .48, height * .9);
  curveVertex(width * .5, height * .8);
  curveVertex(width * .54, height * .8);
  
  //right leg
  curveVertex(width * .6, height * .9);
  curveVertex(width * .66, height * .88);
  curveVertex(width * .63, height * .8);
  curveVertex(width * .63, height * .67);
  curveVertex(width * .7, height * .73);
  curveVertex(width * .73, height * .68);
  curveVertex(width * .64, height * .58);
  curveVertex(width * .38, height * .55);
  
  curveVertex(width * .28, height * .48);
  curveVertex(width * .24, height * .52);

  endShape(CLOSE);
  
}

function head(){
  fill(108, 105, 191);
  stroke(10);
  strokeWeight(3);
  //head
  ellipse(206, 166, 170, 145);
}

function hat(){
  //hat
  push();
  stroke(0, 0, 0);
  fill(242, 80, 110); 
  beginShape(TRIANGLES);
  vertex(width * .43, height * .25);
  vertex(width * .60, height * .25);
  vertex(width * .515, height * .08);

  endShape();
  
  
  //hat acc
  circle(206, 30, 10);
  pop();
}

function magicstick(){
//magic stick
  push();
  stroke(242, 226, 5);
  strokeWeight(st);
  
  beginShape(LINES);
  vertex(width * .15, height * .3);
  vertex(width * .24, height * .48);
  endShape();
  pop();
}

function cheek(){
//cheek
  fill(242, 162, 162);
  noStroke();
  circle(150, 190, 40);
  circle(263, 190, 40);
}

function eyes(){
//eyes
  fill(255, 255, 255);
  stroke(10);
  strokeWeight(2);
  ellipse(width * .39, height * .42, 40, 18);
  ellipse(width * .63, height * .42, 40, 18);
    
//eye ball
  fill(0, 0, 0);
  circle(width * .39, height * .42, 17);
  circle(width * .63, height * .42, 17);
  
//white eye ball for sparkling effect
  fill(255, 255, 255);
  circle(width * .38, height * .41, 7);
  circle(width * .62, height * .41, 7);
  
}

function mouthteeth(){
    
//mouth
  fill(0, 0, 0);
  stroke(10);
  strokeWeight(3);
  
  beginShape(LINES);
  vertex(width * .46, height * .45);
  vertex(width * .56, height * .45);
  endShape();
  
  
//teeth
  fill(255, 255, 255);
  noStroke();
  beginShape(TRIANGLES);
  vertex(width * .47, height * .454);
  vertex(width * .475, height * .48);
  vertex(width * .48, height * .454);
  
  vertex(width * .54, height * .454);
  vertex(width * .545, height * .48);
  vertex(width * .55, height * .454);

  endShape();
}

function sprinkles(){
    
//sprinkles
  fill(141, 80, 233);
  strokeWeight(sz);
  square(20, 90, sz);  
  fill(34, 208, 232);
  square(38, 130, sz);
  fill(50, 100, 255);
  square(90, 136, sz);
  fill(255, 37, 231);
  square(80, 80, sz);
  fill(37, 255, 134);
  square(60, 100, sz);
  

}
  
function sprinkle(xPos, yPos, rotation){
  push();
  translate(xPos, yPos);
  rotate(rotation);
  rectMode(CENTER);
  rect(0, 0, width * .03, height * .03);
  pop();  
}
  
function flower(xPos, yPos, rotation, size){
  push();
  translate(xPos, yPos);
  rotate(rotation);
  scale(size);
  fill(242, 136, 185);
  ellipse(20, 30, 28, 15);
  ellipse(40, 30, 28, 15);
  ellipse(30, 30, 22, 40);
  fill(242, 202, 82);
  circle(30, 30, 15);
  pop();
}




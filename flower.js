class Flower {
  constructor(_xPos, _yPos, _rotation, _size){
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
    this.size = _size;
    
  }
  
  display() {
  
  push();
  translate(this.xPos, this.yPos);
  rotate(this.rotation);
  scale(this.size);
  fill(242, 136, 185);
  ellipse(20, 30, 28, 15);
  ellipse(40, 30, 28, 15);
  ellipse(30, 30, 22, 40);
  fill(242, 202, 82);
  circle(30, 30, 15);
  pop();
    
  }
  
  move(){
    //this.rotation++ is shorthand for this.rotation = this.rotation +1;
    
    this.rotation++;
    if(this.yPos <= height * .8){
      

    //shorthand is below is +=
    this.yPos += 5;
    } else {
      this.yPos = -height * .01;
    }
  }
}

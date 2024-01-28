function setup(){
  createCanvas(600, 400);
}

function draw(){
  background(200, 200, 244);
  // add your drawing code here ...
Fill(200)
  noStroke();
  triangle(width/2 - 45, height/2 - 55, width/2 - 25, height/2 - 40, width/2 - 45, height/2 - 20);
  triangle(width/2 + 45, height/2 - 55, width/2 + 25, height/2 - 40, width/2 + 45, height/2 - 20);
  ellipse(width/2, height/2, 100); //head
  fill("blue");
  ellipse(width/ - 20, height/2 - 10, 10);
  ellipse(width/ + 20, height/2 - 10, 10);
  fill("orange");
triangle(width/2 - 5, height/2, width/2 + 5, height/2, width/2, height/2 + 8);
stroke(255);
strokeweight(2);
line(width/2 - 10, height/2 + 5, width/2 - 30, height/2);
line(width/2 + 10, height/2 + 5, width/2 + 30, height/2);
line(width/2 - 10, height/2 + 5, width/2 - 35, height/2 + 5);
line(width/2 + 10, height/2 + 5, width/2 + 35, height/2 + 5);
line(width/2 - 10, height/2 + 5, width/2 - 30, height/2 + 10);
line(width/2 + 10, height/2 + 5, width/2 + 30, height/2 + 10);
nofill();
Arc(width/2 - 10, height/2 + 12, 20, 20, 0, PI);
Arc(width/2 + 10, height/2 + 12, 20, 20, 0, PI);
  
}

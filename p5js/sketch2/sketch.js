function setup() {
    createCanvas(1200, 800);
  }
  
  function draw() {
    background(250);
    fill(30,50,270,70)
    ellipse(132, 82, 200, 200); // Light gray circle 
    fill(230); // Medium gray 
    ellipse(228,-16,200,200); //Mediumgraycircle 
    fill(0,0,90,130); // Dark gray 
    ellipse(268,118,200,200); 
    //table
    fill(130,50,50,250)
    rect(0,500,1200,100)
    // Left creature
  fill(70,240,50)
  beginShape(); 
  vertex(50, 500);
  vertex(100, 470); 
  vertex(110, 440);
  vertex(190, 400);
  vertex(210, 440);  
  vertex(160, 460);
  vertex(200, 470); 
  vertex(140, 480); 
  vertex(130, 500);
  endShape();
  fill(0);
  ellipse(155, 440, 8, 8);
  // Right creature
  fill(60,250,40);
  beginShape();
  vertex(370, 500);
  vertex(360, 470);
  vertex(290, 460);
  vertex(340, 450);
  vertex(280, 430);
  vertex(420, 390);
  vertex(390, 390);
  vertex(410, 470);
  vertex(460, 500);
  endShape();
  fill(0);
  ellipse(345, 430, 10, 10);
    // Left creature
  fill(30,200,30)
  beginShape(); 
  vertex(500, 500);
  vertex(550, 470); 
  vertex(560, 440);
  vertex(530, 400);
  vertex(670, 440);  
  vertex(610, 460);
  vertex(650, 470); 
  vertex(590, 480); 
  vertex(580, 500);
  endShape();
  fill(0);
  ellipse(605, 440, 8, 8);
  // Right creature
  fill(55,230,60);
  beginShape();
  vertex(830, 500);
  vertex(810, 470);
  vertex(740, 460);
  vertex(790, 450);
  vertex(730, 430);
  vertex(970, 390);
  vertex(840, 430);
  vertex(860, 470);
  vertex(910, 500);
  endShape();
  fill(0);
  ellipse(795, 430, 10, 10);
  }
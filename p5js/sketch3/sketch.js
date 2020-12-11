function setup() { createCanvas(800, 800);
}



function draw() {
  let m = minute();
text('Current minute: \n' + m, 5, 50);
  let c = m 
  let s = second();
text('Current second: \n' + s, 5, 50);
  
  
if (mouseIsPressed) {
fill(c+75); } else {
fill(s+200); }
ellipse(mouseX, mouseY, 80, 80); }


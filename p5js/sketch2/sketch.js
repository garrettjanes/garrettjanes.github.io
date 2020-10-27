function setup() { createCanvas(1200, 600);
}
function draw() {
if (mouseIsPressed) {
fill(c = color('rgb(0,0,255)')); } else {
fill(255); }
ellipse(mouseX, mouseY, 80, 80); }
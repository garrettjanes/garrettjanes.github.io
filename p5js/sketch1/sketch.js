function setup() { createCanvas(500,500);
}
function draw() {
if (mouseIsPressed) {
let c = color(90,200, 500);
fill(c); } else {
fill(255); }

triangle(mouseX, mouseY, mouseX-5,mouseY-10,mouseX+5,mouseY-10); }
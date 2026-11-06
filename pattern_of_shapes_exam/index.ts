function setup() {
  createCanvas(600,400);
  background("white");
}

function mouseMoved() {
  fill("gold");
  background("white")
  const rectWidth: number = width *0.2;
  const rectHeight: number = height *0.2

  rect(width *0.1, height * 0.1, rectWidth, rectHeight); 
  rect(width * 0.7, height* 0.1, rectWidth, rectHeight);
  rect(width *0.1, height * 0.7, rectWidth , rectHeight);
  rect(width * 0.7, height *0.7, rectWidth, rectHeight);

  fill("steelblue");
  rect(width *0.3, height *0.3, width *0.4, height *0.4)

  const circleWhite: number = min(width, height) *0.4
  fill("white")
  circle(width *0.5, height *0.5, circleWhite)

  const circleDiameter: number = min(width, height) *0.2
  fill("tomato")
  circle (width * 0.2, height *0.5, circleDiameter)
  circle (width * 0.5, height *0.2, circleDiameter);
  circle (width *0.8, height *0.5, circleDiameter)
  circle (width *0.5, height *0.8, circleDiameter)
  
  fill("tomato")
  const mousecircle: number = min(width, height) *0.1
  circle (mouseX, mouseY, mousecircle)

  

  
}

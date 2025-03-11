let pupilahorizontal
let pupilavertical
let barba

function preload() {
  barba = loadImage("barba.png")
}

function setup() {
  createCanvas(1000, 800)
}

function draw() {
  background("blue")
  let centerX = width / 2
  let centerY = height / 1.5
  let eyeOffsetX = 40
  let eyeOffsetY = -30

  noStroke()
  fill(180, 110, 50)
  beginShape()
  vertex(centerX - 80, centerY + 50)
  bezierVertex(centerX - 100, centerY - 80, centerX + 100, centerY - 80, centerX + 80, centerY + 50)
  bezierVertex(centerX + 70, centerY + 100, centerX - 70, centerY + 100, centerX - 80, centerY + 50)
  endShape(CLOSE)
  
  image(barba, centerX - 90, centerY - 5, 180, 75)
  
  fill("white")
  arc(centerX, centerY - 50, 120, 100, PI, TWO_PI)
  fill("red")
  rect(centerX - 60, centerY - 50, 120, 20)

  stroke("black")
  strokeWeight(3)
  fill(255)
  ellipse(centerX - eyeOffsetX, centerY + eyeOffsetY, 40, 30)
  ellipse(centerX + eyeOffsetX, centerY + eyeOffsetY, 40, 30)

  pupilahorizontal = map(mouseX, 0, width, centerX - 50, centerX - 30)
  pupilavertical = map(mouseY, 0, height, centerY - 40, centerY - 20)

  fill("black")
  noStroke()
  circle(pupilahorizontal, pupilavertical, 10)
  circle(pupilahorizontal + 80, pupilavertical, 10)

  fill("green")
  ellipse(centerX, centerY - 60, 20, 20)

  fill("orange")
  ellipse(centerX + 80, centerY, 20, 20)
  
  noStroke()
  fill("rgb(0,0,0)")
  ellipse(centerX + 80, centerY + 20, 50, 50)
}

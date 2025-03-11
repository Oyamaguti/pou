let pupilahorizontal
let pupilavertical
let gorro

function preload() {
  gorro = loadImage("gorro.png")
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
  
  stroke("black")
  arc(centerX, centerY - 20, 20, 10, 0, PI, OPEN)
  
  image(gorro, centerX - 50, centerY - 80, 100, 50)
  
  noStroke()
  fill(255, 0, 0)
  beginShape()
  vertex(centerX - 83, centerY + 70)
  vertex(centerX - 83, centerY + 20)
  vertex(centerX - 65, centerY)
  vertex(centerX + 65, centerY)
  vertex(centerX + 83, centerY + 20)
  vertex(centerX + 83, centerY + 70)
  vertex(centerX + 60, centerY + 88)
  vertex(centerX - 60, centerY + 88)
  endShape(CLOSE)
  ellipse(centerX + 62, centerY + 15, 40, 30)
  ellipse(centerX - 62, centerY + 15, 40, 30)
  ellipse(centerX + 60, centerY + 72, 40, 30)
  ellipse(centerX - 60, centerY + 72, 40, 30)
  
  fill(0)
  rect(centerX - 84, centerY + 20, 167, 10)
  rect(centerX - 84, centerY + 40, 167, 10)
  rect(centerX - 84, centerY + 60, 167, 10)

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
  
  stroke("gold")
  fill("red")
  arc(centerX, centerY, 153, 20, 0, PI)
}

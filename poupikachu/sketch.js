let pupilahorizontal
let pupilavertical

function preload() {
}

function setup() {
  createCanvas(1000, 800)
}

function draw() {
  background("skyblue")
  let centerX = width / 2
  let centerY = height / 1.5
  let eyeOffsetX = 40
  let eyeOffsetY = -30

  noStroke()
  fill(255, 255, 0)
  beginShape()
  vertex(centerX - 80, centerY + 50)
  bezierVertex(centerX - 100, centerY - 80, centerX + 100, centerY - 80, centerX + 80, centerY + 50)
  bezierVertex(centerX + 70, centerY + 100, centerX - 70, centerY + 100, centerX - 80, centerY + 50)
  endShape(CLOSE)
  
  stroke("black")
  arc(centerX + 10, centerY + 5, 20, 10, 0, PI, OPEN)
  arc(centerX - 10, centerY + 5, 20, 10, 0, PI, OPEN)
  
  noStroke()
  fill(255, 255, 0)
  triangle(centerX - 65, centerY - 15, centerX - 85, centerY - 65, centerX - 45, centerY - 45)
  triangle(centerX + 65, centerY - 15, centerX + 85, centerY - 65, centerX + 45, centerY - 45)

  fill(255, 0, 0)
  ellipse(centerX - 50, centerY + 10, 30, 30)
  ellipse(centerX + 50, centerY + 10, 30, 30)

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

  fill(255, 255, 0)
  beginShape()
  vertex(centerX + 65, centerY + 50)
  vertex(centerX + 110, centerY + 20)
  vertex(centerX + 90, centerY + 70)
  vertex(centerX + 65, centerY + 70)
  endShape(CLOSE)
  beginShape()
  vertex(centerX + 95, centerY + 30)
  vertex(centerX + 140, centerY)
  vertex(centerX + 120, centerY + 50)
  vertex(centerX + 95, centerY + 50)
  endShape(CLOSE)
  beginShape()
  fill("brown")
  vertex(centerX + 125, centerY + 10)
  vertex(centerX + 170, centerY - 20)
  vertex(centerX + 150, centerY + 30)
  vertex(centerX + 125, centerY + 30)
  endShape(CLOSE)
}

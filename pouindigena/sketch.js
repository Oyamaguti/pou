let pupilahorizontal
let pupilavertical

function preload() {}

function setup() {
  createCanvas(1000, 800)
}

function draw() {
  background("blue")

  let centerX = width / 2
  let centerY = height / 1.5
  let eyeOffsetX = 40
  let eyeOffsetY = -30

  fill("red")
  ellipse(centerX - 40, centerY - 50, 20, 50)
  stroke("black")
  line(centerX - 40, centerY - 25, centerX - 40, centerY - 60)
  noStroke()
  fill("yellow")
  ellipse(centerX - 30, centerY - 50, 20, 50)
  strokeWeight(2)
  stroke("black")
  line(centerX - 30, centerY - 25, centerX - 30, centerY - 60)
  
  noStroke()
  fill(180, 110, 50)
  beginShape()
  vertex(centerX - 80, centerY + 50)
  bezierVertex(centerX - 100, centerY - 80, centerX + 100, centerY - 80, centerX + 80, centerY + 50)
  bezierVertex(centerX + 70, centerY + 100, centerX - 70, centerY + 100, centerX - 80, centerY + 50)
  endShape(CLOSE)
  
  stroke("red")
  strokeWeight(10)
  line(centerX - 65, centerY - 15, centerX + 65, centerY - 15)
  
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
  
  noStroke()
  fill("red")
  triangle(centerX - 66, centerY + 5, centerX - 54, centerY + 13, centerX - 60, centerY + 25)
  triangle(centerX - 46, centerY + 15, centerX - 34, centerY + 15, centerX - 40, centerY + 35)
  triangle(centerX - 26, centerY + 19, centerX - 14, centerY + 19, centerX - 20, centerY + 39)
  triangle(centerX - 6, centerY + 19, centerX + 6, centerY + 19, centerX, centerY + 39)
  triangle(centerX + 16, centerY + 19, centerX + 26, centerY + 19, centerX + 20, centerY + 39)
  triangle(centerX + 36, centerY + 15, centerX + 46, centerY + 15, centerX + 40, centerY + 35)
  triangle(centerX + 56, centerY + 10, centerX + 66, centerY + 5, centerX + 60, centerY + 30)
  
  stroke("green")
  strokeWeight(5)
  noFill()
  arc(centerX, centerY - 5, 148, 50, 0, PI)

  noFill()
  stroke("black")
  strokeWeight(5)
  arc(centerX, centerY + 30, 162, 50, 0, PI)

  noStroke()
  fill("red")
  rect(centerX - 20, centerY + 52, 40, 30)
}

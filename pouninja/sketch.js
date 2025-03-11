let pupilahorizontal
let pupilavertical

function preload() {

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
  fill("black")
  ellipse(centerX + 53, centerY + 4, 50, 60)
  ellipse(centerX - 53, centerY + 4, 50, 60)
  ellipse(centerX, centerY, 153, 150)
  beginShape()
  vertex(centerX - 80, centerY + 50)
  bezierVertex(centerX - 100, centerY - 80, centerX + 100, centerY - 80, centerX + 80, centerY + 50)
  bezierVertex(centerX + 70, centerY + 100, centerX - 70, centerY + 100, centerX - 80, centerY + 50)
  endShape(CLOSE)
  fill(180, 110, 50)
  ellipse(centerX, centerY - 30, 130, 40)
  strokeWeight(7)
  stroke("red")
  line(centerX - 50, centerY - 55, centerX + 50, centerY - 55)

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
  strokeWeight(3)
  
  noStroke()
  translate(400, 550)
  rotate(radians(-30))
  fill(180)
  rect(0, -200, 10, 200, 5)

  fill(50)
  rect(0, 0, 15, 60, 5)

  fill(200)
  for (let i = 5; i < 60; i += 10) {
    ellipse(7, i, 5, 5)
  }
}

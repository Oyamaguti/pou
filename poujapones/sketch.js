let pupilahorizontal
let pupilavertical
let simbolo

function preload() {
  simbolo = loadImage("simbolo.png")
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

  fill("black")
  ellipse(centerX, centerY - 40, 166, 10)
  triangle(centerX + 83, centerY - 40, centerX - 83, centerY - 40, centerX, centerY - 125)
  fill("red")
  circle(centerX, centerY - 70, 50)
  
  let simboloWidth = 40 
  let simboloHeight = 40 
  image(simbolo, centerX - simboloWidth / 2, centerY - 90, simboloWidth, simboloHeight)

  stroke("black")
  strokeWeight(3)
  line(centerX - 20, centerY + 20, centerX + 20, centerY + 20)

  stroke("gray")
  strokeWeight(4)
  line(centerX - 40, centerY + 20, centerX - 10, centerY )
  line(centerX + 40, centerY + 20, centerX + 10, centerY )
  fill("gray")
  triangle(centerX - 10, centerY + 30, centerX + 10, centerY + 30, centerX, centerY + 40 )

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

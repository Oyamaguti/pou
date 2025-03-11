let pupilahorizontal
let pupilavertical
let chupeta
let mamadeira

function preload() {
  chupeta = loadImage("chupeta.png")
  mamadeira = loadImage("mamadeira.png")
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
  
  fill("yellow")
  ellipse(centerX + 10, centerY - 60, 40, 40)
  fill("blue")
  ellipse(centerX + 20, centerY - 60, 30, 30)

  noStroke()
  fill(180, 110, 50)
  beginShape()
  vertex(centerX - 80, centerY + 50)
  bezierVertex(centerX - 100, centerY - 80, centerX + 100, centerY - 80, centerX + 80, centerY + 50)
  bezierVertex(centerX + 70, centerY + 100, centerX - 70, centerY + 100, centerX - 80, centerY + 50)
  endShape(CLOSE)
  
  fill("rgb(190,183,183)")
  rect(centerX - 88, centerY + 30, 175, 60, 20)
  ellipse(centerX, centerY + 76, 174, 50)
  ellipse(centerX - 83, centerY + 60, 15, 40)
  ellipse(centerX + 83, centerY + 60, 15, 40)
  
  stroke("black")
  line(centerX - 40, centerY - 55, centerX - 15, centerY - 40)
  line(centerX + 40, centerY - 55, centerX + 15, centerY - 40)
  
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
  
  image(chupeta, centerX - 15, centerY - 15, 40, 40)
  image(mamadeira, centerX + 60, centerY, 70, 70)
}

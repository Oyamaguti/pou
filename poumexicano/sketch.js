let pupilahorizontal
let pupilavertical
let bigode
let caveira
let bandeira
let chocalho

let chocalhoMascara

function preload() {
  bigode = loadImage("bigode.png")
  caveira = loadImage("caveira.png")
  bandeira = loadImage("bandeira.png")
  chocalho = loadImage("chocalho.jpg")
}

function setup() {
  createCanvas(1000, 800)
  chocalhoMascara = createGraphics(40, 40)
  chocalhoMascara.ellipse(20, 20, 40, 40)
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
  
  fill("black")
  beginShape()
  vertex(centerX - 80, centerY - 10)
  bezierVertex(centerX - 100, centerY + 30, centerX + 100, centerY + 30, centerX + 80, centerY - 10)
  vertex(centerX + 80, centerY + 50)
  vertex(centerX - 80, centerY + 50)
  endShape(CLOSE)
  ellipse(centerX, centerY + 50, 160, 75)
  
  fill(180, 110, 50)
  ellipse(centerX, centerY + 11, 90, 20)
  
  fill("blue")
  ellipse(centerX - 83, centerY - 8, 10, 20)
  ellipse(centerX + 83, centerY - 8, 10, 20)
  
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
  ellipse(centerX, centerY - 60, 200, 35)
  ellipse(centerX, centerY - 80, 50, 60)
  
  stroke("red")
  for (let i = -90; i < 90; i += 10) {
    line(centerX + i, centerY - 63, centerX + i + 5, centerY - 57)
    line(centerX + i, centerY - 63, centerX + i + 10, centerY - 55)
  }
  
  noStroke()
  fill("black")
  ellipse(centerX - 72, centerY + 35, 20, 55)
  ellipse(centerX + 72, centerY + 35, 20, 55)
  
  stroke("black")
  fill("rgb(75,17,17)")
  strokeWeight(2)
  
  let chocalhoX = centerX + 85
  let chocalhoY = centerY + 20

  push()
  translate(chocalhoX, chocalhoY)
  rotate(PI / 4)
  ellipse(0, 0, 10, 40)
  pop()
  
  fill("rgb(172,47,69)")
  push()
  translate(chocalhoX + 12, chocalhoY - 12)
  rotate(PI / 4)
  ellipse(0, 0, 15, 10)
  pop()
  
  fill("red")
  push()
  translate(chocalhoX + 28, chocalhoY - 25)
  rotate(PI / 4)
  chocalho.mask(chocalhoMascara)
  image(chocalho, -22, -20, 40, 40)
  pop()
  
  image(bigode, centerX - 50, centerY - 50, 100, 100)
  image(caveira, centerX - 25, centerY + 35, 50, 50)
  image(bandeira, centerX - 70, centerY + 30, 30, 15)
}

let pupilahorizontal
let pupilavertical

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

    fill(50)
    noStroke()

    arc(centerX - 60, centerY - 50, 60, 90, HALF_PI, PI + HALF_PI, CHORD)
    arc(centerX + 60, centerY - 50, 60, 90, PI + HALF_PI, HALF_PI, CHORD)

    stroke(2)
    fill(255)
    ellipse(centerX - eyeOffsetX, centerY + eyeOffsetY, 40, 30)
    ellipse(centerX + eyeOffsetX, centerY + eyeOffsetY, 40, 30)

    pupilahorizontal = map(mouseX, 0, width, centerX - 50, centerX - 30)
    pupilavertical = map(mouseY, 0, height, centerY - 40, centerY - 20)

    fill("cyan")
    noStroke()
    circle(pupilahorizontal, pupilavertical, 10)
    circle(pupilahorizontal + 80, pupilavertical, 10)

    stroke(0)
    strokeWeight(3)
    noFill()
    arc(centerX - eyeOffsetX, centerY + eyeOffsetY - 15, 30, 10, PI, 0)
    arc(centerX + eyeOffsetX, centerY + eyeOffsetY - 15, 30, 10, PI, 0)
    noStroke()

    fill("black")
    arc(centerX, centerY + 18, 80, 20, 0, PI, CHORD)
    arc(centerX - 20, centerY + 20, 30, 10, PI, 0)
    arc(centerX + 20, centerY + 20, 30, 10, PI, 0)

    fill(50)
    rect(centerX - 80, centerY - 120, 160, 80, 20)

    fill(255, 0, 0)
    star(centerX, centerY - 90, 10, 20, 5)

    fill(255)
    rect(centerX + 50, centerY, 25, 20)
    fill(0, 0, 255)
    rect(centerX + 50, centerY + 7, 25, 6)
    fill(255, 0, 0)
    rect(centerX + 50, centerY + 13, 25, 6)
}

function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints
    let halfAngle = angle / 2.0
    beginShape()
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius2
        let sy = y + sin(a) * radius2
        vertex(sx, sy)
        sx = x + cos(a + halfAngle) * radius1
        sy = y + sin(a + halfAngle) * radius1
        vertex(sx, sy)
    }
    endShape(CLOSE)

    fill(180, 110, 50)
    stroke("black")
    strokeWeight(2)
    arc(460, 500, 40, 25, PI, 0, CHORD)
    arc(460, 514, 25, 10, 0, PI, CHORD)
    arc(540, 500, 40, 25, PI, 0, CHORD)
    arc(540, 514, 25, 10, 0, PI, CHORD)
}

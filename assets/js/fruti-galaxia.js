//declaro variables
var pX, pXMov;
var pY, pYMov;
var activ, font, img;

//dibujo el lienzo
function setup() {
  let lienzo = createCanvas(500, 500);
  // Al método parent le pasamos el id de la etiqueta <div> que queramos.
  lienzo.parent("contenedor-frutigalaxia");
  pX = 250;
  pY = 250;
  activ = 0;
  pXMov = 3;
  pYMov = 5;
  img = loadImage("/assets/img/obras/frutilla1.png");
}

//dibujamos dentro del lienzo
function draw() {
  fill(70, 8, 55, 5);
  noStroke();
  rect(0, 0, 500, 500);

  if (frameCount % 200 == 0) {
    // contamos los frames Es multiplo de 200
    activ = activ + 1;
    if (activ == 3) {
      activ = 0;
    }
  }
  //dibujamos llineas e imagenes de frutillas
  if (activ == 0) {
    fill(226);
    stroke(pX, pY, 0);
    line(pX, 250, pY, pX);
    line(pX, pX, pY, mouseY);
    image(img, pX, pXMov);
  }

  //dependiendo el lado de la pantalla aparecen circulos o frutillas
  if (activ == 1) {
    fill(0, 0, 2, 10);
    noStroke();
    rect(0, 0, 500, 500);
    if (mouseX > 250) {
      fill(264, 10, 4, 10);
      fill(26, 0, 70, 10);
      image(img, pX, pXMov);
      ellipse(pX, 230, 20, 20);
      image(img, pY, pXMov);
      ellipse(pX, pY, 150, 150);
    }
    if (mouseX < 250) {
      noStroke();
      rect(0, 0, 500, 500);
      fill(264, 10, 4, 10);
      stroke(10, pY, pX);
      ellipse(pX, pY, 150, 150);
      ellipse(pX, 230, 20, 20);
      ellipse(pY, pX, 10, 10);
    }
  }
  if (activ == 2) {
    fill(255, 0, 251, 10);
    noStroke();
    line(pX, 120, pYMov, pXMov);
    image(img, pX, pXMov);
    image(img, pY, pX);
    image(img, pX, pX);
    rotate(30);
    line(pX, 250, pY, mouseY);
  }

  pX = pX + pXMov;
  pY = pY + pYMov;

  if (pX > 500) {
    pXMov = int(random(-10, -3)); // int saca los valores con coma y los deja enteros
  }
  if (pX < 0) {
    pXMov = int(random(-5, 9)); // valores al azar cada vez que rebota
  }

  if (pY > 500) {
    pYMov = int(random(-10, -3));
  }
  if (pY < 0) {
    pYMov = int(random(7, 3));
  }
}
//al hacer click dibujamos rectángulos
function mousePressed() {
  fill(random(10, 255));
  rect(random(350, 400), 290, 30, 30);
  rect(random(0, 250), random(17, 90), random(0, 500), 50, 50);
  rect(random(40, 300), 190, 70, 70);
}

// generamos destellos de luz con la barra espaciadora
function keyPressed() {
  if (key == " ") {
    background(random(500));
  }
}

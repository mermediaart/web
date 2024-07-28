//Merlina Apesteguía

function setup () {
  background (5, 5, 5); 
  let lienzo = createCanvas(500, 650);
  // Al método parent le pasamos el id de la etiqueta <div> que queramos.
  lienzo.parent('contenedor-ojo');

  fill(255);
  //fondo rectangulos

  rect (0, mouseY, 500, 10);
  rect (0, 410, 500, 10);
  rect (0, 430, 500, 10);
  rect (0, 450, 500, 10);
  rect (0, 470, 500, 10);
  rect (0, 490, 500, 10);
  rect (0, 410, 500, 10);
  rect (0, 430, 500, 10);
  rect (0, 450, 500, 10);
  rect (0, 470, 500, 10);
  rect (0, 490, 500, 10);
  rect (0, 510, 500, 10);
  rect (0, 530, 500, 10);
  rect (0, 550, 500, 10);
  rect (0, 570, 500, 10);
  rect (0, 590, 500, 10);
}
function draw () {
  //circulos de abajo
  background (random (65));
  fill (252, 0, 34, 210);
  rect (random (500), random (400), random (20), random(20));
  fill (255, 0, 0);
  ellipse (mouseX, 400, 255, 255);
  fill (5, 5, 5);
  ellipse (mouseX, 500, 300, 300);
  fill(255);
  ellipse (mouseX, 595, 30, 30);

  rect (0, 510, 500, 10);
  rect (0, 530, 500, 10);
  rect (0, 550, 500, 10);
  rect (0, 570, 500, 10);
  rect (0, 590, 500, 10);
  rect (0, 610, 500, 10);
  rect (0, 630, 500, 10);

  rect (0, 510, 500, 10);
  rect (0, 530, 500, 10);
  rect (0, 550, 500, 10);

  ellipse (mouseX, 80, 150, 150);

  fill (5, 5, 5);
  ellipse (mouseX, 75, 15, 120);
}

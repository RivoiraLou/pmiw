//Rivoira Lourdes
//Legajo: 119126/6
//Link video de youtube: https://youtu.be/ImXxlGiFQQA


let ilusion;
let columnas;
let filas;
let tamaño;

function preload() {
  ilusion = loadImage("data/imagen.jpg");
}

function setup() {
  createCanvas(800, 400);
  reiniciar();
}

function draw() {
  background(0);
  image(ilusion, 0, 0, width / 2, height);
  tamaño = width / 2 / columnas;

  for (let i = 0; i < columnas; i++) {
    for (let j = 0; j < filas; j++) {
      let x = (i * tamaño) + (width / 2) + tamaño / 2;
      let y = j * tamaño + tamaño / 2;
      let distanciaDiagonal = calcularDistanciaDiagonal(i, j);
      let maxDistancia = dist(0, 0, columnas - 1, filas - 1);
      let size = map(distanciaDiagonal, 0, maxDistancia, tamaño * 0.1, tamaño * 0.9);
      let distancia = dist(mouseX, mouseY, x, y);

      if (distancia < size / 2) {
        let colorElipse = color(random(255), random(255), random(255));
        dibujarElipse(x, y, size, colorElipse);
      } else {
        dibujarElipse(x, y, size, color(255));
      }
    }
  }
}

function keyPressed() {
  if (key === 'a') {
    columnas++;
    filas++;
  } else if (key === 'd') {
    columnas = max(1, columnas - 1);
    filas = max(1, filas - 1);
  } else if (key === 'r') {
    reiniciar();
  }
}

function mouseClicked() {
  if (mouseButton === LEFT) {
    columnas = int(random(5, 25));
    filas = int(random(5, 25));
  }
}

function dibujarElipse(x, y, size, colorElipse) {
  fill(colorElipse);
  noStroke();
  ellipse(x, y, size, size);
}

function reiniciar() {
  columnas = 18;
  filas = 18;
  tamaño = 20;
}

function calcularDistanciaDiagonal(i, j) {
  return dist(i, j, columnas - 1 - i, filas - 1 - j);
}

//codigo do carro

let xCarros = [550, 550, 550, 550, 550, 550];
let yCarros = [40, 96, 150, 210, 270, 310];
let velocidadeDoCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro() {
  for(let i = 0; i < imagemCarros.length; i ++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro)
  }
}

function movimentoCarro () {
  for(let i = 0; i < imagemCarros.length; i ++) {
    xCarros[i] -= velocidadeDoCarros[i];
    if(xCarros[i] < -50) {
      xCarros[i] = 550;
    }
  }
}

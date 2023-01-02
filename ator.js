//ator
let xAtor = 88;
let yAtor = 370;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
    image(imagemDoAtor, xAtor, yAtor, 25, 25);

}

function movimentoAtor () {
    if(keyIsDown(87)) {
      yAtor -= 2;
    }
  if(keyIsDown(83)) {
    if(podeSeMover()){
      yAtor -= -2;
    }
  }
  if(yAtor < -10) {
    voltaParaInicio();
  }
}

function verificaColisao() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if(colisao) {
      voltaParaInicio();
      if(meusPontos > 0) {
        meusPontos -= 1;
      }
      somColisao.play();
    }
  }
}



function voltaParaInicio() {
  yAtor = 370;
}

function incluirPontos() {
  textAlign(CENTER)
  textSize(25);
  fill(255,240,80)
  text(meusPontos, 100, 27)
}

function marcarPontos() {
  if(yAtor == -10) {
    meusPontos += 1;
    if(meusPontos > 1){
      voltaParaInicio();
    }
    somPonto.play();
  }
}

function podeSeMover() {
  return yAtor < 370;
}




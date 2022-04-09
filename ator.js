//Variaveis do ator
let yAtor = 366;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
    image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
    //Movimentação do boneto
    if (keyIsDown(UP_ARROW)) {
        yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
        if (podeSeMover()) {
            yAtor += 3;
        }
    }
}

function conferindoColisao() {
    for (let i = 0; i < imagemCarros.length; i++) {
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
        if (colisao) {
            somDaColisao.play();
            voltaAtorPosicao();
            if (pontosMaiorQueZero()) {
                meusPontos -= 1;
            }
        }
    }
}

function pontosMaiorQueZero() {
    return meusPontos > 0;
}

function voltaAtorPosicao() {
    yAtor = 366;
}

function podeSeMover() {
    return yAtor < 366;
}

function incluiPontos() {
    textAlign(CENTER);
    textSize(25);
    fill(255, 240, 60)
    text(meusPontos, 400, 27);
}

function marcaPonto() {
    if (yAtor < 15) {
        meusPontos += 1;
        somDoPonto.play();
        voltaAtorPosicao();
    }
}
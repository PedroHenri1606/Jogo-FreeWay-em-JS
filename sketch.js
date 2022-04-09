//Variaveis do mapa
let largura = 500;
let altura = 400;

function setup() {
    createCanvas(largura, altura);
    somDaTrilha.loop();
}

function draw() {
    background(imagemEstrada);


    mostraAtor();
    movimentaAtor();
    conferindoColisao();
    incluiPontos();
    marcaPonto();



    mostraCarros();
    movimentaCarros();
    velocidadeDosCarros()

}
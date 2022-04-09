//Lista dos carros
let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 96, 150, 210, 270, 318]
let comprimentoCarro = 50;
let alturaCarro = 40;
let velocidadeCarros = [4.9, 3.9, 5.9, 4.4, 2.8, 5.2]

function mostraCarros() {
    for (i = 0; i < imagemCarros.length; i++) {
        image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    }
}

function velocidadeDosCarros() {
    for (i = 0; i < velocidadeCarros.length; i++) {
        xCarros[i] -= velocidadeCarros[i];
    }
}

function movimentaCarros() {
    for (let i = 0; i < imagemCarros.length; i++) {
        if (passouPelaBorda(xCarros[i])) {
            xCarros[i] = 600;
        }
    }
}

function passouPelaBorda(xCarro) {
    return xCarro < -50;
}
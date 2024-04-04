function perimetroForma(lado, totalLados){
    totalLados = totalLados || 4;
    return lado * totalLados;
}


console.log(perimetroForma(10, 4));

console.log(perimetroForma(10));

function listaForma(...listaArgumentos){
    console.log(listaArgumentos);
    listaArgumentos.forEach(item => console.log(item));
}

listaForma(10, 20, 30, 'Oi', 'Teste');

function anunciarGanhadores(premio, ...ganhadores){
    ganhadores.forEach(ganhador => {
        console.log(ganhador + ' ganhou um ' + premio)
    });
}

anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria');

const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas, ...legumes];

console.log(comidas);
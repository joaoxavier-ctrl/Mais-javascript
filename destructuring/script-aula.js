const carro = {
    marca: 'Honda',
    ano: 2018,
    portas: 2
}

const {marca, ano, portas} = carro;

console.log(marca, ano, portas);

const cliente = {
    nome: 'Andre',
    compras: {
        digitais: {
            livros: ['Livro 1', 'Livro 2'],
            videos: ['Video JS', 'Video HTML']
        },
        fisicas: {
            cadernos: ['Caderno 1']
        }
    }
}
  
//console.log(cliente.compras.digitais.livros);
//console.log(cliente.compras.digitais.videos);
  
const {livros, videos} = cliente.compras.digitais;
  
console.log(livros);
console.log(videos);

const frutas = ['Banana', 'Uva', 'Morango'];

const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];

// Com destructuring
const [primeira, segunda, terceira] = frutas;

function handleKeyboard(event) {
    console.log(event.key);
  }
  // Com Destructuring
  function handleKeyboard({key}) {
    console.log(key);
  }
  
  document.addEventListener('keyup', handleKeyboard);
  
  
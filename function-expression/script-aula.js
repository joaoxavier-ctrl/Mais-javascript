/*function somar(a,b){
    return a + b;
}*/

function dividir(a,b){
    return a/b;
}

const somar = (a,b) => a + b;
const quadrado = a => a * a;

console.log(somar(1,3));
console.log(quadrado(4));
console.log(dividir(10,5));

const instrumento = 'Violão';

//funcao isolada sendo executada quando lida;
(() => {
    const instrumento = 'Guitarra';
    console.log(instrumento);
})();

console.log(instrumento);
const livros = require('./listaLivros');

function menorValor(arrProdutos, posicaoInicial){
    let maisBarato = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
            maisBarato = atual 
        }
    }
    return maisBarato;
}

module.exports = menorValor;

// let atual = 0: identifica qual é o indice do array, começando em 0
// let maisBarato = 0: onde guardamos o indice do array com o produto de menor valor 
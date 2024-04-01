

// Funcionalidade para puxar os dados que são preencidos atraves do Front-End
function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);   // a variavel foi definida como 'parseint', para entrar apenas numeros dentro dela
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++){      //Configurando para que o numero seja gerado quantas vezes foram passadas no front
        numero = obterNumeroAleatorio(de,ate);

        while(sorteados.includes(numero)) //verifica se o numero já foi sorteado para evitar duplicados 
        {
            numero = obterNumeroAleatorio(de,ate);
        }


        sorteados.push(numero);
    }
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`  //Configuração para exibir a quantidade de numeros no front
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}
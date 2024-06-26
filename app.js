

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

    alterarStatusBotao(); 
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

//Funcão para ativação  do botão reiniciar

function alterarStatusBotao(){

    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado'))
    {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }
    else 
    {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}


function reiniciar()  // função para configurar o botao reiniciar
{
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    alterarStatusBotao();
}

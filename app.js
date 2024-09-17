let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1 ;

function exibitTextoNaTela (tag,texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial (){
    exibitTextoNaTela ('h1', 'Jogo do número secreto');
exibitTextoNaTela ('p','escolha um número entre 0 e 10');
}
 
exibirMensagemInicial();

function verificarChute () {
    let chute = document.querySelector('input').value;

    if( chute== numeroSecreto ) {
        exibitTextoNaTela('h1', 'você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibitTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibitTextoNaTela ('p', 'o numero secreto é menor');
        } else{
            exibitTextoNaTela ('p','o numero secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
    
}

function gerarNumeroAleatorio () {
     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
     let quantidadeElementosNaLista = listaDeNumeroSorteados.length;
     if (quantidadeElementosNaLista == numeroLimite){
        listaDeNumeroSorteados = [];
     }

     if(listaDeNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
     } else{
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log(listaDeNumeroSorteados);
        return numeroEscolhido;
     }
}

function limparCampo () {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo () {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial ();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
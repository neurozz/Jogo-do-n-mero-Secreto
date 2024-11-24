let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNatela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}
function exibirMensagemInicial(){

    exibirTextoNatela('h1','Jogo do número secreto');
    exibirTextoNatela('p','Escolha um número de 1 a 10');   
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNatela('h1','Acertou!')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
                let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa} !`
        exibirTextoNatela('p',mensagemTentativas);7
        document.getElementById('reiniciar').removeAttribute('disabled');
    }

    
    else{
        if (chute > numeroSecreto){
            exibirTextoNatela ('p','O número secreto é menor');
        } else{ exibirTextoNatela ('p','O número secreto é maior');

      }tentativas++;
      limparCampo();
    }

}
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random ()* numeroLimite + 1 );
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
       listaDeNumerosSorteados.push(numeroEscolhido);
       console.log(listaDeNumerosSorteados);
        return numeroEscolhido ;
    }

    
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();  
    tentativas = 1  
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

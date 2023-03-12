const botoesCarrossel = document.querySelectorAll('.botao');
console.log(botoesCarrossel)
const imagens =document.querySelectorAll('.imagem');
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click',() => {
        console.log(indice);
        desativarBotaoSelecionado();
        selecionarBotaoCarrossel(botao);
        esconderImagemAtiva();        
        mostrarImagemDeFundo(indice);
    });

});

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

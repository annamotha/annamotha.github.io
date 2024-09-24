document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("orcamentoForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Capturando os valores do formulário
        const quantidadeDeCores = parseInt(form.cores.value);
        const linha = form.linha.value; // Captura o valor do rádio selecionado
        const tamanho = form.tamanho.value;

        // Calculando o total final
        const totalFinal = calcularValor(tamanho, linha, quantidadeDeCores);

        // Exibindo o total na tela
        const precoElemento = document.getElementById("preco");
        precoElemento.textContent = `R$ ${totalFinal.toFixed(2)}`; // Formatação em reais

        // Tornando o resultado visível
        const resultadoElemento = document.getElementById("resultado");
        resultadoElemento.classList.remove("oculto");
    });
});


function calcularLinhaEscolhida(linha) {
    let linhaEscolhida;

    if (linha === 'normal') {
        linhaEscolhida = 10;
    } else if (linha === 'feupuda') {
        linhaEscolhida = 20;
    }

    return linhaEscolhida;
}

function calcularValor(tamanho, linha, quantidadeDeCores) {
    let valor;
    let coresPeso;
    let coresTotal = quantidadeDeCores;


    if (tamanho === 'grande') {
        valor = 4;
        coresPeso = 6;
    } else if (tamanho === 'mini') {
        valor = 1;
        coresPeso = 1;
    } else if (tamanho === 'medio'){
        valor = 3;
        coresPeso = 5;
    }else { //pequeno
        valor = 2;
        coresPeso = 4;
    }
    const linhaEscolhida = calcularLinhaEscolhida(linha);
    if(quantidadeDeCores < 2){
        coresTotal = 0;
    }
    return (valor * linhaEscolhida) + (coresPeso * coresTotal);
}


/* function calcularTotal(quantidadeDeCores, tamanho, linha) {
    const tamanhoLinha = calcularValor(tamanho, linha);
    let cores =  quantidadeDeCores;
    if(quantidadeDeCores < 2){
        cores = 0;
    }
    return (cores * 5) + tamanhoLinha;
}
 */
function enviarOrcamento() {
    const form = document.getElementById('orcamentoForm');

    // Obtém os valores dos inputs
    const nome = form.nome.value;
    const produto = form.produto.value;
    const tamanho = form.tamanho.value;
    const cores = form.cores.value;
    const linha = form.linha.value;
    const imagem = form.imagem_url.value || "imagem URL não fornecida";

    // Obtém o preço gerado
    const preco = document.getElementById('preco').textContent || "preço não definido";

    // Cria a mensagem
    const mensagem = `Olá, estou interessado no Amigurumi!\n\n` +
                     `Nome: ${nome}\n` +
                     `Produto: ${produto}\n` +
                     `Tamanho: ${tamanho}\n` +
                     `Quantidade de cores: ${cores}\n` +
                     `Tipo de linha: ${linha}\n` +
                     `Imagem: ${imagem}\n` +
                     `Simulação de preço estimado gerado pelo site: ${preco}`;

    // Cria o link do WhatsApp
    const whatsappLink = `https://api.whatsapp.com/send?phone=5522997496074&text=${encodeURIComponent(mensagem)}`;

    // Redireciona para o WhatsApp
    window.open(whatsappLink, '_blank'); // Abre o link no WhatsApp
}

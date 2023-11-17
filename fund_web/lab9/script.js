
function preencherFicha(filme) {

    document.getElementById('ficha').innerHTML += `
        <div class="quadrado">
            <img src="${filme.figura}" alt="${filme.titulo}">
            <h2>${filme.titulo}</h2>
            <p><strong>Resumo:</strong> ${filme.resumo}</p>
            <p><strong>Gêneros:</strong> ${filme.generos.join(', ')}</p>
            <p><strong>Classificação Etária:</strong> ${filme.classificacao}</p>
            <p><strong>Elenco:</strong> ${filme.elenco.join(', ')}</p>
            <p><strong>Opiniões:</strong></p>
            <ul>
                ${filme.opinioes.map(opiniao => `<li>${opiniao.rating} - ${opiniao.descricao}</li>`).join('')}
            </ul>
        </div>
    `;
  }
  

  function carregarDadosDaURL(url) {
    fetch(url)
      .then(response => response.json())
      .then(lista => {
        console.log('Dados obtidos:', lista);
        lista.forEach(filme => {
            preencherFicha(filme);
        });
        const filme = data[0]; 
        
      })
  }
  
  const url = 'https://rafaelescalfoni.github.io/desenv_web/filmes.json';
  carregarDadosDaURL(url);
  
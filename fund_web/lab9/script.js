
function preencherFicha(filme) {

    document.getElementById('ficha').innerHTML += `
        <div class="quadrado">
            <img src="${filme.figura}" alt="${filme.titulo}">
            <div class="obs">
              <span class="star" id="estrela">&star;&star;&star;&star;&star;</span>    
                <div class="estrela">
                  <h2>${filme.titulo}</h2>  
                  <p><strong></strong> ${filme.generos.join(', ')}</p>
                  <p><strong></strong> ${filme.classificacao}</p>
                  <p><strong>Elenco: </strong> ${filme.elenco.join(', ')}</p>
                  <h3><strong></strong> ${filme.resumo}</h3>
                  <ul>
                      ${filme.opinioes.map(opiniao => `<li>${opiniao.rating} - ${opiniao.descricao}</li>`).join('')}
                  </ul>
              </div>
          </div>
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

  function preencherEstrela(){

  }

 
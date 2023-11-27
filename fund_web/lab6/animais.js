const animaisList =  [
    {foto: "./imagens/golden-retriever-04052023112519685.jpeg"
    , nome: "Mia"
    , especie: "Cachorro"
    , descricao: "O Golden Retriever é um verdadeiro tesouro à espera de um lar amoroso e acolhedor. Com sua pelagem dourada e olhos cheios de ternura, esse cão de porte médio a grande é não apenas esteticamente deslumbrante, mas também possui uma personalidade dócil e afetuosa. Se você está em busca de um companheiro leal, inteligente e de fácil convivência, o Golden Retriever é a escolha ideal. Sua natureza gentil o torna perfeito para famílias e ele adora interagir com crianças e outros animais. Adote um Golden Retriever e descubra a alegria e o amor que esse cão carrega consigo, transformando sua vida em uma jornada repleta de felicidade e lealdade."
},
{foto: "./imagens/Gato.jpg"
    , nome: "Lolo"
    , especie: "Gato"
    , descricao: "Viver com um gato Van Turco é como compartilhar sua casa com uma obra de arte viva. Sua pelagem distintiva, predominantemente branca com manchas coloridas, é uma verdadeira maravilha visual. A graça e elegância de seus movimentos hipnotizam a todos que os observam. No entanto, sua verdadeira magia está na personalidade: um equilíbrio perfeito entre afeto e independência. Nas manhãs, ele adora se aninhar ao sol, transformando cada raio de luz em seu confortável refúgio. Durante o dia, é um explorador curioso, desbravando cada canto da casa com uma curiosidade encantadora. À noite, torna-se um companheiro carinhoso, buscando o calor do seu lado na cama."
}
]

/*const carregarAnimal = (seletorPai, lista) => {

    lista.forEach(bicho => {
        <div class="carousel-container">
            <div class="carousel-wrapper">
              <div class="carousel-slide">
                    <div class="pets-hall"></div>
                </div>
              </div>
              <div class="carousel-slide">
                
                
                </div>

              </div>
              <div class="carousel-slide">Slide 3</div>
              <!-- Adicione mais slides conforme necessário -->
              
            </div>
            <button class="prev-btn">.</button>
            <button class="next-btn">></button>
          </div>
          
        let divPets = `<div class="pets">
            <div class="cima">
                <img src="${bicho.foto}" alt="Foto de um ${bicho.especie}">
                <div class="escrito">
                    <div class="principal">
                        <h2>${bicho.nome}</h2>
                        <h3>${bicho.especie}</h3>
                    </div>
                </div> 

            </div>
            
            <div class="baixo">
                <p>${bicho.descricao}</p>
                <a href="./contato.html">Entrar em contato</a>
            </div>               
        </div>` 
        document.querySelector(seletorPai).innerHTML += divPets
    })
   
    
}

carregarAnimal(".pets-hall", animaisList[0])*/
/*
</div>
</div>
<div class="carousel-slide">
<div class="pets">
<div class="cima">
    <img src="" alt="Van">
    <div class="escrito">
        <div class="principal">
            <h2>Lolo</h2>
            <h3>Gato</h3>
        </div>
    </div> 

</div>

<div class="baixo">
    <p></p>
    <a href="./contato.html">Entrar em contato</a>
</div>               

</div>

</div>
<div class="carousel-slide">Slide 3</div>
<!-- Adicione mais slides conforme necessário -->
</div>
<button class="prev-btn">.</button>
<button class="next-btn">></button>
</div>

<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script src="script.js"></script>






<div class="pets">
<div class="cima">
<img src="./imagens/york.jpg" alt="Van">
<div class="escrito">
<div class="principal">
    <h2>snop</h2>
    <h3>Cachorro</h3>
</div>
</div> 

</div>

<div class="baixo">
<p>Conviver com um Yorkshire Terrier é como ter um pequeno grande guerreiro ao seu lado. Apesar de seu tamanho diminuto, sua personalidade é cheia de determinação e vivacidade. Todas as manhãs, ele se anima com uma energia contagiante, pronto para explorar o mundo ao seu redor. Seu latido alegre e sua expressão animada tornam qualquer dia mais brilhante. Durante os passeios, ele demonstra sua coragem e inteligência, desbravando o ambiente com curiosidade e charme. Em casa, ele se transforma em um companheiro amoroso e afetuoso, buscando carinho e atenção, e sempre pronto para se aconchegar no colo. Sua lealdade é imensa e, apesar de seu porte pequeno, seu amor e presença enchem o lar com uma grandeza inigualável.</p>
<a href="./contato.html">Entrar em contato</a>
</div>               

</div>


<div class="pets">
<div class="cima">
<img src="./imagens/cachorro.jpg" alt="Van">
<div class="escrito">
<div class="principal">
    <h2>Ralf</h2>
    <h3>Cachorro</h3>
</div>
</div> 

</div>

<div class="baixo">
<p>Viver ao lado de um cão sem raça definida é uma jornada autêntica e surpreendente. Desde o momento em que o encontrei, percebi sua singularidade e personalidade vibrante. Ele é uma mistura encantadora de traços únicos, com um olhar expressivo que transmite sua alegria pela vida. Seu comportamento é uma fusão de energia e doçura, e sua adaptação a diferentes situações é notável. Nas caminhadas, ele explora o mundo com entusiasmo, farejando e interagindo com outros cães e pessoas, demonstrando sua natureza amigável.</p>
<a href="./contato.html">Entrar em contato</a>
</div>               

</div>

<div class="pets">
<div class="cima">
<img src="./imagens/cachorro 2.jpeg" alt="Van">
<div class="escrito">
<div class="principal">
    <h2>Nina</h2>
    <h3>Cachorro</h3>
</div>
</div> 

</div>

<div class="baixo">
<p>Conviver com um cão sem raça definida é uma jornada de descoberta e autenticidade. Desde o primeiro encontro, você é saudado com a individualidade única desse peludo companheiro, que carrega traços de diversas linhagens. Cada dia com ele é uma surpresa, pois sua personalidade e aparência variam de forma fascinante.</p>
<a href="./contato.html">Entrar em contato</a>
</div>               

</div>

<div class="pets">
<div class="cima">
<img src="./imagens/zeus.jpeg" alt="Van">
<div class="escrito">
<div class="principal">
    <h2>Zeus</h2>
    <h3>Gato</h3>
</div>
</div> 

</div>

<div class="baixo">
<p>Compartilhar a vida com um gato é como ter um misterioso e encantador amigo de quatro patas. Desde o momento em que esse felino de personalidade própria entra em sua vida, você é cativado por sua elegância e graciosidade. Cada dia é uma dança sutil entre independência e carinho: ele desliza pela casa com ares de mistério, explorando cada canto e recanto com curiosidade felina. Às vezes, é aconchegante e se aninha em seus braços, procurando calor e afeto. Outras vezes, é um explorador destemido, exibindo suas habilidades de caça e saltos surpreendentes. </p>
<a href="./contato.html">Entrar em contato</a>
</div>               
*/
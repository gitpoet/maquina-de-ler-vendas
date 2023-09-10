export const catalogo = [
  {
    id: "1",
    imagemLivro: "historia-cordel.png",
    tituloLivro:
      "História da Literatura de Cordel - período de formação - 2ª ed. revista ",
    paginasLivro: 372,
    descLivro:
      "Tese de doutorado do poeta e professor Carlos Dantas, na Universidade de Santiago de Compostela, Espanha, na qual o autor analisa o processo de criação do sistema literário do cordel, criado pelos poetas paraibanos Leandro Gomes de Barros, Francisco das Chagas Batista e João Martins de Athayde, em Recife.",
    precoLivro: 40,
    ensaio: true,
  },

  {
    id: "2",
    imagemLivro: "imagem (5).jpg",
    tituloLivro: "O Auto da Compadecida e a Literatura de Cordel",
    paginasLivro: 61,
    descLivro:
      "Ensaio sobre como Ariano Suassuna utilizou três folhetos de cordel em cada um dos atos de que se compõe O Auto da Compadecida.",
    precoLivro: 20,
    ensaio: true,
  },

  {
    id: "3",
    imagemLivro: "imagem (20).jpg",
    tituloLivro: "Ariano Suassuna e o diálogo entre as pedras do sertão",
    paginasLivro: 57,
    descLivro:
      "Monografia do poeta e professor Carlos Dantas no Curso de Letras da UECE. Nela, o autor analisa como o insigne escritor paraibano utilizou a literatura de cordel e a poesia dos cantadores em sua obra romanesca mais famosa: A pedra do reino e o príncipe do sangue do vai-e-volta.",
    precoLivro: 20,
    ensaio: true,
  },

  {
    id: "4",
    imagemLivro: "livromiltons.png",
    tituloLivro: "Miltons Poéticos & Outros DisVersos",
    paginasLivro: 83,
    descLivro:
      "Editado em 2017, trata-se 13 poemas inspirados nas músicas de Milton Nascimento, além do poema intitulado 'Os 4 elementos' acrescido de outros poemas premiados.",
    precoLivro: 20,
    ensaio: false,
  },

  {
    id: "5",
    imagemLivro: "livrodigitais.png",
    tituloLivro: "Digitais do Coração e outros poemas",
    paginasLivro: 60,
    descLivro:
      "Livro composto por uma série de poemas apaixonados, seguido de outros de cunho mais crítico, sobretudo na questão política e meio ambiental.",
    precoLivro: 20,
    ensaio: false,
  },

  {
    id: "6",
    imagemLivro: "livrocacador.png",
    tituloLivro: "Caçador de Fogo",
    paginasLivro: 55,
    descLivro:
      "Primeiro livro de poemas publicado após o retorno do poeta de São Paulo, em 1986. Trata-se de poemas de cunho eminentemente metafísico e espiritual.",
    precoLivro: 20,
    ensaio: false,
  },
];

export function salvarLocalStorage(chave, informacao) {
  localStorage.setItem(chave, JSON.stringify(informacao));
}
export function lerLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
  localStorage.removeItem(chave);
}
export function desenharProdutoCarrinhoSimples(
  idProduto,
  idContainerHtml,
  quantidadeProduto
) {
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho = document.getElementById(idContainerHtml);

  const elementoArticle = document.createElement("article");
  const articleClasses = [
    "flex",
    "bg-slate-100",
    "rounded-lg",
    "p-1",
    "relative",
    "mb-2",
    "w-96",
  ];

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }

  const cartaoProdutoCarrinho = `
  <img src="./assets/img/${produto.imagemLivro}" alt="${produto.tituloLivro}" class="h-24 rounded-lg">
  <div class=" p-2 flex flex-col justify-between">
    <p class="text-sm">${produto.tituloLivro}</p>
    <p class="text-green-700 text-lg">$${produto.precoLivro}</p>
  </div>
  <div class="flex text-slate-950 items-end absolute bottom-2 right-2" text-lg>
    
    <p id="quantidade-${produto.id}" class="ml-2" >${quantidadeProduto} </p>
    
  </div>`;
  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);
}

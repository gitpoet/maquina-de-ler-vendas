export const catalogo = [
  {
    id: "1",
    imagemLivro: "historia-cordel.png",
    tituloLivro:
      "História da Literatura de Cordel - período de formação - 2ª ed. revista ",
    paginasLivro: 372,
    descLivro:
      "Tese de doutorado defendida na Universidade de Santiago de Compostela (USC) em 2012.",
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
      "Ensaio sobre como Ariano Suassuna utilizou a literatura de cordel na sua obra Romance da Pedra do reino e o príncipe do sangue do vai-e-volta.",
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
  },

  {
    id: "5",
    imagemLivro: "livrodigitais.png",
    tituloLivro: "Digitais do Coração e outros poemas",
    paginasLivro: 60,
    descLivro:
      "Livro composto por uma série de poemas apaixonados, seguido de outros de cunho mais crítico, sobretudo na questão política e meio ambiental.",
    precoLivro: 20,
  },

  {
    id: "6",
    imagemLivro: "livrocacador.png",
    tituloLivro: "Caçador de Fogo",
    paginasLivro: 55,
    descLivro:
      "Primeiro livro de poemas publicado após o retorno do poeta de São Paulo, em 1986. Trata-se de poemas de cunho eminentemente metafísico e espiritual.",
    precoLivro: 20,
  },
];

export function salvarLocalStorage(chave, informacao) {
  localStorage.setItem(chave, JSON.stringify(informacao));
}
export function lerLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave));
}

const catalogo = [
  {
    id: 1,
    tituloLivro: "História da Literatura de Cordel - período de formação",
    paginasLivro: 372,
    descLivro:
      "Tese de doutora defendida em 2012, na Universidade de Santiago de Compostela, Espanha, aborda a criação do sistema literário do cordel, em Recife, por três poetas paraibanos: Lenadro Gomes de Barros, Francisco das Chagas Batista e João martins de Athayde.",
    precoLivro: 40,
    imagemLivro: "historia-cordel.png",
  },
  {
    id: 2,
    tituloLivro: "O Auto da Compadecida e a literatura de cordel",
    paginasLivro: 61,
    descLivro:
      "A peça de teatro O auto da compadecida é, sem dúvida, a obra mais conhecida do escritor paraibano Ariano Suassuna. Todavia, pouca gente sabe de que cada um dos três atos da peça foram inspirados em três folhetos de cordel. Foi o próprio Ariano que explicitou esse fato nas suas 'aulas-espetáculo' e en seus livros e ensaios publicados durante a sua trajetória como estudioso da Literatura de Cordel. Este livro é composto de um texto que explica essa relação entre a peça e o cordel, seguido da reprodução na íntegra dos referidos cordéis.",
    precoLivro: 20,
    imagemLivro: "imagem (5).jpg",
  },
  {
    id: 3,
    tituloLivro: "Ariano Suassuna e o diálogo entre as pedras do sertão",
    paginasLivro: 57,
    descLivro:
      "O tema central da pesquisa liga-se ao paraibano Ariano Suassuna e sua obra, o romance armorial-popular A << pedra do reino e o príncipe do sangue-do-vai-e-volta>>. Essa obra, segundo Dantas, representa a síntese da estética armmorial, ou seja, o popular e o erudito são aspectos diferentes de uma mesma realidade: A Literatura Nacional Brasileira. Arminda Serpa - professora de literatura da UECE",
    precoLivro: 20,
    imagemLivro: "imagem (20).jpg",
  },
];
for (const livroCatalogo of catalogo) {
  const cartaoLivro = `<div id="card-produto-1">
  <img
    src="./assets/img/${livroCatalogo.imagemLivro}"
    alt="Capa do livro História da literatura de cordel - período de formação"
    style="height: 300px"
  />
  <h2>${livroCatalogo.tituloLivro}</h2>
  <p>${livroCatalogo.paginasLivro}</p>
  <p>${livroCatalogo.descLivro}</p>
  <p>$${livroCatalogo.precoLivro}</p>
  <button>Adicionar</button>
</div>`;

  document.getElementById("container-produto").innerHTML += cartaoLivro;
}

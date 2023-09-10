import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

export function renderizarCatalogo() {
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class='border-solid w-48 m-2 p-2 flex flex-col shadow-xl shadow-slate-700 group rounded-lg ${
      produtoCatalogo.ensaio ? "ensaio" : "poesia"
    }'  id="card-produto-${produtoCatalogo.id}">
    <img
      src="./assets/img/${produtoCatalogo.imagemLivro}"
      alt="Capa do livro História da literatura de cordel - período de formação"
      class="group-hover:scale-110 duration-300 my-3 rounded-lg"
    />
    <h2 class="uppercase text-red-900 font-bold text-center" class='titulo'>${
      produtoCatalogo.tituloLivro
    }</h2>
    <p class="text-center">${produtoCatalogo.paginasLivro} pgs.</p>
    <p>${produtoCatalogo.descLivro}</p>
    <p class="font-bold text-center" >R$ ${produtoCatalogo.precoLivro},00</p>
    <button id='adicionar-${
      produtoCatalogo.id
    }' class="bg-orange-700 hover:bg-orange-300 hover:scale-110 duration-300 text-white p-2 rounded-lg content-center" ><i class="fa-sharp fa-solid fa-cart-plus"></i></button>
  
   
  </div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
  }

  for (const produtoCatalogo of catalogo) {
    document
      .getElementById(`adicionar-${produtoCatalogo.id}`)
      .addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
  }
}

const catalogoProdutos = document.getElementById("container-produtos");

function exibirTodos() {
  const produtosEscondidos = Array.from(
    catalogoProdutos.getElementsByClassName("hidden")
  );

  for (const produto of produtosEscondidos) {
    produto.classList.remove("hidden");
  }
}

function esconderPoesias() {
  exibirTodos();
  const produtosPoesias = Array.from(
    catalogoProdutos.getElementsByClassName("poesia")
  );
  for (const produto of produtosPoesias) {
    produto.classList.add("hidden");
  }
}

function esconderEnsaios() {
  exibirTodos();
  const produtosEnsaios = Array.from(
    catalogoProdutos.getElementsByClassName("ensaio")
  );
  for (const produto of produtosEnsaios) {
    produto.classList.add("hidden");
  }
}

export function inicializarFiltros() {
  document
    .getElementById("exibir-todos")
    .addEventListener("click", exibirTodos);
  document
    .getElementById("exibir-poesia")
    .addEventListener("click", esconderEnsaios);
  document
    .getElementById("exibir-ensaio")
    .addEventListener("click", esconderPoesias);
}

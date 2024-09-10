function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value
  
    if (campoPesquisa == "") {
      section.innerHTML = "<p>Busca Vazia</p>"
      return
    }
  
    campoPesquisa = campoPesquisa.toLowerCase()
  
    let resultados = "";
    let titulo = "";
    let tags = "";
  
  
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      tags = dado.tags.toLowerCase()
  
      if (titulo.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
  
        resultados += `
          <div class="item-resultado">
                      <img src="${dado.imagem}" alt="${dado.titulo}" class="imagem-resultado">
                      <h2>
                          <a">${dado.titulo}</a>
                      </h2>
                      <p class="descricao-meta">${dado.descricao}</p>
                      <br>
                      <a href=${dado.link} target="_blank">Mais Informações</a>
                  </div>
          `;
      }
    }   
  
    if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>"
    }
  
    section.innerHTML = resultados
  }
  
  const campoPesquisaInput = document.getElementById("campo-pesquisa");
  
  campoPesquisaInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      pesquisar();
    }
  });
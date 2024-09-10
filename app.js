function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (campoPesquisa == "") {
      section.innerHTML = "<p>Busca Vazia</p>";
      return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  let resultados = "";
  let titulo = "";
  let tags = "";

  for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      tags = dado.tags.toLowerCase();

      if (titulo.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
            <img src="${dado.imagem}" alt="${dado.titulo}" class="imagem-resultado">
            <h2>
                <a>${dado.titulo}</a>
            </h2>
            <p class="descricao-meta" data-descricao-completa="${dado.descricao}">${dado.descricao.substring(0, 150)}...</p>
            <button class="leia-mais" onclick="expandirTexto(this)">Leia mais</button>
            <br>
            
        </div>
    `;
      }
  }

  if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>";
  }

  section.innerHTML = resultados;
}

function expandirTexto(element) {
  let texto = element.previousElementSibling;
  let descricaoCompleta = texto.getAttribute("data-descricao-completa");

  if (texto.style.maxHeight) {
      texto.style.maxHeight = null;
      element.textContent = "Leia mais";
  } else {
      texto.style.maxHeight = "300px";
      texto.textContent = descricaoCompleta;
      element.textContent = "Retrair";
  }
}

const campoPesquisaInput = document.getElementById("campo-pesquisa");

campoPesquisaInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      pesquisar();
  }
});

const mainElement = document.querySelector('main');
const viewportHeight = window.innerHeight;

mainElement.addEventListener('resize', () => {
    if (mainElement.scrollHeight > viewportHeight) {
        mainElement.classList.add('has-scrollbar');
    } else {
        mainElement.classList.remove('has-scrollbar');
    }
});
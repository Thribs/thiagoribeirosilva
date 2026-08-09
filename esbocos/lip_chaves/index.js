// verificar se

document
  .getElementById("seletorClienteChaveiro")
  .addEventListener("change", function () {
    const elementoCabecalho = document.querySelector("header")
    const elementosSecao = document.querySelectorAll("section")
    for (let i = 0; i < elementosSecao.length; i++) {
      const elemento = elementosSecao[i]
      const id = elemento.id
      if (id === "servicos" || id === "avaliacoes") {
        if (this.checked === true) {
          elemento.classList.add("oculto")
        }
        if (this.checked === false) {
          elemento.classList.remove("oculto")
        }
      }
    }
    if (this.checked === true) {
      document.querySelector("header").classList.add("oculto")
    }
    if (this.checked === false) {
      document.querySelector("header").classList.remove("oculto")
    }
  })

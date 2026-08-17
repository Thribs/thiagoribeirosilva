if (typeof document === "undefined") {
  throw new Error(
    "parâmetro document ausente. Verifique se o programa está sendo executado em navegador de Internet",
  )
}

document
  .getElementById("seletorClienteChaveiro")
  .addEventListener("change", function () {
    const elementosAlternaveis = []
    const elementosSecao = document.querySelectorAll("section")
    const elementosNavegacao = document.querySelectorAll("header nav a")
    elementosAlternaveis.push([...elementosSecao, ...elementosNavegacao])
    const elementosExclusivosClienteFinal = []
    const elementosExclusivosClienteChaveiro = []
    for (let i = 1; i <= elementosAlternaveis.length; i++) {
      const elemento = elementosAlternaveis[i - 1]
      const publicoAlvo = elemento.getAttribute("data-publico-alvo") ?? null
      if (publicoAlvo === null) {
        continue
      }
      if (publicoAlvo === "cliente final") {
        elementosExclusivosClienteFinal.push(elemento)
      }
      if (publicoAlvo === "chaveiro") {
        elementosExclusivosClienteChaveiro.push(elemento)
      }
    }
    for (let i = 1; i <= elementosExclusivosClienteFinal.length; i++) {
      const elemento = elementosExclusivosClienteFinal[i - 1]
      if (this.checked === true) {
        elemento.classList.remove("oculto")
      }
      if (this.checked === false) {
        elemento.classList.add("oculto")
      }
    }
    for (let i = 1; i <= elementosExclusivosClienteChaveiro.length; i++) {
      const elemento = elementosExclusivosClienteChaveiro[i - 1]
      if (this.checked === true) {
        elemento.classList.add("oculto")
      }
      if (this.checked === false) {
        elemento.classList.remove("oculto")
      }
    }
  })

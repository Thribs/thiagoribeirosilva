// Alterna o conteúdo do site entre "cliente final" e "chaveiro" conforme o switch.
// Cada <section> e link de navegação traz data-publico-alvo="cliente final" | "chaveiro"
// | null (o null aparece sempre). O checkbox "SOU CHAVEIRO" marcado = visitante é chaveiro.
if (typeof document === "undefined") {
  throw new Error(
    "parâmetro document ausente. Verifique se o programa está sendo executado em navegador de Internet",
  )
}

// mostra o público certo e esconde o outro (usa a classe .oculto do CSS)
function aplicarPublicoAlvo(ehChaveiro) {
  const alternaveis = [
    ...document.querySelectorAll("section[data-publico-alvo]"),
    ...document.querySelectorAll("header nav a[data-publico-alvo]"),
  ]
  for (const elemento of alternaveis) {
    const publicoAlvo = elemento.getAttribute("data-publico-alvo")
    if (publicoAlvo === "cliente final") {
      elemento.classList.toggle("oculto", ehChaveiro)
    }
    if (publicoAlvo === "chaveiro") {
      elemento.classList.toggle("oculto", !ehChaveiro)
    }
  }
}

const seletorClienteChaveiro = document.getElementById("seletorClienteChaveiro")

function aoTrocarPublico() {
  aplicarPublicoAlvo(seletorClienteChaveiro.checked)
}

seletorClienteChaveiro.addEventListener("change", aoTrocarPublico)

// estado inicial: cliente final (checkbox desmarcado por padrão)
aplicarPublicoAlvo(seletorClienteChaveiro.checked)

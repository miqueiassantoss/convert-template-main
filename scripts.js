//COTAÇÃO
const USD = 4.87
const EUR = 5.32 
const GBP = 6.08

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

amount.addEventListener("input", () => {
  const hasCaractersRegex = /\D+/g
  amount.value = amount.value.replace(hasCaractersRegex, "")
})

form.onsubmit = (event) => {
  event.preventDefault()

  switch(currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR": 
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break
  }
}

//FUNÇÃO PARA CONVERTER A MOEDA
function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    //calcula e exibe o total da conversã0
    let total = amount * price

    //só uma função pra ter certeza que o resultado é um número
    if (isNaN(total)) {
      return alert("Por favor, digite o valor corretamente para converter.")
    }

    total = formatCurrencyBRL(total). replace("R$", "")

    result.textContent = `${total} Reais`

    footer.classList.add("show-result")
  } catch (error) {
    //REMOVE  A CLASSE DO FOOTER OCULTANDO ELE.
    footer.classList.remove("show-result")
    console.log(error)
    alert("Não foi possível conevrter. Tente novamente mais tarde.")
  }
}

function formatCurrencyBRL(value,) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}


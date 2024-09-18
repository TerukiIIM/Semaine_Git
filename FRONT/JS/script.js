const fromCurrencySelect = document.getElementById("from_currency")
const toCurrencySelect = document.getElementById("to_currency")
const amountInput = document.getElementById("amount")
const rateInput = document.getElementById("exchange_rate")
const resultInput = document.getElementById("result")

// Fonction qui fait une conversion en temps réel
convertCurrency = async () => {
    const amount = amountInput.value
    const fromCurrency = fromCurrencySelect.value
    const toCurrency = toCurrencySelect.value
    const apiKey = "API_KEY" // Mettre l'API key

    if (amount === "" || isNaN(amount)) {
        resultInput.innerText = "Entrer un montant valide"
        return
    }

    try {
        const response = await fetch(
            `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`
        )
        const data = await response.json()

        if (response.ok) {
            const rate = data.conversion_rates[toCurrency]
            const result = amount * rate

            rateInput.value = `x ${rate.toFixed(2)}`
            resultInput.value = `${result.toFixed(2)} ${toCurrency}`
        } else {
            resultInput.value = "Erreur lors de la récupération des taux"
        }
    } catch (error) {
        resultInput.value = "Erreur réseau. Veuillez réessayer"
    }
}

convertCurrency()

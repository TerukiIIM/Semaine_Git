const apiKey = "API_KEY" // Mettre l'API key

const getCurrencies = async () => {
    return fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`).then(r => r.json())
}

const loadCurrencies = async () => {
    const res = await getCurrencies()
    const currenciesList = res.supported_codes
    return currenciesList
}

const createFormValues = (value) => {
    return `<option value="${value[0]}">${value[0]} | ${value[1]}</option>`
}

let currencies = loadCurrencies()

const fromCurrencyList = document.getElementById("from_currency")
const toCurrencyList = document.getElementById("to_currency")

currencies.then((currenciesList) => {
    currenciesList.forEach((currency) => {
        fromCurrencyList.innerHTML += createFormValues(currency)
        toCurrencyList.innerHTML += createFormValues(currency)
    })

    // Initialisation par défaut
    fromCurrencyList.value = "EUR"
    toCurrencyList.value = "USD"
})

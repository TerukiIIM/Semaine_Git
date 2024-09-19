const key = "API_KEY"; // Mettre l'API key

async function getCurrencies() {
  const response = await fetch(
    `https://v6.exchangerate-api.com/v6/${key}/codes`
  );

  return response.json();
}

async function loadCurrencies() {
  const res = await getCurrencies();
  const currenciesList = res.supported_codes;

  return currenciesList;
}

function createFormValues(value) {
  console.log(value);
  return `<option value="${value}">${value[0]} | ${value[1]}</option>`;
}

let currencies = loadCurrencies();

const toCurrencyList = document.getElementById("to-currency");
const fromCurrencyList = document.getElementById("from-currency");

currencies.then((currenciesList) => {
  console.log(currenciesList);
  currenciesList.forEach((currency) => {
    // console.log(currency);
    toCurrencyList.innerHTML += createFormValues(currency);
    fromCurrencyList.innerHTML += createFormValues(currency);
  });
});

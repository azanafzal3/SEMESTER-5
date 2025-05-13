const exchangeRates = {
    usd: { usd: 1, gbp: 0.49246, cad: 1.01941, eur: 0.70641, aud: 1.13262 },
    gbp: { usd: 2.03032, gbp: 1, cad: 2.00169, eur: 1.43448, aud: 2.29964 },
    cad: { usd: 0.98054, gbp: 0.50221, cad: 1, eur: 0.72037, aud: 1.15498 },
    eur: { usd: 1.41544, gbp: 0.69714, cad: 1.38814, eur: 1, aud: 1.60329 },
    aud: { usd: 0.88297, gbp: 0.43497, cad: 0.86613, eur: 0.62382, aud: 1 }
};

function convert(fromCurrency) {
    const amount = parseFloat(document.getElementById(fromCurrency).value);
    if (isNaN(amount)) return;

    for (let currency in exchangeRates[fromCurrency]) {
        if (currency !== fromCurrency) {
            document.getElementById(currency).value = (amount * exchangeRates[fromCurrency][currency]).toFixed(2);
        }
    }
}

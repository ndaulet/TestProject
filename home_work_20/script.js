const usd = document.getElementById('usd')
const select = document.getElementById('select')
const result = document.getElementById('result')

class Converter {
    constructor(amount, currency) {
        this.amount = amount
        this.currency = currency
    }
    setAmount(newAmount) {
        this.amount = newAmount
    }
    setCurrency(newCurrency) {
        this.currency = newCurrency
    }

    async convertUsd() {
        try {
            const response = await fetch('https://open.er-api.com/v6/latest/USD')
            const data = await response.json()
            result.innerText = (this.amount * data.rates[this.currency])
        }
        catch {
            alert('Error')
        }
    }
}
const converter = new Converter(0, select.value)

usd.addEventListener('keyup', () => {
    const amount = +usd.value
    const currency = select.value
    converter.setAmount(amount)
    converter.setCurrency(currency)
    converter.convertUsd()
})

select.addEventListener('change', () => {
    const amount = +usd.value
    const currency = select.value
    converter.setAmount(amount)
    converter.setCurrency(currency)
    converter.convertUsd()
})








const cardContainer = document.getElementById('cardsContainer')

 fetch('https://restcountries.com/v3.1/all?limit=100')
 .then(response => response.json())
 .then(countries => {
    let cardHtml = ``

    countries.forEach(country => {
        let o = ''
        const currencyArray = []
        if(country?.languages){
            o = Object.values(country.languages).join(', ')
        }
        if(country?.currencies){
            Object.values(country.currencies).forEach(value => {
            const name = value.name
            const symbol = value.symbol
            currencyArray.push(`${symbol} ${name}`)
        })
    }
        const currrency = currencyArray.join(', ')
        cardHtml += `
                   <div class="card" style="width: 18rem;">
                        <img src="${country.flags.png}" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">${country.name.official}</h5>
                            <p class="card-text">${country.region}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">👨‍👩‍👧‍👦${country.population}</li>
                            <li class="list-group-item">🗣️${o}</li>
                            <li class="list-group-item">💰${currrency}</li>
                        </ul>
                    </div>
        `
    })
    console.log(cardHtml)
    cardContainer.innerHTML = cardHtml
 })
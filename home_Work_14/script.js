const city = document.getElementById('city')
const time = document.getElementById('time')
const weather = document.getElementById('weather')
const temperature = document.getElementById('temperature')
const speed = document.getElementById('speed')
const cityNameInput = document.getElementById('cityNameInput')
const citySearchBtn = document.getElementById('citySearchBtn')
const iconImg = document.getElementById('iconImg')
const futureWeatherTemplate = document.getElementById('futureWeatherTemplate')
const forecast = document.getElementById('forecast')



citySearchBtn.addEventListener('click', () => {
    const cityName = cityNameInput.value
    fetchWeatherByCity(cityName)
})

function fetchWeatherByCity(cityName){
    forecast.innerHTML = ''
    const httpRequest = new XMLHttpRequest()
    httpRequest.open('GET', `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=a94d0a5ac08570add4b47b8da933f247`)
    httpRequest.send()
    httpRequest.onload = () => {
        const data = JSON.parse(httpRequest.response) 
        const status = httpRequest.status
        if(status === 200 && data){
            weather.innerText = data.list[0].weather[0].main
            temperature.innerText = Math.round(data.list[0].main.temp-273.15) + ' °С'
            speed.innerText = data.list[0].wind.speed + ' m/s'
            city.innerText = data?.city?.name
            time.innerText = getTimeByOffset(data.city.timezone)
            const img1 = data.list[0].weather[0].icon
            iconImg.src = `https://openweathermap.org/img/wn/${img1}@2x.png`

            const futureList = []
            for(let i = 0; i < 40; i+= 8){
                futureList.push(data.list[i])
            }
            futureList.forEach(element => {
                const futureWeatherTemplateClone = futureWeatherTemplate.content.cloneNode(true)
                const futureWeather = futureWeatherTemplateClone.getElementById('futureWeather')
                const futureWeatherDate = futureWeatherTemplateClone.getElementById('futureWeatherDate')
                const futureWeatherTime = futureWeatherTemplateClone.getElementById('futureWeatherTime')
                const futureWeatherIcon = futureWeatherTemplateClone.getElementById('futureWeatherIcon')
                const futureWeatherTemp = futureWeatherTemplateClone.getElementById('futureWeatherTemp')

                const date = element.dt_txt.split(' ')
                futureWeatherDate.innerText = date[0]
                futureWeatherTime.innerText = date[1]
                const img = element.weather[0].icon
                futureWeatherIcon.src = `https://openweathermap.org/img/wn/${img}@2x.png`
                futureWeatherTemp.innerText = Math.round(element.main.temp -273.15) + ' °C'

                forecast.appendChild(futureWeather)
            });
        }
        else{
            if(data?.message){
              alert(data.message)  
            }
            else{
                alert('Ошибка')
            }           
        }
    }
}

function getTimeByOffset(offsetInSeconds) {
    const now = new Date();
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
    const targetTime = new Date(utcTime + offsetInSeconds * 1000);
    return `${targetTime.getHours()}:${targetTime.getMinutes()}`;
}








const url = 'https://api.openweathermap.org/data/2.5/'
const key = 'dabbfe612115fc596a21e6147e861881'

const setQuerry = (e) => {
    if(e.keyCode == '13'){
        getResult(searchBar.value)
    }
}


const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerHTML = `${result.name} , ${result.sys.country}`
    
    let temp = document.querySelector('.temp')
    temp.innerHTML = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector('.desc')
    desc.innerHTML = result.weather[0].description

    let minmax = document.querySelector('.minmax')
    minmax.innerHTML = "En düşük Sıcaklık : " + `${Math.round(result.main.temp_min)}°C` + 
    "<br> En yüksek Sıcaklık : " + `${Math.round(result.main.temp_max)}°C`
    
}


const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuerry)
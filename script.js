
let apiQuery = function(city){
    let cityDiv = document.getElementById('city')
    let dateDiv = document.getElementById('date')
    let tempDiv = document.getElementById('temp')
    let weatherDiv = document.getElementById('weather')

    // let city = 'London'
    let locationz = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=ZaxWuZj2TFaUxJHfAAcCNcr11wqhJnAT&q=`+city+`&details=false`

    fetch(locationz, {mode: 'cors'})
    .then(function(response) {
    return response.json();
    })
    .then(function(response) {

    console.log(response[0].Key);
    let cityID = response[0].Key
    return cityID
    })
    .then(function(cityID){

        let forecast = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/`+ cityID +`?apikey=ZaxWuZj2TFaUxJHfAAcCNcr11wqhJnAT`       

        fetch(forecast)
        .then(function(response2){
            return (response2.json())
        })
        .then(function(response2){
            console.log(response2)
            console.log(response2.DailyForecasts)

            cityDiv.innerHTML = city
            dateDiv.innerHTML = (response2.DailyForecasts[0].Date)
            tempDiv.innerHTML = (response2.DailyForecasts[0].Day.IconPhrase)
            weatherDiv.innerHTML = (response2.DailyForecasts[0].Temperature.Maximum.Value)

            
        })
    })

}

let submit = document.getElementById('submit--input')
submit.addEventListener('click',function(e){
    e.preventDefault()
    let inputVal = document.getElementById("city--input").value
    apiQuery(inputVal)

})

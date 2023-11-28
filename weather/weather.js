
//const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fff63cae23msh5b9d66738e66ddbp146fd2jsne08780577083',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(Response => Response.json())
        .then(Response => {
            console.log(Response)

            cloud_pct.innerHTML = Response.cloud_pct
            feels_like.innerHTML = Response.feels_like
            humidity.innerHTML = Response.humidity
            max_temp.innerHTML = Response.max_temp
            min_temp.innerHTML = Response.min_temp
            sunrise.innerHTML = Response.sunrise
            sunset.innerHTML = Response.sunset
            temp.innerHTML = Response.temp
            wind_speed.innerHTML = Response.wind_speed
        })
        .catch(err => console.error(err));
}



submit.addEventListener("click", (e) => {
    e.preventDefault();

    getWeather(city.value);

});

getWeather("bangalore");
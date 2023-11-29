const apikey = "8efb7705537c9441e533528e3820f83d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")



async function checkWeather(city) {
    const encodedCity = encodeURIComponent(city);
    const response = await fetch(`${apiUrl}&q=${encodedCity}&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    } else { 
        
    const data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    const weatherCondition = data.weather[0].main.toLowerCase();

    switch (weatherCondition) {
        case "clouds":
            weatherIcon.src = "media/images/clouds.png";
            break;
        case "clear":
            weatherIcon.src = "media/images/clear.png";
            break;
        case "rain":
            weatherIcon.src = "media/images/rain.png";
            break;
        case "drizzle":
            weatherIcon.src = "media/images/drizzle.png";
            break;
        case "mist":
            weatherIcon.src = "media/images/mist.png";
            break;
        case "snow":
            weatherIcon.src = "media/images/snow.png";
            break;
        default:
            // Handle other weather conditions or provide a default image
            weatherIcon.src = "media/images/rain.png";
            break;
    }
    document.querySelector(".weather").style.display="block"
    document.querySelector(".error").style.display="none";

}
}
   
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

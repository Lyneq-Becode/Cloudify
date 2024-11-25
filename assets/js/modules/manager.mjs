import {getCityInformation} from "./weather.mjs";
import {kelvinToCelsius} from "./utils.mjs";
import {getCityPictures} from "./cityPicture.mjs";

const displayWeatherData = async (weatherData) => {

    const forecastContainer = document.getElementById("forecast-container");
    forecastContainer.innerHTML = '';
    const cityName = document.getElementById('city_search').value;

    document.getElementById("city-name").textContent = weatherData.city.name;
    document.getElementById("city-lat").textContent = weatherData.city.coord.lat;
    document.getElementById("city-lon").textContent = weatherData.city.coord.lon;

    // Populate Current Weather
    const currentWeather = weatherData.list[0];
    document.getElementById("current-temp").textContent = `🌡️ Temperature: ${Math.round(currentWeather.main.temp - 273.15)}°C`;
    document.getElementById("current-description").textContent = `📖 Description: ${currentWeather.weather[0].description}`;
    document.getElementById("current-humidity").textContent = `💧 Humidity: ${currentWeather.main.humidity}%`;
    document.getElementById("current-wind").textContent = `💨 Wind: ${currentWeather.wind.speed} km/h`;

    document.getElementById("current-pressure").textContent = `📊 Pressure: ${currentWeather.main.pressure} hPa`;
    document.getElementById("current-visibility").textContent = `👀 Visibility: ${currentWeather.visibility} Km`;
    document.getElementById("current-sunrise").textContent = `🌅 Sunrise: ${new Date(weatherData.city.sunrise * 1000).toLocaleTimeString()}`;
    document.getElementById("current-sunset").textContent = `🌇 Sunset: ${new Date(weatherData.city.sunset * 1000).toLocaleTimeString()}`;

    // Populate Forecast
    weatherData.list.forEach((forecast, index) => {
        if (index % 8 === 0) {
            const card = document.createElement("div");
            card.classList.add("forecast-card");
            card.innerHTML = `
                <p class="date">${forecast.dt_txt.split(" ")[0]}</p>
                <p>🌡️ ${kelvinToCelsius(forecast.main.temp)}°C</p>
                <p>📖 ${forecast.weather[0].description}</p>
            `;
            forecastContainer.appendChild(card);
        }
    });
}

const displayCityPictures = async (cityName) => {

    const picturesContainer = document.getElementById("city_picture");
    picturesContainer.innerHTML = '';

    const pictures = await getCityPictures(cityName);

    // console.log(pictures);
    pictures.results.forEach(picture => {
        const img = document.createElement("img");
        img.src = picture.urls.small;
        img.alt = picture.alt_description;
        img.classList.add("city-picture");
        picturesContainer.appendChild(img);
    });
}

export {displayWeatherData, displayCityPictures};
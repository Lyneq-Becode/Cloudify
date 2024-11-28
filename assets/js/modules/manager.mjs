import { temperatureGraph } from "./graph.mjs"
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
    document.getElementById("current-visibility").textContent = `👀 Visibility: ${(currentWeather.visibility / 1000).toFixed(2)} Km`;
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

    // display all graph
    temperatureGraph(weatherData.list);
}
const displayWeatherDataMirored = async (weatherData) => {

    const forecastContainer = document.getElementById("forecast-container2");
    forecastContainer.innerHTML = '';
    const cityName = document.getElementById('city_search').value;

    document.getElementById("city-name_mirror").textContent = weatherData.city.name;
document.getElementById("city-lat_mirror").textContent = weatherData.city.coord.lat;
document.getElementById("city-lon_mirror").textContent = weatherData.city.coord.lon;

// Populate Current Weather
const currentWeather = weatherData.list[0];
document.getElementById("current-temp_mirror").textContent = `🌡️ Temperature: ${Math.round(currentWeather.main.temp - 273.15)}°C`;
document.getElementById("current-description_mirror").textContent = `📖 Description: ${currentWeather.weather[0].description}`;
document.getElementById("current-humidity_mirror").textContent = `💧 Humidity: ${currentWeather.main.humidity}%`;
document.getElementById("current-wind_mirror").textContent = `💨 Wind: ${currentWeather.wind.speed} km/h`;

document.getElementById("current-pressure_mirror").textContent = `📊 Pressure: ${currentWeather.main.pressure} hPa`;
document.getElementById("current-visibility_mirror").textContent = `👀 Visibility: ${(currentWeather.visibility / 1000).toFixed(2)} Km`;
document.getElementById("current-sunrise_mirror").textContent = `🌅 Sunrise: ${new Date(weatherData.city.sunrise * 1000).toLocaleTimeString()}`;
document.getElementById("current-sunset_mirror").textContent = `🌇 Sunset: ${new Date(weatherData.city.sunset * 1000).toLocaleTimeString()}`;

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

    // display all graph
    temperatureGraph(weatherData.list);
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
const displayCityPicturesMirored = async (cityName) => {

        const picturesContainer = document.getElementById("city_picture_mirror");
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

export {displayWeatherData, displayCityPictures, displayWeatherDataMirored, displayCityPicturesMirored};
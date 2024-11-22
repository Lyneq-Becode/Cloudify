import {toggleDarkTheme} from "./modules/theme.mjs";
import {getCitiesList, getCityInformation} from "./modules/weather.mjs";
import {kelvinToCelsius} from "./modules/utils.mjs";
import FakeData from "./modules/fakeData.mjs";

// toggle dark Theme
toggleDarkTheme();

// response to the form submission
const formInput = document.getElementById('city_search');
const dataListElement = document.getElementById('cities_list');


//when form is updated get the value of the input and write the data-list in consequence
formInput.addEventListener('input', async (event) => {
    event.preventDefault();

    const cityName = document.getElementById('city_search').value;
    const citiesStartWith = await getCitiesList(cityName);
    //update the datalist with the cities
    if (citiesStartWith === false) return;
    dataListElement.innerHTML = '';
    citiesStartWith.forEach(city => {
        const option = document.createElement('option');
        option.value = city.name;
        dataListElement.appendChild(option);
    });

});
const submitButton = document.getElementById('search_button');


// when the form is submitted, get the city information
submitButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const forecastContainer = document.getElementById("forecast-container");
    forecastContainer.innerHTML = '';
    const cityName = document.getElementById('city_search').value;
    const weatherData = await getCityInformation(cityName);

    console.log(weatherData)

    document.getElementById("city-name").textContent = weatherData.city.name;
    document.getElementById("city-lat").textContent = weatherData.city.coord.lat;
    document.getElementById("city-lon").textContent = weatherData.city.coord.lon;

    // Populate Current Weather
    const currentWeather = weatherData.list[0];
    document.getElementById("current-temp").textContent = `Temperature: ${Math.round(currentWeather.main.temp - 273.15)}°C`;
    document.getElementById("current-description").textContent = `Description: ${currentWeather.weather[0].description}`;
    document.getElementById("current-humidity").textContent = `Humidity: ${currentWeather.main.humidity}%`;
    document.getElementById("current-wind").textContent = `Wind: ${currentWeather.wind.speed} km/h`;

    // Populate Forecast
    weatherData.list.forEach((forecast, index) => {
        if (index % 8 === 0) {
            const card = document.createElement("div");
            card.classList.add("forecast-card");
            console.log(forecast);
            card.innerHTML = `
                <p class="date">${forecast.dt_txt.split(" ")[0]}</p>
                <p>🌡️ ${kelvinToCelsius(forecast.main.temp)}°C</p>
                <p>📖 ${forecast.weather[0].description}</p>
            `;
            forecastContainer.appendChild(card);
        }
    });
})


FakeData()

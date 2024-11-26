import {initFirstTheme, toggleDarkTheme} from "./modules/theme.mjs";
import {getCityInformation} from "./modules/weather.mjs";
import {findCityNameByName} from "./modules/cityName.mjs";
import {displayWeatherData, displayCityPictures} from "./modules/manager.mjs";
import FakeData from "./modules/fakeData.mjs"; // This function must be used only for testing purposes


// toggle dark Theme
initFirstTheme()
toggleDarkTheme();

// get HTML elements that will be used later
const formInput = document.getElementById('city_search');
const dataListElement = document.getElementById('cities_list');


//when form is updated get the value of the input and write the data-list in consequence
formInput.addEventListener('input', async (event) => {
    event.preventDefault();

    const cityName = document.getElementById('city_search').value;
    const citiesStartWith = await findCityNameByName(cityName);

    //update the datalist with the cities
    if (citiesStartWith === false) return;
    dataListElement.innerHTML = '';
    citiesStartWith.geonames.forEach(city => {
        const option = document.createElement('option');
        option.value = city.name;
        dataListElement.appendChild(option);
    });

});
const submitButton = document.getElementById('search_button');
// when the form is submitted, get the city information
submitButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const cityName = document.getElementById('city_search').value;
    const cityInfo = await getCityInformation(cityName);
    if (cityInfo === false) return;
    await displayWeatherData(cityInfo);
    //display the city pictures
    await displayCityPictures(cityName)
})


await FakeData();
// testGraph();
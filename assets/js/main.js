import {initFirstTheme, toggleDarkTheme} from "./modules/theme.mjs";
import {getCityInformation} from "./modules/weather.mjs";
import {findCityNameByName} from "./modules/cityName.mjs";
import {displayWeatherData, displayCityPictures} from "./modules/manager.mjs";
import {setLocalStorage, getLocalStorage, findSimilarKeysInLocalStorage, clearCitiesInLocalStorage} from "./modules/localStorage.mjs";
import {sendMessageToUser} from "./modules/messageUser.mjs";
import {initCompare} from "./modules/compare.mjs";
import FakeData from "./modules/fakeData.mjs"; // This function must be used only for testing purposes


// toggle dark Theme
initFirstTheme()
toggleDarkTheme();

// get HTML elements that will be used later
const formInput = document.getElementById('city_search');
const dataListElement = document.getElementById('cities_list');
const saveCityButton = document.getElementById('save_city');
const clearCityButton = document.getElementById('clear_city');

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
        option.value = city.name + ', ' + city.countryName;
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
});


// when saved cities button is clicked, set the city name and lat & long in the localstorage
saveCityButton.addEventListener('click', async (event) => {
    const cityInputValue = document.getElementById('city_search').value;
    event.preventDefault();

    if( cityInputValue === '' ) return;
    const status = setLocalStorage('city', document.getElementById('city_search').value);

    if (status === false) return sendMessageToUser('City already saved', 'warning');
    else return sendMessageToUser('City saved', 'success');

});
// when clear cities button is clicked, clear the localstorage
clearCityButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const status = clearCitiesInLocalStorage();
    if (status === false) return sendMessageToUser('Error clearing cities', 'error');
    else return sendMessageToUser('Cities cleared', 'success');
});
// prepare the compare select elements
initCompare();

// await FakeData();

findSimilarKeysInLocalStorage('city');
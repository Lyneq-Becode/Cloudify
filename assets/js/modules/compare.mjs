import {getAllKeysThatStartWith, getLocalStorage, findSimilarKeysInLocalStorage} from "./localStorage.mjs";
import {getCityInformation} from "./weather.mjs";
import { temperatureGraph, temperatureGraphMirror} from "./graph.mjs";
import {
    displayCityPictures,
    displayCityPicturesMirored,
    displayWeatherData,
    displayWeatherDataMirored
} from "./manager.mjs";

const initCompare = () => {
    const selectLeft = document.querySelector('#city_select-left');
    const selectRight = document.querySelector('#city_select-right');

    const CityList = getAllKeysThatStartWith('city');
    if (CityList.length <= 1) {
        selectLeft.style.display = 'none';
        selectRight.style.display = 'none';
    }

    console.log(CityList)
    CityList.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.classList.add('city-option');
        option.innerText = getLocalStorage(city);
        selectLeft.appendChild(option);
        selectRight.appendChild(option.cloneNode(true));
    });

    selectLeft.addEventListener('change', async (event) => {
       const cityName = getLocalStorage(event.target.value);
        await updateWeatherData(cityName, false);
    });

    selectRight.addEventListener('change', async (event) => {
        const cityName = getLocalStorage(event.target.value);
        await updateWeatherData(cityName, true);
    });
}

const updateWeatherData = async (city, mirrored) => {
    console.log(city)
    const cityInfo = await getCityInformation(city);
    console.log(cityInfo)
    if (cityInfo === false || !cityInfo) return;
    if (mirrored) {
        await displayWeatherDataMirored(cityInfo);
        await displayCityPicturesMirored(city)
        await temperatureGraphMirror(cityInfo.list);
    } else {
        await displayWeatherData(cityInfo);
        await displayCityPictures(city)
        await temperatureGraph(cityInfo.list);
    }

}

export {
    initCompare
}
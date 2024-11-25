import config from '../config.js';

const superSecureApiKey = config.openWeather.apiKey;


const getCitiesList = async (city) => {
    try {
        if (city.length < 3 || city === '') return false;
        const apiRoute = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=${superSecureApiKey}`
        const response = await fetch(apiRoute);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

const getCityLongitudeLatitude = async (city) => {
    try {
        if (city === '') return false;
        const apiRoute = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${superSecureApiKey}`;
        const response = await fetch(apiRoute);
        return response.json();
    } catch (e) {
        console.error('Error:', e);
    }
}

const getCityInformation = async (cityName) => {
    try {
        if (!cityName) return false;
        const geoLoc = await getCityLongitudeLatitude(cityName);
        const latitude = geoLoc[0].lat;
        const longitude = geoLoc[0].lon;
        const apiRoute = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${superSecureApiKey}`;
        const response = await fetch(apiRoute);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}


export {getCitiesList, getCityInformation};
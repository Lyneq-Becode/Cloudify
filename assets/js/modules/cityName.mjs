import config from "../config.js";

const findCityNameByName = (name) => {
    try {
        return fetch(`http://api.geonames.org/searchJSON?name_startsWith=${name}&featureClass=P&maxRows=10&username=${config.geoNames.username}`)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    return false;
                }
                return data;
            });
    } catch (error) {
        console.error(error);
        return false;
    }
}

export {findCityNameByName};
const findSimilarKeysInLocalStorage = (startKey) => {

    for (const obj in localStorage) {
        if (obj.startsWith(startKey)) {
            console.log(obj);
        }
    }
}

const setLocalStorage = (key, value) => {
    try {
        if (localStorage.getItem(key) !== null) {
            let cityKeyCount = 0;
            // check every key
            for (const obj in localStorage) {
                if (obj.startsWith(key)) {
                    cityKeyCount++;
                    //check duplicate key and stop execution if found
                    if ( getLocalStorage(obj) === value ) {
                        return false;
                    }
                }
            }
            return editLocalStorage(`city_${cityKeyCount++}`, value);
        } else {
            const newKey = `${key}_0`;
            return localStorage.setItem(key, btoa(value));
        }
    } catch (e) {
        console.error('Error saving to localStorage', e);
        return false;
    }
}

const editLocalStorage = (key, value) => {
    try {
        return localStorage.setItem(key, btoa(value));
    } catch (e) {
        console.error('Error editing localStorage', e);
        return false;
    }
}

const getLocalStorage = (key) => {
    try {
        return localStorage.getItem(key) ? atob(localStorage.getItem(key)) : false;
    } catch (e) {
        console.error('Error recovering localStorage', e);
        return false;
    }
}

const getAllKeysThatStartWith = (startKey) => {
    const keys = [];
    for (const obj in localStorage) {
        if (obj.startsWith(startKey)) {
            keys.push(obj);
        }
    }
    return keys;
}

const clearCitiesInLocalStorage = () => {
    for (const obj in localStorage) {
        if (obj.startsWith('city')) {
            localStorage.removeItem(obj);
        }
    }
    return true;
}

export {setLocalStorage, getLocalStorage, findSimilarKeysInLocalStorage, clearCitiesInLocalStorage, getAllKeysThatStartWith};
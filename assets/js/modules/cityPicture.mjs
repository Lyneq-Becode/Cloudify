import config from "../config.js";

const getCityPictures = async (city) => {
    try {
        const apiRoute = `https://api.unsplash.com/search/photos?query=city%20of%20${city}&per_page=4`;
        const response = await fetch(apiRoute, {
            headers: {
                Authorization: `Client-ID ${config.unsplash.AccessKey}`,
            },
        });
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};

export {getCityPictures};
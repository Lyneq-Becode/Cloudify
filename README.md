# Cloudify 🌦️

This is a simple weather app that uses the OpenWeatherMap API to get the current weather for a given city.
additionally, it uses the Unsplash API to get a picture of the city you entered.
Written in vanilla JavaScript, HTML and CSS, you can view the weather for the next 5 days in the city of your choice.

# Features

- View the weather for the next 5 days in the city of your choice
- View pictures of the city you entered
- Get a graph of the temperature over the next 5 days

# How to use

1. Clone the repository
2. Create the file `config.js` in `/assets/js` and add the following code:

```javascript
export default {
    "openWeather": {
        "apiKey": "MyApiKey"
    },
    "unsplash": {
        "appID": "MyUnsplashAppID",
        "AccessKey": "MyUnsplashAccessKey",
        "secretKey": "MyUnsplashSecretKey"
    },
    "geoNames": {
        "username": "MyGeoNamesUsername"
    }
}
```

3. replace all fields with your own API keys
4. Open the `index.html` file in your browser
5. Have fun 😁!
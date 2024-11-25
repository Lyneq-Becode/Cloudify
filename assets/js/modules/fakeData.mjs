import {displayWeatherData} from "./manager.mjs";

/**
 * function to init a fake data
 */
const createFakeData = () => {

    const weatherData = {
        "cod": "200",
        "message": 0,
        "cnt": 40,
        "list": [
            {
                "dt": 1732298400,
                "main": {
                    "temp": 279.12,
                    "feels_like": 276.48,
                    "temp_min": 277.66,
                    "temp_max": 279.12,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1008,
                    "humidity": 71,
                    "temp_kf": 1.46
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 13
                },
                "wind": {
                    "speed": 3.52,
                    "deg": 269,
                    "gust": 9.68
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-11-22 18:00:00"
            },
            {
                "dt": 1732309200,
                "main": {
                    "temp": 277.76,
                    "feels_like": 275.45,
                    "temp_min": 276.72,
                    "temp_max": 277.76,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 1010,
                    "humidity": 71,
                    "temp_kf": 1.04
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 54
                },
                "wind": {
                    "speed": 2.66,
                    "deg": 243,
                    "gust": 7.64
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-11-22 21:00:00"
            },
            {
                "dt": 1732320000,
                "main": {
                    "temp": 276.5,
                    "feels_like": 274.94,
                    "temp_min": 276.5,
                    "temp_max": 276.5,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 1010,
                    "humidity": 67,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 88
                },
                "wind": {
                    "speed": 1.71,
                    "deg": 200,
                    "gust": 4.94
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-11-23 00:00:00"
            },
            {
                "dt": 1732330800,
                "main": {
                    "temp": 277.06,
                    "feels_like": 275.94,
                    "temp_min": 277.06,
                    "temp_max": 277.06,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 1009,
                    "humidity": 60,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.44,
                    "deg": 141,
                    "gust": 3.19
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-11-23 03:00:00"
            },
            {
                "dt": 1732341600,
                "main": {
                    "temp": 277.55,
                    "feels_like": 274.38,
                    "temp_min": 277.55,
                    "temp_max": 277.55,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1006,
                    "humidity": 87,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 3.82,
                    "deg": 138,
                    "gust": 10.13
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 0.73
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-11-23 06:00:00"
            },
            {
                "dt": 1732352400,
                "main": {
                    "temp": 280.8,
                    "feels_like": 276.81,
                    "temp_min": 280.8,
                    "temp_max": 280.8,
                    "pressure": 1007,
                    "sea_level": 1007,
                    "grnd_level": 1003,
                    "humidity": 88,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 7.84,
                    "deg": 173,
                    "gust": 16.13
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 0.39
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-11-23 09:00:00"
            },
            {
                "dt": 1732363200,
                "main": {
                    "temp": 282.61,
                    "feels_like": 278.99,
                    "temp_min": 282.61,
                    "temp_max": 282.61,
                    "pressure": 1003,
                    "sea_level": 1003,
                    "grnd_level": 999,
                    "humidity": 89,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 8.51,
                    "deg": 192,
                    "gust": 19.78
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 1.63
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-11-23 12:00:00"
            },
            {
                "dt": 1732374000,
                "main": {
                    "temp": 283.66,
                    "feels_like": 283.12,
                    "temp_min": 283.66,
                    "temp_max": 283.66,
                    "pressure": 1000,
                    "sea_level": 1000,
                    "grnd_level": 996,
                    "humidity": 90,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 9.21,
                    "deg": 196,
                    "gust": 22.61
                },
                "visibility": 8809,
                "pop": 1,
                "rain": {
                    "3h": 1.13
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-11-23 15:00:00"
            },
            {
                "dt": 1732384800,
                "main": {
                    "temp": 285.82,
                    "feels_like": 285.52,
                    "temp_min": 285.82,
                    "temp_max": 285.82,
                    "pressure": 999,
                    "sea_level": 999,
                    "grnd_level": 995,
                    "humidity": 91,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 8.98,
                    "deg": 206,
                    "gust": 21.04
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 2.19
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-11-23 18:00:00"
            },
            {
                "dt": 1732395600,
                "main": {
                    "temp": 286.13,
                    "feels_like": 285.78,
                    "temp_min": 286.13,
                    "temp_max": 286.13,
                    "pressure": 999,
                    "sea_level": 999,
                    "grnd_level": 995,
                    "humidity": 88,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 9.41,
                    "deg": 205,
                    "gust": 21.12
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 2.01
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-11-23 21:00:00"
            },
            {
                "dt": 1732406400,
                "main": {
                    "temp": 287.25,
                    "feels_like": 286.96,
                    "temp_min": 287.25,
                    "temp_max": 287.25,
                    "pressure": 999,
                    "sea_level": 999,
                    "grnd_level": 995,
                    "humidity": 86,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 9.72,
                    "deg": 207,
                    "gust": 22.04
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 2.51
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-11-24 00:00:00"
            },
            {
                "dt": 1732417200,
                "main": {
                    "temp": 288.14,
                    "feels_like": 287.81,
                    "temp_min": 288.14,
                    "temp_max": 288.14,
                    "pressure": 998,
                    "sea_level": 998,
                    "grnd_level": 994,
                    "humidity": 81,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 10.29,
                    "deg": 210,
                    "gust": 22.88
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 1.72
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-11-24 03:00:00"
            },
            {
                "dt": 1732428000,
                "main": {
                    "temp": 287.75,
                    "feels_like": 287.38,
                    "temp_min": 287.75,
                    "temp_max": 287.75,
                    "pressure": 998,
                    "sea_level": 998,
                    "grnd_level": 994,
                    "humidity": 81,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 9.82,
                    "deg": 200,
                    "gust": 21.68
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 0.18
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-11-24 06:00:00"
            },
            {
                "dt": 1732438800,
                "main": {
                    "temp": 287.65,
                    "feels_like": 287.11,
                    "temp_min": 287.65,
                    "temp_max": 287.65,
                    "pressure": 998,
                    "sea_level": 998,
                    "grnd_level": 994,
                    "humidity": 75,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 9.84,
                    "deg": 194,
                    "gust": 23.52
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-11-24 09:00:00"
            },
            {
                "dt": 1732449600,
                "main": {
                    "temp": 288.9,
                    "feels_like": 288.28,
                    "temp_min": 288.9,
                    "temp_max": 288.9,
                    "pressure": 997,
                    "sea_level": 997,
                    "grnd_level": 993,
                    "humidity": 67,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 98
                },
                "wind": {
                    "speed": 10.5,
                    "deg": 198,
                    "gust": 24.94
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-11-24 12:00:00"
            },
            {
                "dt": 1732460400,
                "main": {
                    "temp": 289.1,
                    "feels_like": 288.47,
                    "temp_min": 289.1,
                    "temp_max": 289.1,
                    "pressure": 996,
                    "sea_level": 996,
                    "grnd_level": 992,
                    "humidity": 66,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 10.55,
                    "deg": 195,
                    "gust": 27.62
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-11-24 15:00:00"
            },
            {
                "dt": 1732471200,
                "main": {
                    "temp": 288.94,
                    "feels_like": 288.43,
                    "temp_min": 288.94,
                    "temp_max": 288.94,
                    "pressure": 996,
                    "sea_level": 996,
                    "grnd_level": 992,
                    "humidity": 71,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 10.86,
                    "deg": 198,
                    "gust": 26.01
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-11-24 18:00:00"
            },
            {
                "dt": 1732482000,
                "main": {
                    "temp": 287.11,
                    "feels_like": 286.89,
                    "temp_min": 287.11,
                    "temp_max": 287.11,
                    "pressure": 996,
                    "sea_level": 996,
                    "grnd_level": 992,
                    "humidity": 89,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 7.61,
                    "deg": 214,
                    "gust": 15.27
                },
                "visibility": 6930,
                "pop": 1,
                "rain": {
                    "3h": 3.97
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-11-24 21:00:00"
            },
            {
                "dt": 1732492800,
                "main": {
                    "temp": 285.01,
                    "feels_like": 284.37,
                    "temp_min": 285.01,
                    "temp_max": 285.01,
                    "pressure": 998,
                    "sea_level": 998,
                    "grnd_level": 993,
                    "humidity": 81,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 4.88,
                    "deg": 228,
                    "gust": 11.99
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 1.81
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-11-25 00:00:00"
            },
            {
                "dt": 1732503600,
                "main": {
                    "temp": 284.8,
                    "feels_like": 283.93,
                    "temp_min": 284.8,
                    "temp_max": 284.8,
                    "pressure": 998,
                    "sea_level": 998,
                    "grnd_level": 994,
                    "humidity": 73,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 5.57,
                    "deg": 226,
                    "gust": 14.39
                },
                "visibility": 10000,
                "pop": 0.39,
                "rain": {
                    "3h": 0.1
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-11-25 03:00:00"
            },
            {
                "dt": 1732514400,
                "main": {
                    "temp": 283.95,
                    "feels_like": 282.97,
                    "temp_min": 283.95,
                    "temp_max": 283.95,
                    "pressure": 998,
                    "sea_level": 998,
                    "grnd_level": 994,
                    "humidity": 72,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 5.89,
                    "deg": 229,
                    "gust": 13.2
                },
                "visibility": 10000,
                "pop": 0.06,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-11-25 06:00:00"
            },
            {
                "dt": 1732525200,
                "main": {
                    "temp": 283.25,
                    "feels_like": 282.01,
                    "temp_min": 283.25,
                    "temp_max": 283.25,
                    "pressure": 1002,
                    "sea_level": 1002,
                    "grnd_level": 997,
                    "humidity": 65,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 6.58,
                    "deg": 235,
                    "gust": 14.94
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-11-25 09:00:00"
            },
            {
                "dt": 1732536000,
                "main": {
                    "temp": 284.39,
                    "feels_like": 282.95,
                    "temp_min": 284.39,
                    "temp_max": 284.39,
                    "pressure": 1003,
                    "sea_level": 1003,
                    "grnd_level": 999,
                    "humidity": 53,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 50
                },
                "wind": {
                    "speed": 7.39,
                    "deg": 234,
                    "gust": 18.07
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-11-25 12:00:00"
            },
            {
                "dt": 1732546800,
                "main": {
                    "temp": 283.91,
                    "feels_like": 282.5,
                    "temp_min": 283.91,
                    "temp_max": 283.91,
                    "pressure": 1004,
                    "sea_level": 1004,
                    "grnd_level": 1000,
                    "humidity": 56,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 4
                },
                "wind": {
                    "speed": 7.55,
                    "deg": 233,
                    "gust": 16.69
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-11-25 15:00:00"
            },
            {
                "dt": 1732557600,
                "main": {
                    "temp": 282.67,
                    "feels_like": 279.5,
                    "temp_min": 282.67,
                    "temp_max": 282.67,
                    "pressure": 1007,
                    "sea_level": 1007,
                    "grnd_level": 1002,
                    "humidity": 63,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 3
                },
                "wind": {
                    "speed": 6.89,
                    "deg": 229,
                    "gust": 14.82
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-11-25 18:00:00"
            },
            {
                "dt": 1732568400,
                "main": {
                    "temp": 282.16,
                    "feels_like": 278.89,
                    "temp_min": 282.16,
                    "temp_max": 282.16,
                    "pressure": 1008,
                    "sea_level": 1008,
                    "grnd_level": 1004,
                    "humidity": 66,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 4
                },
                "wind": {
                    "speed": 6.77,
                    "deg": 229,
                    "gust": 14.07
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-11-25 21:00:00"
            },
            {
                "dt": 1732579200,
                "main": {
                    "temp": 281.75,
                    "feels_like": 278.79,
                    "temp_min": 281.75,
                    "temp_max": 281.75,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 1005,
                    "humidity": 70,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 7
                },
                "wind": {
                    "speed": 5.52,
                    "deg": 232,
                    "gust": 12.01
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-11-26 00:00:00"
            },
            {
                "dt": 1732590000,
                "main": {
                    "temp": 281.25,
                    "feels_like": 278.34,
                    "temp_min": 281.25,
                    "temp_max": 281.25,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1007,
                    "humidity": 73,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 11
                },
                "wind": {
                    "speed": 5.06,
                    "deg": 235,
                    "gust": 12.21
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-11-26 03:00:00"
            },
            {
                "dt": 1732600800,
                "main": {
                    "temp": 280.75,
                    "feels_like": 278.08,
                    "temp_min": 280.75,
                    "temp_max": 280.75,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 1008,
                    "humidity": 76,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 9
                },
                "wind": {
                    "speed": 4.24,
                    "deg": 234,
                    "gust": 11.7
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-11-26 06:00:00"
            },
            {
                "dt": 1732611600,
                "main": {
                    "temp": 281,
                    "feels_like": 278.6,
                    "temp_min": 281,
                    "temp_max": 281,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 1010,
                    "humidity": 71,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 9
                },
                "wind": {
                    "speed": 3.83,
                    "deg": 228,
                    "gust": 11.02
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-11-26 09:00:00"
            },
            {
                "dt": 1732622400,
                "main": {
                    "temp": 283.61,
                    "feels_like": 282.3,
                    "temp_min": 283.61,
                    "temp_max": 283.61,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 1011,
                    "humidity": 61,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 46
                },
                "wind": {
                    "speed": 4.33,
                    "deg": 235,
                    "gust": 9.1
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-11-26 12:00:00"
            },
            {
                "dt": 1732633200,
                "main": {
                    "temp": 283.47,
                    "feels_like": 282.36,
                    "temp_min": 283.47,
                    "temp_max": 283.47,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 1011,
                    "humidity": 69,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 94
                },
                "wind": {
                    "speed": 2.96,
                    "deg": 213,
                    "gust": 7.94
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-11-26 15:00:00"
            },
            {
                "dt": 1732644000,
                "main": {
                    "temp": 282.87,
                    "feels_like": 281.28,
                    "temp_min": 282.87,
                    "temp_max": 282.87,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 1010,
                    "humidity": 74,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 97
                },
                "wind": {
                    "speed": 3.08,
                    "deg": 173,
                    "gust": 9.71
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-11-26 18:00:00"
            },
            {
                "dt": 1732654800,
                "main": {
                    "temp": 283.62,
                    "feels_like": 282.79,
                    "temp_min": 283.62,
                    "temp_max": 283.62,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 1009,
                    "humidity": 79,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 5.14,
                    "deg": 167,
                    "gust": 11.02
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-11-26 21:00:00"
            },
            {
                "dt": 1732665600,
                "main": {
                    "temp": 284.35,
                    "feels_like": 283.72,
                    "temp_min": 284.35,
                    "temp_max": 284.35,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 1006,
                    "humidity": 84,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 6.91,
                    "deg": 175,
                    "gust": 14.35
                },
                "visibility": 10000,
                "pop": 0.21,
                "rain": {
                    "3h": 0.2
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-11-27 00:00:00"
            },
            {
                "dt": 1732676400,
                "main": {
                    "temp": 284.14,
                    "feels_like": 283.57,
                    "temp_min": 284.14,
                    "temp_max": 284.14,
                    "pressure": 1006,
                    "sea_level": 1006,
                    "grnd_level": 1002,
                    "humidity": 87,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 8.08,
                    "deg": 174,
                    "gust": 17.05
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 2.01
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-11-27 03:00:00"
            },
            {
                "dt": 1732687200,
                "main": {
                    "temp": 284.53,
                    "feels_like": 283.73,
                    "temp_min": 284.53,
                    "temp_max": 284.53,
                    "pressure": 1005,
                    "sea_level": 1005,
                    "grnd_level": 1000,
                    "humidity": 77,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 7.42,
                    "deg": 227,
                    "gust": 15.69
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 0.58
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-11-27 06:00:00"
            },
            {
                "dt": 1732698000,
                "main": {
                    "temp": 282.62,
                    "feels_like": 279.19,
                    "temp_min": 282.62,
                    "temp_max": 282.62,
                    "pressure": 1007,
                    "sea_level": 1007,
                    "grnd_level": 1003,
                    "humidity": 65,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 7.78,
                    "deg": 239,
                    "gust": 14.26
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-11-27 09:00:00"
            },
            {
                "dt": 1732708800,
                "main": {
                    "temp": 283.73,
                    "feels_like": 282.44,
                    "temp_min": 283.73,
                    "temp_max": 283.73,
                    "pressure": 1007,
                    "sea_level": 1007,
                    "grnd_level": 1003,
                    "humidity": 61,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 67
                },
                "wind": {
                    "speed": 7.77,
                    "deg": 227,
                    "gust": 16.03
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-11-27 12:00:00"
            },
            {
                "dt": 1732719600,
                "main": {
                    "temp": 283.8,
                    "feels_like": 282.62,
                    "temp_min": 283.8,
                    "temp_max": 283.8,
                    "pressure": 1007,
                    "sea_level": 1007,
                    "grnd_level": 1003,
                    "humidity": 65,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 76
                },
                "wind": {
                    "speed": 8.2,
                    "deg": 228,
                    "gust": 17.39
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-11-27 15:00:00"
            }
        ],
        "city": {
            "id": 2643743,
            "name": "London",
            "coord": {
                "lat": 51.5073,
                "lon": -0.1276
            },
            "country": "GB",
            "population": 1000000,
            "timezone": 0,
            "sunrise": 1732260655,
            "sunset": 1732291374
        }
    };
    return displayWeatherData(weatherData)


}

export default createFakeData;
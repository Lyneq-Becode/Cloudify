const kelvinToCelsius = (kelvin) => {
    const convertedKelvinToCelsius = kelvin - 273.15
    const parseTemperature = convertedKelvinToCelsius.toString().replace(/[^0-9.]/g, '')
    return parseFloat(parseTemperature).toFixed(1);
}

export {kelvinToCelsius};
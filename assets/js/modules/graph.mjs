import {kelvinToCelsius} from "./utils.mjs";

let displyedGraph = null;

const destroyGraph = () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    displyedGraph?.destroy();
}

const temperatureGraph = (rowData) => {

    destroyGraph();
    const dataToFilter = rowData.filter((_, index) => index % 7 === 0).map(d => parseFloat(kelvinToCelsius(d.main.temp)));

    const ctx = document.getElementById('canvas').getContext('2d');
    const data = {
        labels: rowData.map(d => d.dt_txt.split(" ")[0]).slice(0, 7),
        datasets: [{
            label: 'Temperature',
            data: dataToFilter,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    displyedGraph = new Chart(ctx, {
        type: 'line',
        data
    });

    return displyedGraph;
}

export {
    temperatureGraph
}
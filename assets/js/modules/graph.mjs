import {kelvinToCelsius} from "./utils.mjs";

let displayedGraph = null;
let displayedGraphMirror = null;

const destroyGraph = () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    displayedGraph?.destroy();
}

const destroyGraphMirror = () => {
    const canvas = document.getElementById('canvas_mirror');
    const ctx = canvas.getContext('2d');
    displayedGraphMirror?.destroy();
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

    displayedGraph = new Chart(ctx, {
        type: 'line',
        data
    });

    return displayedGraph;
}

const temperatureGraphMirror = (rowData) => {

        destroyGraphMirror();
        const dataToFilter = rowData.filter((_, index) => index % 7 === 0).map(d => parseFloat(kelvinToCelsius(d.main.temp)));

        const ctx = document.getElementById('canvas_mirror').getContext('2d');
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

        displayedGraphMirror = new Chart(ctx, {
            type: 'line',
            data
        });

        return displayedGraphMirror;
}

export {
    temperatureGraph,
    temperatureGraphMirror
}
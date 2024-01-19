import * as chartJs from "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js";

export let chartCreator = (info, i) => {
    const canvas = document.querySelector(`.canvas${i}`);

    let myChart = new Chart(canvas, {
        type: 'bar',
        data: {
        labels: ['Today', 'Tomorrow', 'After Tomorrow', 'After After Tomorrow', 'After After After Tomorrow', 'After After After After Tomorrow'],
            datasets: [{
                label: 'Days',
                data: [Math.round(info.list[0].main.temp - 273.15), 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
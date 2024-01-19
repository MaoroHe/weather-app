import * as chartJs from "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js";
import { dayCreator } from "../weather/weather.js";
import * as dateFns from 'https://cdn.jsdelivr.net/npm/date-fns@2.24.0/esm/index.js';

export let chartCreator = (info, i) => {
    const weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const now = new Date();
    const day = dateFns.getDay(now);
    const index = day;
    const canvas = document.querySelector(`.canvas${i}`);

    let myChart = new Chart(canvas, {
        type: 'bar',
        data: {
        labels: [weekDay[day-1], weekDay[day], weekDay[(index+1)%7], weekDay[(index+2)%7], weekDay[(index+3)%7], weekDay[(index+4)%7]],
            datasets: [{
                label: 'Temperature',
                data: [Math.round(info.list[0].main.temp - 273.15), Math.round(info.list[8].main.temp - 273.15), Math.round(info.list[16].main.temp - 273.15), Math.round(info.list[24].main.temp - 273.15), Math.round(info.list[32].main.temp - 273.15), Math.round(info.list[39].main.temp - 273.15)],
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
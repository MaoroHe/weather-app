import { weather, weatherB } from "../weather/weather.js";

export function submit() {
    const subBtn = document.getElementById('submit');
    const input = document.querySelector('#choose');
    const addBtn = document.getElementById('add')

    weather();

    subBtn.addEventListener('click', (event) => {
        event.preventDefault();
        if (input.value != '') {
        weather();
        }
    })

    addBtn.addEventListener('click', (event) => {
        event.preventDefault();
        if (input.value != '') {
            weatherB();
        }
    })
}
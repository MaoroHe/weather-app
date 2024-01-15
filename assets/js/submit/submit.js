import { weather } from "../weather/weather.js";

export function submit() {
    const subBtn = document.getElementById('submit');
    const input = document.querySelector('#choose');

    subBtn.addEventListener('click', (event) => {
        if (input.value != '') {
        weather();
        }
    })
}
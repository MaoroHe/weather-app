import { setup } from "../setup/setup.js";
import { chartCreator } from "../chart/chart.js";
import * as dateFns from 'https://cdn.jsdelivr.net/npm/date-fns@2.24.0/esm/index.js';

export let dayCreator = (wkd, i, f) => {
    const day_un = document.querySelector(`.day_un${f}`);
    const day_deux = document.querySelector(`.day_deux${f}`);
    const day_trois = document.querySelector(`.day_trois${f}`);
    const day_quatre = document.querySelector(`.day_quatre${f}`);
    const day_cinq = document.querySelector(`.day_cinq${f}`);

    day_un.textContent = wkd[i];
    day_deux.textContent = wkd[(i+1)%7];
    day_trois.textContent = wkd[(i+2)%7];
    day_quatre.textContent = wkd[(i+3)%7];
    day_cinq.textContent = wkd[(i+4)%7];
}

let dayCalc = (k) => {
    const weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    const now = new Date();
    console.log(now)
    const day = dateFns.getDay(now)
    const index = day;
    console.log(index)
    
    const days = weekDay[index]
    console.log(days)
    dayCreator(weekDay, index, k)
}

let infoWrite = (info, i, images) => {
    const cityName = document.querySelector(`.cityName${i}`);
    const temperature = document.querySelector(`.temperature${i}`)
    const imgSky = document.querySelector(`.imgSky${i}`);
    const descR = document.querySelector(`.descR${i}`);

    const img_mat = document.querySelector(`.img_mat${i}`);
    const img_mid = document.querySelector(`.img_mid${i}`);
    const img_soi = document.querySelector(`.img_soi${i}`);

    const temp_mat = document.querySelector(`.temp_mat${i}`);
    const temp_mid = document.querySelector(`.temp_mid${i}`);
    const temp_soi = document.querySelector(`.temp_soi${i}`);

    const temp_un = document.querySelector(`.temp_un${i}`);
    const temp_deux = document.querySelector(`.temp_deux${i}`);
    const temp_trois = document.querySelector(`.temp_trois${i}`);
    const temp_quatre = document.querySelector(`.temp_quatre${i}`);
    const temp_cinq = document.querySelector(`.temp_cinq${i}`);

    const img_un = document.querySelector(`.img_un${i}`);
    const img_deux = document.querySelector(`.img_deux${i}`);
    const img_trois = document.querySelector(`.img_trois${i}`);
    const img_quatre = document.querySelector(`.img_quatre${i}`);
    const img_cinq = document.querySelector(`.img_cinq${i}`);

    const cityImg = document.querySelector(`.cityImg${i}`);
    const titleCity = document.querySelector(`.titleCity${i}`);

    let temps = info.list[0].main.temp - 273.15;
    let tempss = Math.round(temps);
    let skyState = info.list[0].weather[0].main;
    let descT = info.list[0].weather[0].description;

    let mat_img = `assets/img/${info.list[0].weather[0].main}.png`;
    let mid_img = `assets/img/${info.list[1].weather[0].main}.png`;
    let soi_img = `assets/img/${info.list[2].weather[0].main}.png`;

    let mat_temp = info.list[0].main.temp - 273.15;
    let mid_temp = info.list[1].main.temp - 273.15;
    let soi_temp = info.list[2].main.temp - 273.15;

    cityName.textContent = i;
    temperature.textContent = tempss + '°C';
    descR.textContent = descT;
    imgSky.src = `assets/img/${skyState}.png`;

    img_mat.src = mat_img;
    img_mid.src = mid_img;
    img_soi.src = soi_img;

    temp_mat.textContent = Math.round(mat_temp) + "°C";
    temp_mid.textContent = Math.round(mid_temp) + "°C";
    temp_soi.textContent = Math.round(soi_temp) + "°C";

    temp_un.textContent = Math.round(info.list[8].main.temp - 273.15) + "°C";
    temp_deux.textContent = Math.round(info.list[16].main.temp - 273.15) + "°C";
    temp_trois.textContent = Math.round(info.list[24].main.temp - 273.15) + "°C";
    temp_quatre.textContent = Math.round(info.list[32].main.temp - 273.15) + "°C";
    temp_cinq.textContent = Math.round(info.list[39].main.temp - 273.15) + "°C";

    img_un.src = `assets/img/${info.list[8].weather[0].main}.png`;
    img_deux.src = `assets/img/${info.list[16].weather[0].main}.png`;
    img_trois.src = `assets/img/${info.list[24].weather[0].main}.png`;
    img_quatre.src = `assets/img/${info.list[32].weather[0].main}.png`;
    img_cinq.src = `assets/img/${info.list[39].weather[0].main}.png`;

    cityImg.src = images.results[0].urls.regular;
    titleCity.textContent = i;
}

export async function weather() {
    const city = document.getElementById('choose');
    const ville = localStorage.getItem("ville");
    const mainss = document.querySelector('main');
    const cityVal = city.value || ville || 'charleroi';
    mainss.innerHTML= '';

    if (cityVal != '') {
    try {
        let response = await fetch("https://us1.locationiq.com/v1/search?key=pk.d12d07f0d36545fc2051ed5f2e34c1cd&q=" + cityVal + "%20&format=json");
        let content = await response.json();

        const lat = content[0].lat;
        const long = content[0].lon;

        let responsed = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + long + '&appid=eb9158767d821cfee8d7eca824f38e1f')
        let temp = await responsed.json();

        let searched = await fetch('https://api.unsplash.com/search/photos?client_id=p1qn3My8katmILWqNG9L5_s5a25uQT3IGfJJexTgxfw&query=' + cityVal);
        let contented = await searched.json();

        setup(cityVal)
        infoWrite(temp, cityVal, contented)
        dayCalc(cityVal)
        chartCreator(temp, cityVal)
    } catch (error) {
        console.log(error)
    }
}

    localStorage.setItem("ville", cityVal);
    city.value = '';
}

export async function weatherB() {
    const city = document.getElementById('choose');
    const ville = localStorage.getItem("ville");
    const cityVal = city.value;

    if (cityVal != '') {
    try {
        let response = await fetch('https://api.myptv.com/geocoding/v1/locations/by-text?searchText=' + cityVal + '&apiKey=RVVfNzQ1ZTAyOGRiMDk2NDJhODg3ZWY3NTc1NThiMWIyZTk6MmNiYmEwMzYtNTczYy00Mzc3LThiMmYtMTFjODljNDcxY2Ji');
        let content = await response.json();

        const lat = content.locations[0].referencePosition.latitude;
        const long = content.locations[0].referencePosition.longitude;

        let responsed = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + long + '&appid=eb9158767d821cfee8d7eca824f38e1f')
        let temp = await responsed.json();

        let searched = await fetch('https://api.unsplash.com/search/photos?client_id=p1qn3My8katmILWqNG9L5_s5a25uQT3IGfJJexTgxfw&query=' + cityVal);
        let contented = await searched.json();

        setup(cityVal)
        infoWrite(temp, cityVal, contented)
        dayCalc(cityVal)
        chartCreator(temp, cityVal)
    } catch (error) {
        console.log(error)
    }
}

    city.value = '';
}
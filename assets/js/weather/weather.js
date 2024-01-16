let infoWrite = (info) => {
    const cityName = document.querySelector('#cityName');
    const temperature = document.querySelector('#temperature')
    const imgSky = document.querySelector('#imgSky');
    const descR = document.querySelector('#descR');

    const img_mat = document.querySelector('.img_mat');
    const img_mid = document.querySelector('.img_mid');
    const img_soi = document.querySelector('.img_soi');

    const temp_mat = document.querySelector('.temp_mat');
    const temp_mid = document.querySelector('.temp_mid');
    const temp_soi = document.querySelector('.temp_soi');

    let temps = info.list[0].main.temp - 273.15;
    let tempss = Math.floor(temps)
    let skyState = info.list[0].weather[0].main;
    let descT = info.list[0].weather[0].description;

    let mat_img = `./assets/img/${info.list[0].weather[0].main}.png`;
    let mid_img = `assets/img/${info.list[1].weather[0].main}.png`;
    let soi_img = `assets/img/${info.list[2].weather[0].main}.png`;

    let mat_temp = info.list[0].main.temp - 273.15;
    let mid_temp = info.list[1].main.temp - 273.15;
    let soi_temp = info.list[2].main.temp - 273.15;

    cityName.textContent = info.city.name;
    temperature.textContent = tempss + '°';
    descR.textContent = descT;
    imgSky.src = `/assets/img/${skyState}.png`;

    img_mat.src = mat_img;
    img_mid.src = mid_img;
    img_soi.src = soi_img;

    temp_mat.textContent = Math.floor(mat_temp);
    temp_mid.textContent = Math.floor(mid_temp);
    temp_soi.textContent = Math.floor(soi_temp);
}

export async function weather() {
    const city = document.getElementById('choose');
    const cityVal = city.value;

    try {
        let response = await fetch('https://api.myptv.com/geocoding/v1/locations/by-text?searchText=' + cityVal + '&apiKey=RVVfZmUyNzM3ZmZlOTljNGJhNDg2MmFlNTUzMjYzMGZhNDA6NmI3ZjRmNDgtZmQzZS00ZDAxLWI3ODUtNTlhOTQ4OGRhODM5');
        let content = await response.json();

        const lat = content.locations[0].referencePosition.latitude;
        const long = content.locations[0].referencePosition.longitude;

        let responsed = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + long + '&appid=0e67099d0ac06e931fd91159a462a238')
        let temp = await responsed.json();
        infoWrite(temp)
    } catch (error) {
        console.log(error)
    }

    city.value = '';
}

//oui
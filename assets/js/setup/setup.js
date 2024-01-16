export let setup = (i) => {
    const mains = document.getElementById('main');

    const cityName = document.createElement('h1');
    cityName.className = `cityName${i} cityName`;
    mains.appendChild(cityName);

    const descR = document.createElement('p');
    descR.className = `descR${i} descR`;
    mains.appendChild(descR);

    const imgSky = document.createElement('img');
    imgSky.className = `imgSky${i} imgSky`;
    mains.appendChild(imgSky);

    const temperature = document.createElement('h2');
    temperature.className = `temperature${i} temperature`;
    mains.appendChild(temperature);

    const parentDiv = document.createElement('div');
    parentDiv.id = 'today';
    
    mains.appendChild(parentDiv)

    //parent div

    const todays = document.createElement('h2');
    todays.id = 'todays';
    todays.textContent = "TODAY'S FORECAST";
    parentDiv.appendChild(todays)

    // title

    const secondDiv = document.createElement('div');
    secondDiv.className = 'forecastDay';
    parentDiv.appendChild(secondDiv);

    // second div

    const matinDiv = document.createElement('div');
    matinDiv.id = 'matin';
    secondDiv.appendChild(matinDiv);

    const midiDiv = document.createElement('div');
    midiDiv.id = 'midi';
    secondDiv.appendChild(midiDiv);

    const soirDiv = document.createElement('div');
    soirDiv.id = 'soir';
    secondDiv.appendChild(soirDiv)

    // hour div

    const hour_mat = document.createElement('h3');
    hour_mat.className = 'hour hour_mat';
    hour_mat.textContent = '03:00';
    matinDiv.appendChild(hour_mat);

    const hour_mid = document.createElement('h3');
    hour_mid.className = 'hour hour_mid';
    hour_mid.textContent = '12:00';
    midiDiv.appendChild(hour_mid);

    const hour_soi = document.createElement('h3');
    hour_soi.className = 'hour hour_soi';
    hour_soi.textContent = '21:00';
    soirDiv.appendChild(hour_soi);

    // hour h3

    const img_mat = document.createElement('img');
    img_mat.className = `imgToday img_mat img_mat${i}`;
    matinDiv.appendChild(img_mat);

    const img_mid = document.createElement('img');
    img_mid.className = `imgToday img_mid img_mid${i}`;
    midiDiv.appendChild(img_mid);

    const img_soi = document.createElement('img');
    img_soi.className = `imgToday img_soi img_soi${i}`;
    soirDiv.appendChild(img_soi);

    const temp_mat = document.createElement('h3');
    temp_mat.className = 'tempToday temp_mat';
    matinDiv.appendChild(temp_mat)

    const temp_mid = document.createElement('h3');
    temp_mid.className = 'tempToday temp_mid';
    midiDiv.appendChild(temp_mid);

    const temp_soi = document.createElement('h3');
    temp_soi.className = 'tempToday temp_soi';
    soirDiv.appendChild(temp_soi);

    // weekly forecast

    const week = document.createElement('div');
    week.id = 'week';
    mains.appendChild(week);

    const weeks = document.createElement('h2');
    weeks.id = 'weeks';
    weeks.textContent = "5-DAY'S FORECAST";
    week.appendChild(weeks);

    const forecastWeek = document.createElement('div');
    forecastWeek.className = 'forecastWeek';
    week.appendChild(forecastWeek);

    const un = document.createElement('div');
    const day_un = document.createElement('h3');
    un.id = 'un';
    day_un.className = 'day day_un';
    forecastWeek.appendChild(un);
    un.appendChild(day_un);

    const deux = document.createElement('div');
    const day_deux = document.createElement('h3');
    deux.id = 'deux';
    day_deux.className = 'day day_deux';
    forecastWeek.appendChild(deux);
    deux.appendChild(day_deux);

    const trois = document.createElement('div');
    const day_trois = document.createElement('h3');
    trois.id = 'trois';
    day_trois.className = 'day day_trois';
    forecastWeek.appendChild(trois);
    trois.appendChild(day_trois);
    
    const quatre = document.createElement('div');
    const day_quatre = document.createElement('h3');
    quatre.id = 'quatre';
    day_quatre.className = 'day day_quatre';
    forecastWeek.appendChild(quatre);
    quatre.appendChild(day_quatre);

    const cinq = document.createElement('div');
    const day_cinq = document.createElement('h3');
    cinq.id = 'cinq';
    day_cinq.className = 'day day_cinq';
    forecastWeek.appendChild(cinq);
    cinq.appendChild(day_cinq);
}
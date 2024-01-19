export let setup = (i) => {
    const mains = document.getElementById('main');
    const normalDiv = document.createElement('div');
    normalDiv.className = 'normalDiv';

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

    const bigDiv = document.createElement('div');
    bigDiv.className = 'bigDiv'
    mains.appendChild(bigDiv);

    const parentDiv = document.createElement('div');
    parentDiv.id = 'today';
    
    bigDiv.appendChild(normalDiv)
    normalDiv.appendChild(parentDiv)

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
    temp_mat.className = `tempToday temp_mat temp_mat${i}`;
    matinDiv.appendChild(temp_mat)

    const temp_mid = document.createElement('h3');
    temp_mid.className = `tempToday temp_mid temp_mid${i}`;
    midiDiv.appendChild(temp_mid);

    const temp_soi = document.createElement('h3');
    temp_soi.className = `tempToday temp_soi temp_soi${i}`;
    soirDiv.appendChild(temp_soi);

    // weekly forecast

    const week = document.createElement('div');
    week.id = 'week';
    bigDiv.appendChild(week);

    const weeks = document.createElement('h2');
    weeks.id = 'weeks';
    weeks.textContent = "5-DAY FORECAST";
    week.appendChild(weeks);

    const forecastWeek = document.createElement('div');
    forecastWeek.className = 'forecastWeek';
    week.appendChild(forecastWeek);

    const un = document.createElement('div');
    const day_un = document.createElement('h3');
    const temp_un = document.createElement('p');
    const img_un = document.createElement('img');
    un.id = 'un';
    day_un.className = `day day_un day_un${i}`;
    temp_un.className = `tempW temp_un temp_un${i}`;
    img_un.className = `imgW img_un img_un${i}`;
    forecastWeek.appendChild(un);
    un.appendChild(day_un);
    un.appendChild(temp_un);
    un.appendChild(img_un);

    const deux = document.createElement('div');
    const day_deux = document.createElement('h3');
    const temp_deux = document.createElement('p');
    const img_deux = document.createElement('img');
    deux.id = 'deux';
    day_deux.className = `day day_deux day_deux${i}`;
    temp_deux.className = `tempW temp_deux temp_deux${i}`;
    img_deux.className = `imgW img_deux img_deux${i}`;
    forecastWeek.appendChild(deux);
    deux.appendChild(day_deux);
    deux.appendChild(temp_deux);
    deux.appendChild(img_deux);

    const trois = document.createElement('div');
    const day_trois = document.createElement('h3');
    const temp_trois = document.createElement('p');
    const img_trois = document.createElement('img');
    trois.id = 'trois';
    day_trois.className = `day day_trois day_trois${i}`;
    temp_trois.className = `tempW temp_trois temp_trois${i}`;
    img_trois.className = `imgW img_trois img_trois${i}`;
    forecastWeek.appendChild(trois);
    trois.appendChild(day_trois);
    trois.appendChild(temp_trois);
    trois.appendChild(img_trois);
    
    const quatre = document.createElement('div');
    const day_quatre = document.createElement('h3');
    const temp_quatre = document.createElement('p');
    const img_quatre = document.createElement('img');
    quatre.id = 'quatre';
    day_quatre.className = `day day_quatre day_quatre${i}`;
    temp_quatre.className = `tempW temp_quatre temp_quatre${i}`;
    img_quatre.className = `imgW img_quatre img_quatre${i}`;
    forecastWeek.appendChild(quatre);
    quatre.appendChild(day_quatre);
    quatre.appendChild(temp_quatre);
    quatre.appendChild(img_quatre);

    const cinq = document.createElement('div');
    const day_cinq = document.createElement('h3');
    const temp_cinq = document.createElement('p');
    const img_cinq = document.createElement('img');
    cinq.id = 'cinq';
    day_cinq.className = `day day_cinq day_cinq${i}`;
    temp_cinq.className = `tempW temp_cinq temp_cinq${i}`;
    img_cinq.className = `imgW img_cinq img_cinq${i}`;
    forecastWeek.appendChild(cinq);
    cinq.appendChild(day_cinq);
    cinq.appendChild(temp_cinq);
    cinq.appendChild(img_cinq);

    const divImgW = document.createElement('div');
    const cityImg = document.createElement('img');
    const titleCity = document.createElement('h2');
    divImgW.className = `divImgW divImgW${i}`;
    cityImg.className = `cityImg cityImg${i}`;
    titleCity.className = `titleCity titleCity${i}`;
    normalDiv.appendChild(divImgW);
    divImgW.appendChild(titleCity);
    divImgW.appendChild(cityImg);

    const divChart = document.createElement('div');
    const canvas = document.createElement('canvas');
    divChart.className = `divChart divChart${i}`;
    canvas.className = `canvas canvas${i}`;
    mains.appendChild(divChart);
    divChart.appendChild(canvas);
}
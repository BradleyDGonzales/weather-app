/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// eslint-disable-next-line import/no-import-module-exports
// eslint-disable-next-line import/prefer-default-export
import {
  weatherCity, weatherCountry, tempF, tempMaxF, tempMinF, tempC, tempMaxC, tempMinC, latitude, longitude, weatherDesc, windSpeed, windDeg, humidity, icon, timestamp,
  sunRise, sunSet, moonRise, moonSet, moonPhase, chanceOfRain, windMPH, windDir, forecastDayArray,
} from './weather';

export function displayForecastData() {
  const forecastCard = document.querySelector('.fiveDayForecast');
  let child = forecastCard.lastElementChild;
  while (child) {
    forecastCard.removeChild(child);
    child = forecastCard.lastElementChild;
  }
  for (let i = 0; i < 5; i++) {
    const newForecastCard = document.createElement('div');
    newForecastCard.classList.add('forecastCard');
    const newForecastCardDate = document.createElement('p');
    newForecastCardDate.id = 'forecastDate';
    newForecastCardDate.textContent = forecastDayArray[i].forecastDate;
    const newForecastCardIcon = document.createElement('img');
    newForecastCardIcon.id = 'forecastIcon';
    newForecastCardIcon.src = `https://${forecastDayArray[i].icon}`;
    const newForecastCardTemp = document.createElement('p');
    newForecastCardTemp.id = 'forecastTemp';
    newForecastCardTemp.textContent = `${forecastDayArray[i].avgTempF}°F`;
    const newForecastCardScale = document.createElement('p');
    newForecastCardScale.id = 'forecastScale';
    const span = document.createElement('span');
    span.classList.add('forecastSpan');
    span.classList.add('active');
    span.textContent = '°F';
    const spanTwo = document.createElement('span');
    spanTwo.classList.add('forecastSpan');
    spanTwo.textContent = '°C';
    const newForecastCardDesc = document.createElement('p');
    newForecastCardDesc.id = 'forecastDesc';
    newForecastCardDesc.textContent = forecastDayArray[i].condition;
    forecastCard.appendChild(newForecastCard);
    newForecastCard.appendChild(newForecastCardDate);
    newForecastCard.appendChild(newForecastCardIcon);
    newForecastCard.appendChild(newForecastCardTemp);
    newForecastCard.appendChild(newForecastCardScale);
    newForecastCardScale.appendChild(span);
    span.after(' | ');
    newForecastCardScale.appendChild(spanTwo);
    newForecastCard.appendChild(newForecastCardDesc);
  }
}
export function displayFData() {
  // append weatherCard
  const weatherPlaceName = `${weatherCity}, ${weatherCountry}`;
  const weatherCard = document.getElementById('weatherCard');
  let child = weatherCard.lastElementChild;
  while (child) {
    weatherCard.removeChild(child);
    child = weatherCard.lastElementChild;
  }
  const weatherPlace = document.createElement('p');
  weatherPlace.id = 'weatherPlace';
  weatherPlace.textContent = weatherPlaceName;
  const time = document.createElement('p');
  time.id = 'timestamp';
  time.textContent = `as of ${timestamp}`;
  const weatherIcon = document.createElement('img');
  weatherIcon.id = 'icon';
  weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  const weatherInformation = document.createElement('div');
  weatherInformation.id = 'weatherInfo';
  const weatherTemp = document.createElement('p');
  weatherTemp.id = 'weatherTemp';
  weatherTemp.textContent = `${tempF}°F`;
  const weatherDescription = document.createElement('p');
  weatherDescription.id = 'weatherDesc';
  weatherDescription.textContent = weatherDesc;
  const weatherScale = document.createElement('p');
  weatherScale.id = 'weatherScale';
  const span = document.createElement('span');
  span.classList.add('mySpan');
  span.classList.add('active');
  span.textContent = '°F';
  const spanTwo = document.createElement('span');
  spanTwo.classList.add('mySpan');
  spanTwo.textContent = '°C';

  weatherCard.appendChild(weatherPlace);
  weatherCard.appendChild(time);
  weatherCard.appendChild(weatherIcon);
  weatherCard.appendChild(weatherInformation);
  weatherInformation.appendChild(weatherTemp);
  weatherInformation.appendChild(weatherScale);
  weatherScale.appendChild(span);
  span.after(' | ');
  weatherScale.appendChild(spanTwo);
  weatherInformation.appendChild(weatherDescription);

  // append weatherCardExtras
  const weatherCardExtras = document.getElementById('weatherCardExtras');
  let childExtras = weatherCardExtras.lastElementChild;
  while (childExtras) {
    weatherCardExtras.removeChild(childExtras);
    childExtras = weatherCardExtras.lastElementChild;
  }
  const weatherCardSunRiseDiv = document.createElement('div');
  weatherCardSunRiseDiv.id = 'sunRiseDiv';
  const weatherCardSunRiseImage = document.createElement('img');
  weatherCardSunRiseImage.src = '../src/icons/sunrise-pic.png';
  const weatherCardSunRise = document.createElement('p');
  weatherCardSunRise.id = 'weatherCardSunRise';
  weatherCardSunRise.textContent = `Sunrise: ${sunRise}`;
  const weatherCardSunSetDiv = document.createElement('div');
  weatherCardSunSetDiv.id = 'sunSetDiv';
  const weatherCardSunSetImage = document.createElement('img');
  weatherCardSunSetImage.src = '../src/icons/sunset-pic.png';
  const weatherCardSunSet = document.createElement('p');
  weatherCardSunSet.id = 'weatherCardSunSet';
  weatherCardSunSet.textContent = `Sunset: ${sunSet}`;
  const weatherCardMoonRiseDiv = document.createElement('div');
  weatherCardMoonRiseDiv.id = 'moonRiseDiv';
  const weatherCardMoonRiseImage = document.createElement('img');
  weatherCardMoonRiseImage.src = '../src/icons/moonrise.png';
  const weatherCardMoonRise = document.createElement('p');
  weatherCardMoonRise.id = 'weatherCardMoonRise';
  weatherCardMoonRise.textContent = `Moonrise: ${moonRise}`;
  const weatherCardMoonSetDiv = document.createElement('div');
  weatherCardMoonSetDiv.id = 'moonSetDiv';
  const weatherCardMoonSetImage = document.createElement('img');
  weatherCardMoonSetImage.src = '../src/icons/moonset.png';
  const weatherCardMoonSet = document.createElement('p');
  weatherCardMoonSet.id = 'weatherCardMoonSet';
  weatherCardMoonSet.textContent = `Moonset: ${moonSet}`;
  const weatherCardMoonPhaseDiv = document.createElement('div');
  weatherCardMoonPhaseDiv.id = 'moonPhaseDiv';
  const weatherCardMoonImage = document.createElement('img');
  const weatherCardMoonPhase = document.createElement('p');
  weatherCardMoonPhase.id = 'weatherCardMoonPhase';
  weatherCardMoonPhase.textContent = `Moon phase: ${moonPhase}`;
  switch (moonPhase) {
    case 'New Moon':
      weatherCardMoonImage.src = '../src/icons/new-moon.png';
      break;
    case 'Waxing Crescent':
      weatherCardMoonImage.src = '../src/icons/waxingcrescent.png';
      break;
    case 'First Quarter':
      weatherCardMoonImage.src = '../src/icons/firstquarter.png';
      break;
    case 'Waxing Gibbous':
      weatherCardMoonImage.src = '../src/icons/waxinggibbous.png';
      break;
    case 'Full Moon':
      weatherCardMoonImage.src = '../src/icons/fullmoon.png';
      break;
    case 'Waning Gibbous':
      weatherCardMoonImage.src = '../src/icons/waninggibbous.png';
      break;
    case 'Last Quarter':
      weatherCardMoonImage.src = '../src/icons/thirdquarter.png';
      break;
    case 'Waning Crescent':
      weatherCardMoonImage.src = '../src/icons/waningcrescent.png';
      break;
    default:
      break;
  }
  const weatherCardWindDiv = document.createElement('div');
  weatherCardWindDiv.id = 'windDiv';
  const weatherCardWindImage = document.createElement('img');
  weatherCardWindImage.src = '../src/icons/weather-windy.png';
  const weatherCardWind = document.createElement('p');
  weatherCardWind.id = 'weatherCardWind';
  weatherCardWind.textContent = `Wind speed: ${windMPH}mph`;
  const weatherCardHumidityDiv = document.createElement('div');
  weatherCardHumidityDiv.id = 'humidityDiv';
  const weatherCardHumidityImage = document.createElement('img');
  weatherCardHumidityImage.src = '../src/icons/humidity.png';
  const weatherCardHumidity = document.createElement('p');
  weatherCardHumidity.id = 'weatherCardHumidity';
  weatherCardHumidity.textContent = `Humidity: ${humidity}%`;
  const weatherCardRainDiv = document.createElement('div');
  weatherCardRainDiv.id = 'rainDiv';
  const weatherCardRainImage = document.createElement('img');
  weatherCardRainImage.src = '../src/icons/rain.png';
  const weatherCardRain = document.createElement('p');
  weatherCardRain.id = 'weatherCardRain';
  weatherCardRain.textContent = `Rain chance: ${chanceOfRain}%`;

  weatherCardExtras.appendChild(weatherCardSunRiseDiv);
  weatherCardSunRiseDiv.appendChild(weatherCardSunRiseImage);
  weatherCardSunRiseDiv.appendChild(weatherCardSunRise);
  weatherCardExtras.appendChild(weatherCardSunSetDiv);
  weatherCardSunSetDiv.appendChild(weatherCardSunSetImage);
  weatherCardSunSetDiv.appendChild(weatherCardSunSet);
  weatherCardExtras.appendChild(weatherCardMoonRiseDiv);
  weatherCardMoonRiseDiv.appendChild(weatherCardMoonRiseImage);
  weatherCardMoonRiseDiv.appendChild(weatherCardMoonRise);
  weatherCardExtras.appendChild(weatherCardMoonSetDiv);
  weatherCardMoonSetDiv.appendChild(weatherCardMoonSetImage);
  weatherCardMoonSetDiv.appendChild(weatherCardMoonSet);
  weatherCardExtras.appendChild(weatherCardMoonPhaseDiv);
  weatherCardMoonPhaseDiv.appendChild(weatherCardMoonImage);
  weatherCardMoonPhaseDiv.appendChild(weatherCardMoonPhase);
  weatherCardExtras.appendChild(weatherCardWindDiv);
  weatherCardWindDiv.appendChild(weatherCardWindImage);
  weatherCardWindDiv.appendChild(weatherCardWind);
  weatherCardExtras.appendChild(weatherCardHumidityDiv);
  weatherCardHumidityDiv.appendChild(weatherCardHumidityImage);
  weatherCardHumidityDiv.appendChild(weatherCardHumidity);
  weatherCardExtras.appendChild(weatherCardRainDiv);
  weatherCardRainDiv.appendChild(weatherCardRainImage);
  weatherCardRainDiv.appendChild(weatherCardRain);
}
export function displayForecastFData() {
  const forecastCard = document.querySelector('.fiveDayForecast');
  let child = forecastCard.lastElementChild;
  while (child) {
    forecastCard.removeChild(child);
    child = forecastCard.lastElementChild;
  }
  for (let i = 0; i < 5; i++) {
    const newForecastCard = document.createElement('div');
    newForecastCard.classList.add('forecastCard');
    const newForecastCardDate = document.createElement('p');
    newForecastCardDate.id = 'forecastDate';
    newForecastCardDate.textContent = forecastDayArray[i].forecastDate;
    const newForecastCardIcon = document.createElement('img');
    newForecastCardIcon.id = 'forecastIcon';
    newForecastCardIcon.src = `https://${forecastDayArray[i].icon}`;
    const newForecastCardTemp = document.createElement('p');
    newForecastCardTemp.id = 'forecastTemp';
    newForecastCardTemp.textContent = `${forecastDayArray[i].avgTempF}°F`;
    const newForecastCardScale = document.createElement('p');
    newForecastCardScale.id = 'forecastScale';
    const span = document.createElement('span');
    span.classList.add('forecastSpan');
    span.classList.add('active');
    span.textContent = '°F';
    const spanTwo = document.createElement('span');
    spanTwo.classList.add('forecastSpan');
    spanTwo.textContent = '°C';
    const newForecastCardDesc = document.createElement('p');
    newForecastCardDesc.id = 'forecastDesc';
    newForecastCardDesc.textContent = forecastDayArray[i].condition;
    forecastCard.appendChild(newForecastCard);
    newForecastCard.appendChild(newForecastCardDate);
    newForecastCard.appendChild(newForecastCardIcon);
    newForecastCard.appendChild(newForecastCardTemp);
    newForecastCard.appendChild(newForecastCardScale);
    newForecastCardScale.appendChild(span);
    span.after(' | ');
    newForecastCardScale.appendChild(spanTwo);
    newForecastCard.appendChild(newForecastCardDesc);
  }
}
export function displayForecastCData() {
  const forecastCard = document.querySelector('.fiveDayForecast');
  let child = forecastCard.lastElementChild;
  while (child) {
    forecastCard.removeChild(child);
    child = forecastCard.lastElementChild;
  }
  for (let i = 0; i < 5; i++) {
    const newForecastCard = document.createElement('div');
    newForecastCard.classList.add('forecastCard');
    const newForecastCardDate = document.createElement('p');
    newForecastCardDate.id = 'forecastDate';
    newForecastCardDate.textContent = forecastDayArray[i].forecastDate;
    const newForecastCardIcon = document.createElement('img');
    newForecastCardIcon.id = 'forecastIcon';
    newForecastCardIcon.src = `https://${forecastDayArray[i].icon}`;
    const newForecastCardTemp = document.createElement('p');
    newForecastCardTemp.id = 'forecastTemp';
    newForecastCardTemp.textContent = `${forecastDayArray[i].avgTempC}°C`;
    const newForecastCardScale = document.createElement('p');
    newForecastCardScale.id = 'forecastScale';
    const span = document.createElement('span');
    span.classList.add('forecastSpan');
    span.textContent = '°F';
    const spanTwo = document.createElement('span');
    spanTwo.classList.add('forecastSpan');
    spanTwo.classList.add('active');
    spanTwo.textContent = '°C';
    const newForecastCardDesc = document.createElement('p');
    newForecastCardDesc.id = 'forecastDesc';
    newForecastCardDesc.textContent = forecastDayArray[i].condition;
    forecastCard.appendChild(newForecastCard);
    newForecastCard.appendChild(newForecastCardDate);
    newForecastCard.appendChild(newForecastCardIcon);
    newForecastCard.appendChild(newForecastCardTemp);
    newForecastCard.appendChild(newForecastCardScale);
    newForecastCardScale.appendChild(span);
    span.after(' | ');
    newForecastCardScale.appendChild(spanTwo);
    newForecastCard.appendChild(newForecastCardDesc);
  }
}
export function displayCData() {
  const weatherPlaceName = `${weatherCity}, ${weatherCountry}`;
  const weatherCard = document.getElementById('weatherCard');
  let child = weatherCard.lastElementChild;
  while (child) {
    weatherCard.removeChild(child);
    child = weatherCard.lastElementChild;
  }
  const weatherPlace = document.createElement('p');
  weatherPlace.id = 'weatherPlace';
  weatherPlace.textContent = weatherPlaceName;
  const time = document.createElement('p');
  time.id = 'timestamp';
  time.textContent = `as of ${timestamp}`;
  const weatherIcon = document.createElement('img');
  weatherIcon.id = 'icon';
  weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  const weatherInformation = document.createElement('div');
  weatherInformation.id = 'weatherInfo';
  const weatherTemp = document.createElement('p');
  weatherTemp.id = 'weatherTemp';
  weatherTemp.textContent = `${tempC}°C`;
  const weatherDescription = document.createElement('p');
  weatherDescription.id = 'weatherDesc';
  weatherDescription.textContent = weatherDesc;
  const weatherScale = document.createElement('p');
  weatherScale.id = 'weatherScale';
  const span = document.createElement('span');
  span.classList.add('mySpan');

  span.textContent = '°F';
  const spanTwo = document.createElement('span');
  spanTwo.classList.add('mySpan');
  spanTwo.classList.add('active');
  spanTwo.textContent = '°C';

  weatherCard.appendChild(weatherPlace);
  weatherCard.appendChild(time);
  weatherCard.appendChild(weatherIcon);
  weatherCard.appendChild(weatherInformation);
  weatherInformation.appendChild(weatherTemp);
  weatherInformation.appendChild(weatherScale);
  weatherScale.appendChild(span);
  span.after(' | ');
  weatherScale.appendChild(spanTwo);
  weatherInformation.appendChild(weatherDescription);
}

export function changeForecastSymbols() {
  const selectSpan = document.querySelectorAll('.forecastSpan');
  for (let i = 0; i < selectSpan.length; i++) {
    if (selectSpan[i].className === 'forecastSpan active') {
      selectSpan[i].classList.remove('active');
      if (i === 0) {
        displayForecastCData();
        return;
      } if (i > 0) {
        displayForecastFData();
        return;
      }
    }
  }
}
export function changeSymbols() {
  const selectSpan = document.querySelectorAll('.mySpan');
  for (let i = 0; i < selectSpan.length; i++) {
    if (selectSpan[i].className === 'mySpan active') {
      selectSpan[i].classList.remove('active');
      if (i === 0) {
        displayCData();
        return;
      } if (i > 0) {
        displayFData();
        return;
      }
    }
  }
}

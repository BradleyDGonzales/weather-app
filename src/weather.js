/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
/* eslint-disable no-mixed-operators */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { formatISO, format, parseISO } from 'date-fns';
import { displayFData, displayCData, displayForecastData } from './displayData';

const API_KEY = 'fe1baeec198c386d82e3e8b61757df12';
const API_KEY_TWO = 'a63658520a874d22b95204209221410';
export let weatherCity;
export let weatherCountry;
export let tempF;
export let tempMaxF;
export let tempMinF;
export let tempC;
export let tempMaxC;
export let tempMinC;
export let latitude;
export let longitude;
export let weatherDesc;
export let windSpeed;
export let windDeg;
export let humidity;
export let icon;
export let timestamp;
export let sunRise;
export let sunSet;
export let moonRise;
export let moonSet;
export let moonPhase;
export let chanceOfRain;
export let windMPH;
export let windDir;
export let flag = false;
export const forecastDayArray = [];
export async function defaultWeather() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&APPID=${API_KEY}`);
  const weatherData = await response.json();
  const responseTwo = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY_TWO}&q=London&days=6`);
  const forecastData = await responseTwo.json();
  // const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=51.50726&lon=0.1276&appid=fe1baeec198c386d82e3e8b61757df12'); // 5-day forecast
  console.log(weatherData);
  console.log(forecastData);
  try {
    weatherCity = weatherData.name;
    weatherCountry = weatherData.sys.country;
    tempF = Math.round(1.8 * (weatherData.main.temp - 273.15) + 32);
    tempMaxF = Math.round(1.8 * (weatherData.main.temp_max - 273.15) + 32);
    tempMinF = Math.round(1.8 * (weatherData.main.temp_min - 273.15) + 32);
    tempC = Math.round(weatherData.main.temp - 273.15);
    tempMaxC = Math.round(weatherData.main.temp_max - 273.15);
    tempMinC = Math.round(weatherData.main.temp_min - 273.15);
    latitude = weatherData.coord.lat;
    longitude = weatherData.coord.lon;
    weatherDesc = weatherData.weather[0].description;
    windSpeed = weatherData.wind.speed;
    windDeg = weatherData.wind.deg;
    humidity = weatherData.main.humidity;
    icon = weatherData.weather[0].icon;
    sunRise = forecastData.forecast.forecastday[0].astro.sunrise;
    sunSet = forecastData.forecast.forecastday[0].astro.sunset;
    moonRise = forecastData.forecast.forecastday[0].astro.moonrise;
    moonSet = forecastData.forecast.forecastday[0].astro.moonset;
    moonPhase = forecastData.forecast.forecastday[0].astro.moon_phase;
    windMPH = forecastData.current.wind_mph;
    windDir = forecastData.current.wind_dir;
    chanceOfRain = forecastData.forecast.forecastday[0].day.daily_chance_of_rain;
    const forecastCard = document.querySelector('.fiveDayForecast');
    let child = forecastCard.lastElementChild;
    while (child) {
      forecastCard.removeChild(child);
      child = forecastCard.lastElementChild;
    }
    for (let i = 0; i < 5; i++) {
      forecastDayArray[i] = {
        forecastDate: format(parseISO(forecastData.forecast.forecastday[i + 1].date), 'MMM dd'),
        avgTempF: Math.round(forecastData.forecast.forecastday[i + 1].day.avgtemp_f),
        avgTempC: Math.round(forecastData.forecast.forecastday[i + 1].day.avgtemp_c),
        icon: (forecastData.forecast.forecastday[i + 1].day.condition.icon).slice(2),
        condition: forecastData.forecast.forecastday[i + 1].day.condition.text,
      };
    }
    for (let j = 0; j < 5; j++) {
      const newForecastCard = document.createElement('div');
      newForecastCard.classList.add('forecastCard');
      const newForecastCardDate = document.createElement('p');
      newForecastCardDate.id = 'forecastDate';
      newForecastCardDate.textContent = forecastDayArray[j].forecastDate;
      const newForecastCardIcon = document.createElement('img');
      newForecastCardIcon.id = 'forecastIcon';
      newForecastCardIcon.src = `https://${forecastDayArray[j].icon}`;
      const newForecastCardTemp = document.createElement('p');
      newForecastCardTemp.id = 'forecastTemp';
      newForecastCardTemp.textContent = `${forecastDayArray[j].avgTempF}°F`;
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
      newForecastCardDesc.textContent = forecastDayArray[j].condition;
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
    const today = new Date();
    const suffix = (today.getHours() >= 12) ? 'PM' : 'AM';
    timestamp = `${format(new Date(today), 'MMM dd')}, ${((today.getHours() + 11) % 12 + 1)}:${today.getMinutes() < 10 ? '0' : ''}${today.getMinutes()}${suffix}`;
    displayFData();
  } catch (error) {
    alert('Input format is either incorrect or the city does not exist');
  }
}
export async function getWeather(place) {
  try {
    flag = false;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=${API_KEY}`);
    const weatherData = await response.json();
    weatherCity = weatherData.name;
    weatherCountry = weatherData.sys.country;
    tempF = Math.round(1.8 * (weatherData.main.temp - 273.15) + 32);
    tempMaxF = Math.round(1.8 * (weatherData.main.temp_max - 273.15) + 32);
    tempMinF = Math.round(1.8 * (weatherData.main.temp_min - 273.15) + 32);
    tempC = Math.round(weatherData.main.temp - 273.15);
    tempMaxC = Math.round(weatherData.main.temp_max - 273.15);
    tempMinC = Math.round(weatherData.main.temp_min - 273.15);
    latitude = weatherData.coord.lat;
    longitude = weatherData.coord.lon;
    weatherDesc = weatherData.weather[0].description;
    windSpeed = weatherData.wind.speed;
    windDeg = weatherData.wind.deg;
    humidity = weatherData.main.humidity;
    icon = weatherData.weather[0].icon;
    const today = new Date();
    const suffix = (today.getHours() >= 12) ? 'PM' : 'AM';
    timestamp = `${format(new Date(today), 'MMM dd')}, ${((today.getHours() + 11) % 12 + 1)}:${today.getMinutes() < 10 ? '0' : ''}${today.getMinutes()}${suffix}`;
  } catch (error) {
    flag = true;
    alert('Input format is either incorrect or the city does not exist');
  }
}
export async function getForecast(place) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY_TWO}&q=${place}&days=6`);
    const forecastData = await response.json();
    sunRise = forecastData.forecast.forecastday[0].astro.sunrise;
    sunSet = forecastData.forecast.forecastday[0].astro.sunset;
    moonRise = forecastData.forecast.forecastday[0].astro.moonrise;
    moonSet = forecastData.forecast.forecastday[0].astro.moonset;
    moonPhase = forecastData.forecast.forecastday[0].astro.moon_phase;
    windMPH = forecastData.current.wind_mph;
    windDir = forecastData.current.wind_dir;
    sunRise = forecastData.forecast.forecastday[0].astro.sunrise;
    sunSet = forecastData.forecast.forecastday[0].astro.sunset;
    moonRise = forecastData.forecast.forecastday[0].astro.moonrise;
    moonSet = forecastData.forecast.forecastday[0].astro.moonset;
    moonPhase = forecastData.forecast.forecastday[0].astro.moon_phase;
    windMPH = forecastData.current.wind_mph;
    windDir = forecastData.current.wind_dir;
    chanceOfRain = forecastData.forecast.forecastday[0].day.daily_chance_of_rain;
    for (let i = 0; i < 5; i++) {
      forecastDayArray[i] = {
        forecastDate: format(parseISO(forecastData.forecast.forecastday[i + 1].date), 'MMM dd'),
        avgTempF: Math.round(forecastData.forecast.forecastday[i + 1].day.avgtemp_f),
        avgTempC: Math.round(forecastData.forecast.forecastday[i + 1].day.avgtemp_c),
        icon: (forecastData.forecast.forecastday[i + 1].day.condition.icon).slice(2),
        condition: forecastData.forecast.forecastday[i + 1].day.condition.text,
      };
    }
    console.log(forecastDayArray);
    displayForecastData();
    displayFData();
  } catch (error) {
    alert('Input format is either incorrect or the city does not exist');
  }
}

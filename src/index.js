import {
  getWeather, defaultWeather, getForecast, flag,
} from './weather';
import { changeSymbols, changeForecastSymbols } from './displayData';
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
window.onload = defaultWeather();

const submitInput = document.getElementById('submitplace');
const placeInput = document.getElementById('placeinput');
submitInput.addEventListener('click', async (e) => {
  e.preventDefault();
  await getWeather(placeInput.value);
  if (!flag) {
    getForecast(placeInput.value);
  }
});
placeInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    submitInput.click();
  }
});
document.addEventListener('click', (e) => {
  const spanClass = e.target.className;
  if (spanClass.includes('mySpan')) {
    if (spanClass === 'mySpan') {
      changeSymbols();
    }
  }
  if (spanClass.includes('forecastSpan')) {
    if (spanClass === 'forecastSpan') {
      changeForecastSymbols();
    }
  }
});

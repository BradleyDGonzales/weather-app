import { getWeather, defaultWeather, getForecast } from './weather';
import { changeSymbols } from './displayData';
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
window.onload = defaultWeather();

const submitInput = document.getElementById('submitplace');
const placeInput = document.getElementById('placeinput');
submitInput.addEventListener('click', async (e) => {
  e.preventDefault();
  await getWeather(placeInput.value);
  getForecast(placeInput.value);
});
document.addEventListener('click', (e) => {
  const spanClass = e.target.className;
  if (spanClass.includes('mySpan')) {
    if (spanClass === 'mySpan') {
      changeSymbols();
    }
  }
  // if (e.target.classN
});

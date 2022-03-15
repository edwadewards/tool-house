// window.addEventListener('load', () => {

// })

let weather = {
  apiKey: "8ab0a609f8652223d5167e4b34e78951",
  getWeather: function () {
    fetch(
      "api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={apiKey}"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  },
  displayWeather: function(data) {

  }
};  

const locInput = document.querySelector('.location-input');
const locOutput = document.querySelector('[data-location]');
const temperature = document.querySelector('[data-temp]');
const wind = document.querySelector('[data-wind]');
const precipitation = document.querySelector('[data-precipitation]');
// const icon = document.getElementById(icon);


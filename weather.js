let weather = {
  apiKey: "8ab0a609f8652223d5167e4b34e78951",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector("[data-location]").innerText = name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector("[data-description]").innerText = description;
    document.querySelector("[data-temp]").innerText = temp + "°F";
    document.querySelector("[data-humidity]").innerText = humidity + "%";
    document.querySelector("[data-wind]").innerText =
      speed + " mph";
    document.querySelector(".weather__dash").classList.remove("loading");
  },
  search: function () {
    this.fetchWeather(document.querySelector(".location-input").value);
  },
};

document.querySelector("[data-search]").addEventListener("click", function () {
  weather.search();
});

document.querySelector(".location-input").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Gadsden");


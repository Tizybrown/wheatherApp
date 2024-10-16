const apiKey = "21aaac4e07fa4865cc7ed88326c84198";
const searchButton = document.getElementById("search-button");
const searchBox = document.getElementById("search-box");
const weatherCard = document.getElementById("weather-card");

searchButton.addEventListener("click", () => {
  const city = searchBox.value;
  if (city) {
    getWeatherData(city);
  } else {
    alert("Please enter a city");
  }
});

function getWeatherData(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      displayWeatherData(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

function displayWeatherData(data) {
  const { name, main, weather } = data;
  const temperature = main.temp;
  const weatherDescription = weather[0].description;

  weatherCard.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Weather: ${weatherDescription}</p>
    `;
}

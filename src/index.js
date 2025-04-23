import "./styles.css";

// Main HTML Body Element
const bodyHtml = document.querySelector("body");

// User city input and submit button div
const userInputDiv = document.createElement("div");
bodyHtml.appendChild(userInputDiv);

// User input for city name
const locationInput = document.createElement("input");
userInputDiv.appendChild(locationInput);
locationInput.setAttribute("placeholder", "Enter a city...");

// User button for submitting location
const submitBtn = document.createElement("button");
userInputDiv.appendChild(submitBtn);
submitBtn.textContent = "Submit Location";

// Current Conditions Section
const currentConditionsSection = document.createElement("section");
bodyHtml.appendChild(currentConditionsSection);
currentConditionsSection.classList.add("currentConditions-section");

// Submit button logic
submitBtn.addEventListener("click", () => {
  currentConditionsSection.replaceChildren();

  const location = locationInput.value;

  currentWeather(location);
});

const displayCurrConditions = (
  currLocation,
  currConditions,
  currTemperature,
  currFeelsLike,
  currHumidity,
  currPrecip,
  currWindDir,
  currWindSpeed
) => {
  // Current Location div (single div)
  const location = document.createElement("h3");
  currentConditionsSection.appendChild(location);
  // TESTING TEXT
  location.textContent = currLocation;

  // Current weather condition (single div)
  const conditionsDiv = document.createElement("div");
  currentConditionsSection.appendChild(conditionsDiv);

  const conditionsText = document.createElement("p");
  conditionsDiv.appendChild(conditionsText);
  conditionsText.textContent = currConditions;
  conditionsText.classList.add("conditions");

  // Temperature and "feels like" text (two divs horizontal to each other)
  const tempSectionDiv = document.createElement("div");
  currentConditionsSection.appendChild(tempSectionDiv);
  tempSectionDiv.classList.add("tempSection-div");

  const currentTemp = document.createElement("p");
  tempSectionDiv.appendChild(currentTemp);
  currentTemp.textContent = `${currTemperature}°`;
  currentTemp.classList.add("temp");

  const currentFeelsLike = document.createElement("p");
  tempSectionDiv.appendChild(currentFeelsLike);
  currentFeelsLike.textContent = `Feels like: ${currFeelsLike}°`;
  currentFeelsLike.classList.add("feels-like");

  // Humidity and Precipitation (two divs horizontal to each other)
  const precipitationDiv = document.createElement("div");
  currentConditionsSection.appendChild(precipitationDiv);
  precipitationDiv.classList.add("precipitation-container");

  // Humidity
  const humidityDiv = document.createElement("div");
  precipitationDiv.appendChild(humidityDiv);
  humidityDiv.classList.add("humidity-div");
  const humidityText = document.createElement("p");
  humidityDiv.appendChild(humidityText);
  humidityText.textContent = "Humidity";
  humidityText.classList.add("precipitation-text");
  const currentHumidity = document.createElement("p");
  humidityDiv.appendChild(currentHumidity);
  currentHumidity.textContent = `${currHumidity}%`;
  currentHumidity.classList.add("curr-precip");

  // Rain
  const rainDiv = document.createElement("div");
  precipitationDiv.appendChild(rainDiv);
  rainDiv.classList.add("rain-div");
  const precipitationText = document.createElement("p");
  rainDiv.appendChild(precipitationText);
  precipitationText.textContent = "Rain";
  precipitationText.classList.add("precipitation-text");
  const currentPrecipitation = document.createElement("p");
  rainDiv.appendChild(currentPrecipitation);
  currentPrecipitation.textContent = `${currPrecip}%`;
  currentPrecipitation.classList.add("curr-precip");

  // Wind direction/speed (two divs horizontal to each other)
  const windDiv = document.createElement("div");
  currentConditionsSection.appendChild(windDiv);
  windDiv.classList.add("wind-container");

  // Wind direction
  const directionDiv = document.createElement("div");
  windDiv.appendChild(directionDiv);
  directionDiv.classList.add("direction-div");
  const directionText = document.createElement("p");
  directionDiv.appendChild(directionText);
  directionText.textContent = "Direction";
  directionText.classList.add("wind-text");
  const currentDirection = document.createElement("p");
  directionDiv.appendChild(currentDirection);
  currentDirection.textContent = `${currWindDir}°`;
  currentDirection.classList.add("curr-wind");

  // Wind Speed
  const speedDiv = document.createElement("div");
  windDiv.appendChild(speedDiv);
  speedDiv.classList.add("speed-div");
  const speedText = document.createElement("p");
  speedDiv.appendChild(speedText);
  speedText.textContent = "Speed";
  speedText.classList.add("wind-text");
  const currentSpeed = document.createElement("p");
  speedDiv.appendChild(currentSpeed);
  currentSpeed.textContent = `${currWindSpeed} mph`;
  currentSpeed.classList.add("curr-wind");
};

async function currentWeather(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=4744HCA3XPQ4DV5MVBSTNW4UP`
  );

  const weatherData = await response.json();

  const address = weatherData.address;
  const conditions = weatherData.currentConditions.conditions;
  const temperature = weatherData.currentConditions.temp;
  const feelsLike = weatherData.currentConditions.feelslike;
  const humidity = weatherData.currentConditions.humidity;
  const precipitation = weatherData.currentConditions.precip;
  const windDir = weatherData.currentConditions.winddir;
  const windSpeed = weatherData.currentConditions.windspeed;

  displayCurrConditions(
    address,
    conditions,
    temperature,
    feelsLike,
    humidity,
    precipitation,
    windDir,
    windSpeed
  );
}

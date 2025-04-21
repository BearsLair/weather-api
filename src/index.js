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

// Submit button logic
submitBtn.addEventListener("click", () => {
  const location = locationInput.value;

  currentWeather(location);
});

// Current Conditions Section
const currentConditionsSection = document.createElement("section");
bodyHtml.appendChild(currentConditionsSection);

// Current Location div (single div)
const location = document.createElement("h3");
currentConditionsSection.appendChild(location);
// TESTING TEXT
location.textContent = "San Francisco";

// Current weather condition (single div)
const conditionsDiv = document.createElement("div");
currentConditionsSection.appendChild(conditionsDiv);

const conditionsText = document.createElement("p");
conditionsDiv.appendChild(conditionsText);
conditionsText.textContent = "Clear";
conditionsText.classList.add("conditions");

// Temperature and "feels like" text (two divs horizontal to each other)
const tempSectionDiv = document.createElement("div");
currentConditionsSection.appendChild(tempSectionDiv);
tempSectionDiv.classList.add("tempSection-div");

const currentTemp = document.createElement("p");
tempSectionDiv.appendChild(currentTemp);
currentTemp.textContent = "80°";
currentTemp.classList.add("temp");

const currentFeelsLike = document.createElement("p");
tempSectionDiv.appendChild(currentFeelsLike);
currentFeelsLike.textContent = "Feels like: 80°";
currentFeelsLike.classList.add("feels-like");

// Humidity and Precipitation (two divs horizontal to each other)
const precipitationDiv = document.createElement("div");
currentConditionsSection.appendChild(precipitationDiv);
precipitationDiv.classList.add("precipitation-container");

const humidityDiv = document.createElement("div");
precipitationDiv.appendChild(humidityDiv);
humidityDiv.classList.add("humidity-div");
const humidityText = document.createElement("p");
humidityDiv.appendChild(humidityText);
humidityText.textContent = "Humidity";
humidityText.classList.add("precipitation-text");
const currentHumidity = document.createElement("p");
humidityDiv.appendChild(currentHumidity);
currentHumidity.textContent = "50%";
currentHumidity.classList.add("curr-precip");

const rainDiv = document.createElement("div");
precipitationDiv.appendChild(rainDiv);
rainDiv.classList.add("rain-div");
const precipitationText = document.createElement("p");
rainDiv.appendChild(precipitationText);
precipitationText.textContent = "Rain";
precipitationText.classList.add("precipitation-text");
const currentPrecipitation = document.createElement("p");
rainDiv.appendChild(currentPrecipitation);
currentPrecipitation.textContent = "0%";
currentPrecipitation.classList.add("curr-precip");

// Wind direction/speed (two divs horizontal to each other)
const windDiv = document.createElement("div");
currentConditionsSection.appendChild(windDiv);
windDiv.classList.add("wind-div");

async function currentWeather(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=4744HCA3XPQ4DV5MVBSTNW4UP`
  );

  const weatherData = await response.json();

  console.log("location: ", weatherData.address);
  console.log("conditions: ", weatherData.currentConditions.conditions);
  console.log("temperature: ", weatherData.currentConditions.temp);
  console.log("feels like: ", weatherData.currentConditions.feelslike);
  console.log("humidity: ", weatherData.currentConditions.humidity);
  console.log("precipitation: ", weatherData.currentConditions.precip);
  console.log("wind direction: ", weatherData.currentConditions.winddir);
  console.log("wind speed: ", weatherData.currentConditions.windspeed);
  console.log("//////////////////");
}

import "./styles.css";

const bodyHtml = document.querySelector("body");

const userInputDiv = document.createElement("div");
bodyHtml.appendChild(userInputDiv);

const locationInput = document.createElement("input");
userInputDiv.appendChild(locationInput);
locationInput.setAttribute("placeholder", "Enter a city...");

const submitBtn = document.createElement("button");
userInputDiv.appendChild(submitBtn);
submitBtn.textContent = "Submit Location";

submitBtn.addEventListener("click", () => {
  const location = locationInput.value;

  currentWeather(location);
});

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
}

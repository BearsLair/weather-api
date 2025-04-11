import "./styles.css";

async function currentWeather() {
  fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Sacramento?key=4744HCA3XPQ4DV5MVBSTNW4UP"
  ).then(function (response) {
    console.log(response.json());
  });
}

currentWeather();

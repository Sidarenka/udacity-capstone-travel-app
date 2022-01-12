import fetch from "node-fetch";
import { doc } from "prettier";

// This event listener listens for a click on the search button
var el = document.getElementById("btn");
if (el) {
  el.addEventListener("click", userInput, false);
}

// Function that fires off when the click has been registered
async function userInput(e) {
  e.preventDefault();

  // Take the city and date when user inputs the data and store them in variables
  const city = document.getElementById("city-input").value;
  const date = document.getElementById("date-picker").value;

  // Get the current date.
  let currentDate = new Date().toLocaleDateString();

  if (parseInt(date) >= parseInt(currentDate)) {
    // Store the day month and year
    const day = date.slice(0, 1);
    const month = date.slice(2, 4);
    const year = date.slice(5, 9);

    // Then change the order so and store in a variable so we can use this format for weatherbit api
    const fixDate = year + "-" + month + "-" + day;

    await postData("http://localhost:8081/clientData", {
      city: city,
      date: fixDate,
    });

    // functions to call servers after post request
    await callServer("http://localhost:8081/getWeatherbit");

    await callServer("http://localhost:8081/getPix");

    const getPlanData = await callServer("http://localhost:8081/getData");

    updateUI();
  } else {
    alert("Please enter a valid date.");
  }
}

// post route for server
async function postData(url, tripData) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tripData),
  });
}

// call to server for data
const callServer = async (url) => {
  const asyncParams = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await fetch(url, asyncParams);
  try {
    const data = await res.json();
    return data;
  } catch {
    console.log(`Error: ${res.statusText}`);
  }
};

// function that updates the UI with a call to the server
async function updateUI() {
  const response = await fetch("http://localhost:8081/getData");
  const uiData = await response.json();
  console.log(uiData);
  document.querySelector(".city-image").src = uiData.image1;
  document.querySelector(".city-name").innerHTML = uiData.name;
  document.querySelector(
    ".icon-image"
  ).src = `https://www.weatherbit.io/static/img/icons/${uiData.icon}.png`;
  document.querySelector(".description").innerHTML = uiData.description;
  document.querySelector(".temp").innerHTML = uiData.temp + "°C";
  document.querySelector(".departure").innerHTML = uiData.date;
}

export { userInput, callServer, updateUI };

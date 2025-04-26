import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div id="api-message" class="card">
      <p>Message from API: <span id="message">Loading...</span></p>
      <p>Random Number: <span id="random-number">Loading...</span></p>
    </div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));

// Fetch data from API
async function fetchData() {
  try {
    const response = await fetch(
      import.meta.env.VITE_API_URL || "http://localhost:3010"
    );
    const data = await response.json();
    document.querySelector("#message").textContent = data.message;
    document.querySelector("#random-number").textContent = data.randomNumber;
  } catch (error) {
    console.error("Error fetching data:", error);
    document.querySelector("#message").textContent = "Error loading data";
    document.querySelector("#random-number").textContent = "Error";
  }
}

// Fetch initial data
fetchData();

// Update data every 5 seconds
setInterval(fetchData, 5000);

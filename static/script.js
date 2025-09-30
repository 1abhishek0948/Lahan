
document.addEventListener('DOMContentLoaded', () => {
// Dark Mode Toggle Functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const moonIcon = '<i class="fas fa-moon"></i> Dark Mode';
const sunIcon = '<i class="fas fa-sun"></i> Light Mode';

// Apply saved theme on load
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    darkModeToggle.innerHTML = sunIcon;
} else {
    darkModeToggle.innerHTML = moonIcon;
}

// Toggle theme on click
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    darkModeToggle.innerHTML = sunIcon;
    } else {
    localStorage.setItem('theme', 'light');
    darkModeToggle.innerHTML = moonIcon;
    }
});

// Scroll functionality for "See More" buttons
const seeMoreThingsToDoBtn = document.getElementById('seeMoreThingsToDoBtn');
const thingsToDoScrollableRow = document.getElementById('thingsToDoScrollableRow');

if (seeMoreThingsToDoBtn && thingsToDoScrollableRow) {
    seeMoreThingsToDoBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    thingsToDoScrollableRow.scrollIntoView({ behavior: 'smooth', inline: 'end', block: 'nearest' });
    });
}

const seeMoreWhatToEatBtn = document.getElementById('seeMoreWhatToEatBtn');
const whatToEatScrollableRow = document.getElementById('whatToEatScrollableRow');

if (seeMoreWhatToEatBtn && whatToEatScrollableRow) {
    seeMoreWhatToEatBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    whatToEatScrollableRow.scrollIntoView({ behavior: 'smooth', inline: 'end', block: 'nearest' });
    });
}

const seeMoreNewsEventsBtn = document.getElementById('seeMoreNewsEventsBtn');
const newsEventsScrollableRow = document.getElementById('newsEventsScrollableRow');

if (seeMoreNewsEventsBtn && newsEventsScrollableRow) {
    seeMoreNewsEventsBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    newsEventsScrollableRow.scrollIntoView({ behavior: 'smooth', inline: 'end', block: 'nearest' });
    });
}

// New scroll functionality for "See More Events" button
const seeMoreLahanEventsBtn = document.getElementById('seeMoreLahanEventsBtn');
const lahanEventsScrollableRow = document.getElementById('lahanEventsScrollableRow');

if (seeMoreLahanEventsBtn && lahanEventsScrollableRow) {
    seeMoreLahanEventsBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    lahanEventsScrollableRow.scrollIntoView({ behavior: 'smooth', inline: 'end', block: 'nearest' });
    });
}

// Weather and Traffic Display Functionality (now integrated into info-box)
const showWeatherBtn = document.getElementById('showWeatherBtn');
const showTrafficBtn = document.getElementById('showTrafficBtn');
const weatherDisplay = document.getElementById('weatherDisplay');
const trafficDisplay = document.getElementById('trafficDisplay');

const cityName = "Lahān";
const lat = 26.7296;
const lon = 86.4951;
const apiKey = "5f89f6d481d2cbbd13313258d0eed8b3"; // IMPORTANT: Replace with your actual OpenWeatherMap API key

// Function to fetch and display weather
const fetchWeather = () => {
    weatherDisplay.classList.remove('hidden');
    trafficDisplay.classList.add('hidden');

    document.getElementById("weatherCity").innerText = `Weather in ${cityName}`;
    document.getElementById("currentTemp").innerText = "";
    document.getElementById("weatherDescription").innerText = "";
    // Fetch current weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        if (data.cod === 200) {
        const temp = Math.round(data.main.temp);
        const description = data.weather[0].description;
        document.getElementById("currentTemp").innerText = `${temp}°C`;
        document.getElementById("weatherDescription").innerText = description.charAt(0).toUpperCase() + description.slice(1);
        } else {
        document.getElementById("currentTemp").innerText = "Weather data not available";
        document.getElementById("weatherDescription").innerText = "";
        }
    })
    .catch(error => {
        console.error("Error fetching weather data:", error);
        document.getElementById("currentTemp").innerText = "Error fetching weather data";
        document.getElementById("weatherDescription").innerText = "";
    });
};    

    

// Function to display traffic status
const showTraffic = () => {
    weatherDisplay.classList.add('hidden');
    trafficDisplay.classList.remove('hidden');
};

// Event listeners for buttons
if (showWeatherBtn) {
    showWeatherBtn.addEventListener('click', fetchWeather);
}
if (showTrafficBtn) {
    showTrafficBtn.addEventListener('click', showTraffic);
}

// Initialize with weather displayed when page loads
fetchWeather();

});

document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the search button
    document.getElementById('search-button').addEventListener('click', function() {
        const destination = document.getElementById('search-input').value;
        if (destination) {
            getWeather(destination);
            getAttractions(destination);
        }
    });
});

function getWeather(destination) {
    const apiKey = 'b59b9a766f6dd07acc1e539a3cfdf0f9';
    fetch(`https://api.openweathermap.org/data/current.json?key=${b59b9a766f6dd07acc1e539a3cfdf0f9}&q=${destination}`)
        .then(response => {
            if (!response.ok) {
                if (response.status === 403) {
                    throw new Error('Weather API key is invalid or disabled');
                }
                throw new Error('Weather API request failed');
            }
            return response.json();
        })
        .then(data => {
            if (data.location && data.location.name) {
                displayWeather(data);
            } else {
                throw new Error('Invalid weather API response');
            }
        })
        .catch(error => console.error('Error fetching weather:', error));
}

function getAttractions(destination) {
    const apiKey = 'VBmv4gAWGL8my9pXesA4A6iocwLTiVPe';
    fetch(`https://test.api.amadeus.com/attractions?location=${destination}&apikey=${VBmv4gAWGL8my9pXesA4A6iocwLTiVPe}`)
        .then(response => {
            if (!response.ok) {
                if (response.status === 403) {
                    throw new Error('Attractions API key is invalid or disabled');
                }
                throw new Error('Attractions API request failed');
            }
            return response.json();
        })
        .then(data => {
            displayAttractions(data);
        })
        .catch(error => console.error('Error fetching attractions:', error));
}

function displayWeather(data) {
    const resultsSection = document.getElementById('results-section');
    const weatherHtml = `
        <div class="weather">
            <h2>Weather in ${data.location.name}</h2>
            <p>${data.current.temp_c} °C, ${data.current.condition.text}</p>
        </div>
    `;
    resultsSection.innerHTML = weatherHtml; // Use '=' instead of '+=' to replace content
}

function displayAttractions(data) {
    const resultsSection = document.getElementById('results-section');
    let attractionsHtml = '<h2>Attractions</h2>';
    data.attractions.forEach(attraction => {
        attractionsHtml += `<p>${attraction.name}</p>`;
    });
    resultsSection.innerHTML += attractionsHtml;
}
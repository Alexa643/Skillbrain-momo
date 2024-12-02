// Centralized JavaScript file to load and populate data for all pages

document.addEventListener('DOMContentLoaded', () => {
    fetch('../data/data.json')
        .then(response => response.json())
        .then(data => {
            // Detect the current page based on the URL
            const path = window.location.pathname;

            if (path.includes('crew.html')) {
                loadCrew(data.crew);
            } else if (path.includes('technology.html')) {
                loadTechnology(data.technology);
            } else if (path.includes('destination.html')) {
                loadDestinations(data.destinations);
            }
        })
        .catch(error => console.error('Error loading data:', error));
});

// Function to load crew members
function loadCrew(crew) {
    const crewSection = document.getElementById('crew-list');
    crew.forEach(member => {
        const article = document.createElement('article');
        article.classList.add('crew-member');

        article.innerHTML = `
        <img src="${member.images.webp}" alt="${member.name}">
        <h2>${member.role}</h2>
        <p class="name">${member.name}</p>
        <p class="bio">${member.bio}</p>
      `;

        crewSection.appendChild(article);
    });
}

// Function to load technology items
function loadTechnology(technology) {
    const technologySection = document.getElementById('technology-list');
    technology.forEach(item => {
        const article = document.createElement('article');
        article.classList.add('technology-item');

        article.innerHTML = `
        <img src="${item.images.portrait}" alt="${item.name}">
        <d0iv>
          <h2>${item.name}</h2>
          <p>${item.description}</p>
        </div>
      `;

        technologySection.appendChild(article);
    });
}

// Function to load destination items
function loadDestinations(destinations) {
    const destinationSection = document.getElementById('destination-list');
    destinations.forEach(destination => {
        const article = document.createElement('article');
        article.classList.add('destination-item');

        article.innerHTML = `
        <img src="${destination.images.webp}" alt="${destination.name}">
        <h2>${destination.name}</h2>
        <p class="description">${destination.description}</p>
        <p class="distance">Distance: ${destination.distance}</p>
        <p class="travel">Travel time: ${destination.travel}</p>
      `;

        destinationSection.appendChild(article);
    });
}

// script.js
document.addEventListener("DOMContentLoaded", function () {
    console.log("Page Loaded!");
    // Poți adăuga aici alte funcționalități de JavaScript
});


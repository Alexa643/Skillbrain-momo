const data = {
    home: {
        background: "./assets/home/background-home-desktop.jpg",
        description: "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!",
    },
    destinations: [
        {
            name: "Moon",
            images: {
                png: "./assets/destination/image-moon.png",
            },
            description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            distance: "384,400 km",
            travel: "3 days",
        },
        {
            name: "Mars",
            images: {
                png: "./assets/destination/image-mars.png",
            },
            description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system.",
            distance: "225 mil. km",
            travel: "9 months",
        },
        // Other destinations...
    ],
    crew: [
        {
            name: "Douglas Hurley",
            images: {
                png: "./assets/crew/image-douglas-hurley.png",
            },
            role: "Commander",
            bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut.",
        },
        // Other crew members...
    ],
    technology: [
        {
            name: "Launch vehicle",
            images: {
                png: "./assets/technology/image-launch-vehicle-portrait.jpg",
            },
            description: "A launch vehicle is a rocket-propelled vehicle used to carry a payload from Earth's surface to space.",
        },
        // Other technologies...
    ],
};

// Load Home Section
const homeDescription = document.querySelector("#home-description");
homeDescription.textContent = data.home.description;

// Load Destinations Section
const destinationContainer = document.querySelector("#destination-container");
data.destinations.forEach((destination) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Calea corectă pentru imagini
    const imgSrc = destination.images.png.startsWith("./")
        ? destination.images.png.replace("./", "")
        : destination.images.png;

    card.innerHTML = `
    <img src="${imgSrc}" alt="${destination.name}">
    <h3>${destination.name}</h3>
    <p>${destination.description}</p>
    <p><strong>Distance:</strong> ${destination.distance}</p>
    <p><strong>Travel Time:</strong> ${destination.travel}</p>
  `;
    destinationContainer.appendChild(card);
});


// Load Crew Section
const crewContainer = document.querySelector("#crew-container");
data.crew.forEach((crew) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${crew.images.png}" alt="${crew.name}">
      <h3>${crew.name}</h3>
      <p><strong>Role:</strong> ${crew.role}</p>
      <p>${crew.bio}</p>
    `;
    crewContainer.appendChild(card);
});

// Load Technology Section
const technologyContainer = document.querySelector("#technology-container");
data.technology.forEach((tech) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${tech.images.png}" alt="${tech.name}">
      <h3>${tech.name}</h3>
      <p>${tech.description}</p>
    `;
    technologyContainer.appendChild(card);
});



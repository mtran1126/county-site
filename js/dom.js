const myCounty = {
 name: "Delaware", // county name
 state: "PA", // state
 population: 576830, // current population
 seat: "Media", // county seat
 founded: 1789, // year founded
 areaSqMi: 191, // area in square miles
 myTown: "Radnor", // your hometown

 largestMunicipality: {
 name: "Upper Darby",
 population: 85681,
 }

};

const station = {
callsign: "WXVU",
frequency: 89.1,
city: "Villanova",
sp: "PA",
field_strength: 24.3,
distance: 37.3,
slogan: "89.1 The Roar",
owner: "Judy Langan",
}

const heading = document.querySelector("h1");
console.log("Heading:", heading.textContent);

heading.textContent = `${heading.textContent} — Pop: ${myCounty.population}`;

const description = document.querySelector("#county-desc")
console.log(description.textContent)

description.textContent = `${description.textContent} Founded in ${myCounty.founded}`

const allParagraphs = document.querySelectorAll("p");
console.log("The number of paragraphs is: ", allParagraphs.length);

for (const p of allParagraphs) {{
    console.log(p.textContent);
}}

const params = new URLSearchParams({
 lat: 39.9198, // your county seat latitude
 lon: -75.3888, // your county seat longitude (negative = West)
 callsign: "WMMR", // your chosen station
 request_type: 4,
 search_freq: "none", pi_code: "none",
 sig_strength: "null", startMiles: "none",
 miles: "null", format: "none",
 rxHeight: 10, measurementUnit: "feet"
});

const stationResult = document.querySelector("#station-result");
const stationDetail = document.querySelector("#station-detail");

stationResult.textContent = `${station.callsign} - ${station.frequency} FM - ${station.city} - ${station.sp}`
stationDetail.textContent = `This station's field strength value is: ${station.field_strength}`

const toggleBtn = document.querySelector("#toggle-btn");
const stationSection = document.querySelector("#station-section");

toggleBtn.addEventListener("click", () => {
 // YOUR CODE:
 // 1. Toggle the "hidden" class on stationSection
    stationSection.classList.toggle("hidden");
 // 2. If stationSection now has "hidden", set toggleBtn.textContent to "Show Station"
 // Otherwise set it to "Hide Station"
    if (stationSection.classList.contains("hidden")) {
        toggleBtn.textContent ="Show Judy's Station"
    }
    else {
        toggleBtn.textContent = "Hide Judy's Station"
    }
});

const photoBtn = document.querySelector("#photo-btn");
const photoContainer = document.querySelector("#photo-container");

let photoShown = false;
let photoImg = null;

photoBtn.addEventListener("click", () => {

    if (!photoShown) {
        photoImg = document.createElement("img");

        photoImg.src = "img/ridley-creek.png";
        photoImg.alt = "Ridley Creek in Delaware County, Pennsylvania";

        photoContainer.appendChild(photoImg);

        photoBtn.textContent = "Hide Photo";
        photoShown = true;
    }
    else {
        photoImg.remove();

        photoImg = null;

        photoBtn.textContent = "Show Photo";
        photoShown = false;
    }
});
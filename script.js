let SWSearchUrl = "https://swapi.dev/api/people/?search=";
let wikiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const name = document.getElementById("name-info");
const bio = document.getElementById("person-info");

getJSON(SWSearchUrl);

async function getJSON(url) {
    const response = await fetch(url);
    const responseData = await response.json();

    name.innerHTML = `
        <h1>${name}</h1>
    `;
}

    // bio.innerHTML = `
    // <ul>
    // <li>Home Planet:</li>
    // <li>Birth Year:</li>
    // <li>Gender:</li>
    // <li>Species:</li>
    // <li>Height:</li>
    // <li>Weight:</li>
    // <li>Hair Color:</li>
    // <li>Eye Color:</li>
    // <li>Films:</li>
    // </ul>
    // `

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if (searchTerm) {
        getJSON(SWSearchUrl + searchTerm);
        search.value = "";
    }
});
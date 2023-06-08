let SwUrl = "https://swapi.dev/api/people/?search=";
let wikiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const name = document.getElementById("name-info");
const bio = document.getElementById("person-info");

async function getSwInfo(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    listData(data);
  } catch (error) {
    console.log(error);
  }
}

getSWInfo(SwUrl);

function listData(data) {
  data[1].map(function (country) {
    const countryName = `
          <li id="country">${country.name}</li>
        `;
  });
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
});
let swUrl = "https://swapi.dev/api/people/?search=";
let imgUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const nameInfo = document.getElementById("name-info");
const bioInfo = document.getElementById("person-info");

async function getSwInfo(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    nameData(data.results);
    bioData(data.results)
  } catch (error) {
    console.log(error);
  }
}
getSwInfo(swUrl);

function nameData(persons) {
  persons.forEach((person) => {
    const {name} = person;
    nameInfo.innerHTML = `
        <h2 id="name">${name}</h2>
        <img src="${imgUrl + name}"/>`;
  });
}

function bioData(bios) {
    bios.forEach((bio) => {
      const {homeworld, birth_year, gender, species, height, mass, hair_color, eye_color, films} = bio;
      bioInfo.innerHTML = `
        <ul>
            <li><h3>Home Planet:</h3> ${homeworld}</li>
            <li><h3>Birth Year:</h3> ${birth_year}</li>
            <li><h3>Gender:</h3> ${gender}</li>
            <li><h3>Species:</h3> ${species}</li>
            <li><h3>Height:</h3> ${height}</li>
            <li><h3>Weight:</h3> ${mass}</li>
            <li><h3>Hair Color:</h3> ${hair_color}</li>
            <li><h3>Eye Color:</h3> ${eye_color}</li>
            <li><h3>Films:</h3> ${films}</li>
        </ul>`;
    });
  }

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm) {
    getSwInfo(swUrl + searchTerm);
    search.value = "";
  }
});
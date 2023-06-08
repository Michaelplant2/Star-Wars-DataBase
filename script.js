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
        <h1>${name}</h1>
        <img src="${imgUrl + name}"/>`;
  });
}

function bioData(bios) {
    bios.forEach((bio) => {
      const {homeworld, birth_year, gender, species, height, mass, hair_color, eye_color, films} = bio;
      bioInfo.innerHTML = `
        <ul>
            <li>Home Planet: ${homeworld}</li>
            <li>Birth Year: ${birth_year}</li>
            <li>Gender: ${gender}</li>
            <li>Species: ${species}</li>
            <li>Height: ${height}</li>
            <li>Weight: ${mass}</li>
            <li>Hair Color: ${hair_color}</li>
            <li>Eye Color: ${eye_color}</li>
            <li>Films: ${films}</li>
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
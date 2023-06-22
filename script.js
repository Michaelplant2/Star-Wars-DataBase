let swUrl = "https://swapi.dev/api/people/?search=";
// let imgUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const nameInfo = document.getElementById("name-info");
const personInfo = document.getElementById("person-info");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm) {
    getSwInfo(swUrl + searchTerm);
    search.value = "";
  }
});

async function getSwInfo(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    nameData(data.results);
    bioData(data.results);
  } catch (error) {
    console.log(error);
  }
}

function nameData(persons) {
  persons.forEach((person) => {
    const { name } = person;
    nameInfo.innerHTML = `
        <h2 id="name">${name}</h2>
        <p class="aurebesh">${name}</p>`;
  });
}

async function callHome(bio) {
  const response = await fetch(bio.homeworld);
  const data = await response.json();
  bio.homeworld = data.name;
  return bio
}

// async function callSpecies(bio) {
//   const response = await fetch(bio.species);
//   const data = await response.json();
//   bio.species = data.name;
//   return bio
// }

function bioData(bios) {
  bios.forEach(async(bio) => {
    home = await callHome(bio);
    const {
      homeworld,
      birth_year,
      gender,
      species,
      height,
      mass,
      hair_color,
      eye_color,
    } = bio;
    personInfo.innerHTML = `
        <ul>
            <li><h3>Home Planet: </h3><p>${homeworld}</p></li>
            <li><h3>Birth Year: </h3><p>${birth_year}</p></li>
            <li><h3>Gender: </h3><p>${gender}</p></li>
            <li><h3>Species: </h3><p>${species}</p></li>
            <li><h3>Height: </h3><p>${height}</p></li>
            <li><h3>Weight: </h3><p>${mass}</p></li>
            <li><h3>Hair Color: </h3><p>${hair_color}</p></li>
            <li><h3>Eye Color: </h3><p>${eye_color}</p></li>
        </ul>`;
  });
}

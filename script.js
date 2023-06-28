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
    const data = await fetch(url).then((res) => res.json());
    console.log(data);
    personData(data.results);
  } catch (error) {
    console.log(error);
  }
};

async function getHome(person) {
  const homeData = await fetch(person.homeworld).then((res) => res.json());
  console.log(homeData);
};

// async function getSpecies(person) {
//   const response = await fetch(person.species);
//   const speciesData = await response.json();
//   person.species = speciesData.name;
//   return person;
// };

function personData(data) {
  let person = data[0];
  nameInfo.innerHTML = `
    <h2 id="name">${person.name}</h2>
    <p class="aurebesh">${person.name}</p>`;
  personInfo.innerHTML = `
    <ul>
      <li><h3>Home Planet: </h3><p>${person.homeworld}</p></li>
      <li><h3>Birth Year: </h3><p>${person.birth_year}</p></li>
      <li><h3>Gender: </h3><p>${person.gender}</p></li>
      <li><h3>Species: </h3><p>${person.species}}</p></li>
      <li><h3>Height: </h3><p>${person.height}</p></li>            
      <li><h3>Weight: </h3><p>${person.mass}</p></li>
      <li><h3>Hair Color: </h3><p>${person.hair_color}</p></li>
      <li><h3>Eye Color: </h3><p>${person.eye_color}</p></li>
    </ul>`;
};
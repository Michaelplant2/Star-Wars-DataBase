let swUrl = "https://swapi.dev/api/people/?search=";
// let imgUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const nameInfo = document.getElementById("name-info");
const personInfo = document.getElementById("person-info");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (getSwInfo(swUrl + searchTerm)) {
    search.value = "";
  }
  searchView.clearFocus();
});

async function getSwInfo(url) {
  let load = `
  <div class="load-div">
  <div id="loader">
    <div class="ls-particles ls-part-1"></div>
    <div class="ls-particles ls-part-2"></div>
    <div class="ls-particles ls-part-3"></div>
    <div class="ls-particles ls-part-4"></div>
    <div class="ls-particles ls-part-5"></div>
    <div class="lightsaber ls-left ls-blue"></div>
    <div class="lightsaber ls-right ls-red"></div>
  </div>
  <p class="load-p">Loading Information</p>
  <p class="load-p">May The Force Be With You</p>
  </div>`;
  personInfo.innerHTML = load;
    const data = await fetch(url).then((res) => res.json());
    console.log(data);
    personData(data.results);
};

async function getHome(person) {
  const homeData = await fetch(person.homeworld).then((res) => res.json());
  person.homeworld = homeData.name;
};

async function getSpecies(person) {
  if (person.species.length == 0) {
    return (person.species = "Unknown");
  }
  const speciesData = await fetch(person.species).then((res) => res.json());
  person.species = speciesData.name;
};

async function personData(data) {
  let person = data[0];
  await getHome(person);
  await getSpecies(person);
  nameInfo.innerHTML = `
    <h2 id="name">${person.name}</h2>
    <p class="aurebesh">${person.name}</p>`;
  personInfo.innerHTML = `
    <ul>
      <li><h3>Home Planet: </h3><p>${person.homeworld}</p></li>
      <li><h3>Birth Year: </h3><p>${person.birth_year}</p></li>
      <li><h3>Gender: </h3><p>${person.gender}</p></li>
      <li><h3>Species: </h3><p>${person.species}</p></li>
      <li><h3>Height: </h3><p>${person.height}</p></li>            
      <li><h3>Weight: </h3><p>${person.mass}</p></li>
      <li><h3>Hair Color: </h3><p>${person.hair_color}</p></li>
      <li><h3>Eye Color: </h3><p>${person.eye_color}</p></li>
    </ul>`;
};
const characterList = document.querySelector("#charactersList");
const searchBar = document.querySelector("#searchBar");
let hpCharacters = [];

searchBar.addEventListener("keyup", (e) => {
//   const searchStringValue = e.target.value;
//   const searchString =
//     searchStringValue.charAt(0).toUpperCase() + searchStringValue.slice(1);
const searchString = e.target.value.toLowerCase()
  console.log(searchString);
  const filteredCharacters = hpCharacters.filter((character) => {
    return (
      character.name.toLowerCase().includes(searchString) ||
      character.house.toLowerCase().includes(searchString)
    );
  });
  // console.log(filteredCharacters)
  displayCharacters(filteredCharacters);
});

async function loadCharacters() {
  try {
    const res = await fetch("https://hp-api.herokuapp.com/api/characters");
    hpCharacters = await res.json();
    displayCharacters(hpCharacters);
    // console.log(hpCharacters)
  } catch (error) {
    console.error(error);
  }
}

function displayCharacters(characters) {
  const htmlString = characters
    .map((character) => {
      return `
        <li class="character">
            <h2>${character.name}</h2>
            <p>House: ${character.house}</p>
            <img src="${character.image}"></img>
        </li>
    `;
    })
    .join("");
  // console.log(htmlString)
  characterList.innerHTML = htmlString;
}

loadCharacters();

const characterList = document.querySelector("#charactersList");

async function loadCharacters(){
    try{
        const res = await fetch('https://hp-api.herokuapp.com/api/characters')
        let hpCharacters = await res.json()
        displayCharacters(hpCharacters)
        // console.log(hpCharacters)
    } catch(error){
        console.error(error)
    }
}

function displayCharacters(characters){
    const htmlString = characters.map((character) =>{
         return `
        <li class="character">
            <h2>${character.name}</h2>
            <p>House: ${character.house}</p>
            <img src="${character.image}"></img>
        </li>
    `
        
    })
    .join('')
    console.log(htmlString)
    characterList.innerHTML = htmlString
}


loadCharacters()
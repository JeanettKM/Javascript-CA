const url = "https://hp-api.onrender.com/api/characters/";

const resultsContainer = document.querySelector(".results")

async function getCharacters() {

    const response = await fetch (url);

    const results = await response.json();

    const facts = results;

    resultsContainer.innerHTML ="";

    for(let i = 0; i < facts.length; i++) {
        console.log(facts[i].name);

        if(i === 6) {
            break;
        }

        resultsContainer.innerHTML += `<div class="result"><li>
        <h2>${facts[i].name}</h2>
        <ul> House: ${facts[i].house}</ul>
        <ul> Species: ${facts[i].species}</ul>
        <ul> Gender: ${facts[i].gender}</ul>
        <ul> Wizard? ${facts[i].wizard}</ul>
        <ul> Ancestery: ${facts[i].ancestery}</ul>
        <ul> Patronus: ${facts[i].patronus}</ul>
        <ul> Actor: ${facts[i].actor}</ul>
        </li> </div>`
    }
    

}
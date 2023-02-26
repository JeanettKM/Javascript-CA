const url = "https://legacy--api.herokuapp.com/api/v1/characters";

const resultsContainer = document.querySelector(".results")

async function getCharacters() {
        const response = await fetch (url);
    
        const results = await response.json();
    
        resultsContainer.innerHTML ="";
    
        const facts = results;
    
        facts.forEach(function(chars){
    
        resultsContainer.innerHTML += `<a href="/HTML/details.html?id=${chars.id}"><h3>${chars.name}</h3></a>`
        });

}
        

getCharacters();



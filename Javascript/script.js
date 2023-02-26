const url = "https://legacy--api.herokuapp.com/api/v1/characters/";

const resultsContainer = document.querySelector(".results")

async function getCharacters() {
        
        try {        const response = await fetch (url);
    
                const results = await response.json();

                console.log(results)
            
                resultsContainer.innerHTML ="";
            
                const facts = results;
            
                facts.forEach(function(chars){
                        resultsContainer.innerHTML += `<a href="/HTML/details.html?id=${chars.id}"><h3>${chars.name}</h3> <break> <p>Species: ${chars.species}</p> <break> <p>ID: ${chars.id}</p> </p></a>`
                        });}
                        catch(error) {
                                console.log("error occured", error);
                                resultsContainer.innerHTML = "We're sorry, it seems a spell went bad, try again later or refresh the page(error).";
                        }

        }

getCharacters();

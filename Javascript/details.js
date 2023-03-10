const container = document.querySelector(".container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString)
const id = params.get("id");


const urlDetails = "https://legacy--api.herokuapp.com/api/v1/characters/" + id;


async function charSpecific() {
    try {
        const response = await fetch (urlDetails);
        const details = await response.json();
    
        console.log(details);
    
        container.innerHTML = `<h1>${details.name}</h1>
        
        <div><li>
        <ul>Date of birth: ${details.born}</ul>
        <ul>Ancestery: ${details.blood}</ul>
        <ul>Relationship status: ${details.marital}</ul>
        <ul>nationality: ${details.nationality}</ul>
        <ul>Loyalty: ${details.loyalty}</ul>
        <ul>gender: ${details.gender}</ul>
        <ul>image: ${details.image_url}</ul>
        <ul>nationality: ${details.nationality}</ul>
            </li></div>
            <time class="details-date">Released: ${details.created_at}</time>`
    }
    catch(error) {
        console.log("error occurred", error);
        container.innerHTML = "We're sorry, it seems a spell went bad, try again later or refresh the page(error).";
    }

}

charSpecific()

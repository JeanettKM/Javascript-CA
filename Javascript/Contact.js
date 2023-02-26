const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adressError");
const help = document.querySelector("#help");
const helpError = document.querySelector("#helpError");

function validateForm(){
    event.preventDefault();

    if(checkLength(name.value, 0) === true) {
        nameError.style.display="none";
    }
    else {
        nameError.style.display="block";
    }

    if(validateEmail(email.value) === true) {
        emailError.style.display="none";
    }
    else {
        emailError.style.display="block";
    }

    if(checkLength(adress.value, 25) === true) {
        adressError.style.display="none";
    }
    else {
        adressError.style.display="block";
    }

    if(checkLength(help.value, 10) === true) {
        helpError.style.display="none";
    }
    else {
        helpError.style.display="block";
    }

    console.log();
}

form.addEventListener("submit", validateForm);


function checkLength(value, len) {
    if(value.trim().length > len) {
        return true;
    }
    else {
        return false
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}
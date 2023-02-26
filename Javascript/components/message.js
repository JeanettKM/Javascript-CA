function createMessage(type = "success", message = "No message") {
    const html = `<div class="message ${type}">${message}</div>`

    return html;
}

function getSomething () {

}

const result = document.querySelector(".result");

Try {
    getSomething();
    console.log("success!");
    result.innerHTML = "it worked!"
}
catch(error) {
    console.log ("error occured", error);
    result.innerHTML = "Looks like the magic went away.. try again";
}

finally {
    console.log("Finally");
}
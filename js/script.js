const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/breakingbad/6";

const detailContainer = document.querySelector(".details");

// we need an async function as we are using await
async function fetchCharacter() {
    try {
        const response = await fetch(url);
        const details = await response.json();
        // pass the details to the function that will create the HTML
        createHtml(details);
    } catch (error) {
        console.log(error);
        detailContainer.innerHTML = error;
    }
}

// call the function
fetchCharacter();

function createHtml(details) {
    detailContainer.innerHTML = `<h1 class="name">${details.name}</h1>
                                <div class="image" style="background-image: url('${details.img}')"></div>
                                <div class="status">Status: <b>${details.status}</b></div>`;
}

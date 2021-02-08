// Lesson Task 2 Question

const container = document.querySelector(".details");

const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/breakingbad/6";

async function fetchApi() {
    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);
        createHtml(details);

    } catch(error) {
        console.log(error);
        container.innerHTML = error;
    }
    
}

fetchApi();

function createHtml(details) {

    container.innerHTML = `<h1 class="name">${details.name}</h1>
                            <div class="image" style="background-image: url('${details.img}')"></div>
                            <div class="status">Status: <b>${details.status}</b></div>`;
    
}



const desserts_API = './data.json';
const containerDiv = document.getElementById('container');

const fetchData = () => {
    fetch(desserts_API)
        .then(response => response.json())
        .then(desserts => renderDesserts(desserts));
    
}

function renderDesserts(desserts) {
    desserts.forEach((dessert, i) => {
        const div = document.createElement('div');
        const image = document.createElement('img');
        const button = document.createElement('button');
        const name = document.createElement('p');
        const category = document.createElement('h3');
        const price = document.createElement('p');

        containerDiv.classList.add('flex-container')

        div.classList.add('card');
        image.src = dessert.image.desktop;

        containerDiv.appendChild(div)
        div.appendChild(image)
    })
}


fetchData();

renderDesserts
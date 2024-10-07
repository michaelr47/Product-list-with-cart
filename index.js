const desserts_API = './data.json';
const containerDiv = document.getElementById('container');

const fetchData = () => {
    fetch(desserts_API)
        .then(response => response.json())
        .then(desserts => renderDesserts(desserts));
    
}

function renderDesserts(desserts) {
    containerDiv.classList.add('flex-container')

    desserts.forEach((dessert, i) => {
        const div = document.createElement('div');
        const image = document.createElement('img');
        const button = document.createElement('button');
        const name = document.createElement('p');
        const category = document.createElement('h3');
        const price = document.createElement('p');

        image.src = dessert.image.desktop;
        name.textContent = dessert.name; 
        category.textContent = dessert.category; 
        price.textContent = `$${dessert.price}`; 
        button.textContent = 'Add to Cart';

        div.appendChild(image)
        div.appendChild(name);
        div.appendChild(category);
        div.appendChild(price);
        div.appendChild(button);
        div.classList.add('card');
        
        containerDiv.appendChild(div)
        
    })
}


fetchData();


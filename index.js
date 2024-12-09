const desserts_API = './data.json';
const containerDiv = document.getElementById('container');

const fetchData = () => {
    fetch(desserts_API)
        .then(response => response.json())
        .then(desserts => renderDesserts(desserts));
    
}

function renderDesserts(desserts) {
    containerDiv.setAttribute('id', 'container');

    desserts.forEach((dessert, i) => {
        const div = document.createElement('div');
        const image = document.createElement('img');
        const button = document.createElement('button');
        const category = document.createElement('h3');
        const name = document.createElement('p');
        const price = document.createElement('p');
 
        image.src = dessert.image.desktop;
        button.textContent = 'Add to Cart';
        name.textContent = dessert.name; 
        category.textContent = dessert.category; 
        price.textContent = `$${dessert.price}`; 

        div.appendChild(image)
        div.appendChild(category);
        div.appendChild(name);
        div.appendChild(price);
        div.appendChild(button);
        div.classList.add('card');
        
        containerDiv.appendChild(div)
        
    })
}


fetchData();


const desserts_API = './data.json';
const containerDiv = document.getElementById('container');

const fetchData = () => {
    fetch(desserts_API)
        .then(response => response.json())
        .then(desserts => console.log(desserts));
    
}

const renderDesserts = desserts => {
    desserts.forEach(dessert => {
        const div = document.createElement('div');
        const button = document.createElement('button');
        const name = document.createElement('p');
        const category = document.createElement('h3');
        const price = document.createElement('p');
    })
}


fetchData();
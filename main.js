let cards = document.querySelector(".cards")

fetch('https://fakestoreapi.com/products?limit=10')
    .then(res => res.json())
    .then(products => createCards(products))
    .catch(err => console.error('Error fetching data:', err));



function createCards(products) {

    products.forEach(product => {
        let card = document.createElement('div');
        card.classList.add('card')



        let images = document.createElement('img');
        images.classList.add('images')
        images.src = product.image


        let titleProduct = document.createElement('h2');
        titleProduct.classList.add('title')
        titleProduct.textContent = product.title


         let price = document.createElement('p');
        price.classList.add('price')
        price.textContent = product.price


        let count = document.createElement('h3');
        count.classList.add('count')
        count.textContent = `${product.rating.count}`

        // console.log(count);


        card.append(images, titleProduct, price, count)
        cards.appendChild(card)


    });

}
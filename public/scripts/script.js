const page_one = "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1";
const page_two = "frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=2";

const productList = document.getElementById('product-list')
const moreButton = document.getElementById('more-btn')

function disableButton(){
    const btn = document.getElementById('more-btn');
    btn.remove()
}

function showResult(data){
    console.log(data)
    handleProduct(data)
}

function handleProduct(products){
    var elementFather = document.getElementById('product-list');

    for(let index of products){
        let product = `<div id="product" class="product">
                <img src="${index.image}" alt="">
                <h4 id="name-product">${index.name}</h4>
                <p>${index.description}</p>
                <p>De: R$${index.oldPrice}</p>
                <p>Por: R$${index.price}</p>
                <p>ou ${index.installments.count}x de R$${index.installments.value}</p>
                <button>Comprar</button>
            </div>
        `
        elementFather.insertAdjacentHTML("beforeend", product)
    }
}

function getProducts(url){
    fetch(page_one, {
        method: 'get',
        mode: 'cors'
    }).then( response => { response.json()
        .then( data => { showResult(data.products) } )
    } )
}; getProducts(page_one)

function moreProducts(url){
    getProducts(url)
}

moreButton.addEventListener("click", () => { 
    moreProducts(page_two) 
    disableButton()
});
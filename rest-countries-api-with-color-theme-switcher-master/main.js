fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data)=>{
 data.products.map((product)=>{
console.log(product.images)
const productContainer = document.querySelector('.products-container')
const productCard = document.createElement('a');
productCard.classList.add("product-card");
const cardHtml = `<img src="${product.thumbnail}" alt="flag">
              <div class="card-text">
                  <h3>${product.title}</h3> 
                 <p>${product.description}</p>
                <p><b>Region: </b>Europe</p>
                <p><b>Capital: </b>Berlin</p>
                  </div>`;
 productCard.innerHTML = cardHtml

 productContainer.append(productCard)



 })
});



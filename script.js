const priceHoddie = 1500;
const priceTshirt = 800;
const priceEmbrodery = 2000;
let productList = [];
class Product {
  constructor(id, type, quantity, price, number) {
    this.productId = id;
    this.name = type;
    this.qty = quantity;
    this.price = parseInt(price);
    this.imgId = number;
  }
  nuevo() {
    return `
      <div class="col">
      <div class="card m-3  p-1 text-center" id="product${this.productId}"style="width: 18rem;">
    
      <a ><img src="./Multimedia/product${this.imgId}.jpg"class="card-img-top" alt="..."></a>
     
      <div class="card-body"  >
        <h5 class="card-title"><strong>${this.name}</strong></h5>
        <p class="card-text">Precio: ${this.price} </p>
        <div class="dropdown">
    <button id="shop${this.productId}"class="btn btn-outline-warning" >Comprar</button>
    </div>
    <div id="text${this.productId}" ></div>
    </div>
    `
  }
}
const product1 = new Product(1, "Buzo Sunflower", 0, priceHoddie, 1);
const product2 = new Product(2, "Buzo Life", 0, priceHoddie, 2);
const product3 = new Product(3, "Buzo Promisses", 0, priceHoddie, 3);
const product4 = new Product(4, "Buzo Rainbow", 0, priceHoddie, 4);
const product5 = new Product(5, "Buzo Cactus", 0, priceHoddie, 5);
const product6 = new Product(6, "Buzo Deer", 0, priceHoddie, 6);
const product7 = new Product(7, "Bolsa", 0, 5000 - priceHoddie, 7);
const product8 = new Product(8, "AOT", 0, priceEmbrodery, 8);
const product9 = new Product(9, "Chihiro", 0, priceEmbrodery, 9);
const product10 = new Product(10, "Demon Slayer", 0, priceEmbrodery, 10);
const product11 = new Product(11, "Given", 0, priceEmbrodery, 11);
const product12 = new Product(12, "Amorfo", 0, priceEmbrodery, 12);
let productList2 = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12];

$(() => {
  productList2.forEach(oneProduct => {
    $('#list').append(oneProduct.nuevo());
    $(`#shop${oneProduct.productId}`).on('click', () => {
      productList.push(new Product(oneProduct.productId, oneProduct.name, 1, oneProduct.price, oneProduct.imgId));
      let resume = JSON.parse(localStorage.getItem("Productos"));
      if (resume) {
        resume = resume.concat(productList);
        localStorage.setItem("Productos", JSON.stringify(resume));
      }
      else {
        localStorage.setItem("Productos", JSON.stringify(productList));
      }
      $(`#text${oneProduct.productId}`).append(`<br><p class="text-center  btn-outline-success text-white fs-5">${oneProduct.name} agregado al carrito</p>`)
      setTimeout(function () {
        location.href = "index.html";
      }, 1000)
    })
  })

})
$(()=>{
  let resume = JSON.parse(localStorage.getItem("Productos"));
if (resume) {
  $('#new').append(`<div class="text-center p-3 m-2" ><button id="boton2" class="btn btn-outline-primary">Ver carrito</button></div>`)
  $('#boton2').on('click', () => {
    $('#new').empty();
    $('#new1').append(`<div class="text-center p-3 m-2" ><button id="boton4" class="btn btn-outline-primary">Seguir comprando</button> <button id="boton3"  class="btn btn-outline-primary">Vaciar carrito</button>`)
    $('#boton4').on('click', () => {
      location.href = "index.html";
    })
    $('#list').empty();
    resume.forEach(item => {
      $('#list').append(`<div class="col">
        <div class="card m-3  p-1 text-center" id="product${item.productId}"style="width: 18rem;">
        <a ><img src="./Multimedia/product${item.imgId}.jpg"class="card-img-top" alt="..."></a>
        <div class="card-body"  >
        <h5 class="card-title"><strong>${item.name}</strong></h5>
        <p class="card-text">Precio: ${item.price} </p>
      </div> `)
    })
    $('#boton3').on('click', () => {
      localStorage.clear();
      location.href = "index.html";
    })
  })
 
}
})


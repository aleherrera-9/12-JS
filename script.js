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
    
      <a ><img id="img${this.imgId}" src="./Multimedia/product${this.imgId}.jpg"class="card-img-top" alt="..."></a>
     
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
//animate, SlideDo0wn y css agregado
$(() => {
  productList2.forEach(oneProduct => {
    $('#list').append(oneProduct.nuevo());
    $(`#shop${oneProduct.productId}`).on('click', () => {
      $(`#img${oneProduct.imgId}`).animate({
        width:"200px",
        heigth:"200px"
      })
      All();
      list(oneProduct);
      finalPrice();
      $(`#text${oneProduct.productId}`).append(`<br><p class="text-center  btn-outline-success text-white fs-5">${oneProduct.name} agregado al carrito</p><div class="text-center p-3 m-2" ><button id="boton2" class="btn btn-outline-primary"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-basket" viewBox="0 0 16 16">
      <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
    </svg></button></div><p>Total: ${finalPrice()}</p>`)
      $(`#text${oneProduct.productId}`).slideDown("slow");
      setTimeout(function () {
        $(`#img${oneProduct.imgId}`).css({
          width:"276px",
          heigth:"367px"
        })
        $(`#text${oneProduct.productId}`).toggle("slow");
        $(`#text${oneProduct.productId}`).empty();
      }, 2000)
    })
  })

})
function finalPrice(){
  let products = JSON.parse(localStorage.getItem("Productos"));
  let priceF=0;
  products.forEach(item=>{
    priceF+=item.price;
  })
  return priceF;
}
function list(oneProduct) {
  let productResume=[];
  let products = JSON.parse(localStorage.getItem("Productos"));
  if (products) {
    products.push(new Product(oneProduct.productId, oneProduct.name, 1, oneProduct.price, oneProduct.imgId));
    localStorage.setItem("Productos", JSON.stringify(products));
  } else {
    productResume.push(new Product(oneProduct.productId, oneProduct.name, 1, oneProduct.price, oneProduct.imgId));
    localStorage.setItem("Productos", JSON.stringify(productResume));
  }
}
function All(){
  $(()=>{
    let resume = JSON.parse(localStorage.getItem("Productos"));
  if (resume) {
    $('#boton2').on('click', () => {
      $('#new1').append(`<div class="text-center p-3 m-2" ><button id="boton4" class="btn btn-outline-primary">Seguir comprando</button> <button id="boton3"  class="btn btn-outline-primary">Vaciar carrito</button>`)
      $('#new').append(`<p class="text-center text-warning fs-4">Total: ${finalPrice()} </p>`)
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
}
$(()=>{
let resume = JSON.parse(localStorage.getItem("Productos"));
  if (resume) {
    $('#new').on('click', () => {
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
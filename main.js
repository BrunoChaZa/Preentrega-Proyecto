const BBDD = [
  {
    id: 1,  
    nombre: "fideos",
    img: "./assets/img/fideos.jpg",
    precio: 130,
    cantidad: 1
  },
  {
    id: 2,   
    img: "./assets/img/galletitas.jpg",
    nombre: "galletitas",
    precio: 110,
    cantidad: 1
  },
  {
      id: 3, 
      img: "./assets/img/gaseosa.jpg",
    nombre: "gaseosa",
    precio: 150,
    cantidad: 1 
  },
  {
      id: 4, 
      img : "./assets/img/leche.jpg",
    nombre: "leche",
    precio: 200,
    cantidad: 1
  },
  {
      id: 5,
      img : "./assets/img/caramelos.jpg",
    nombre: "caramelo de menta",
    precio: 10,
    cantidad: 1
  },
  {
      id: 6,
      img : "./assets/img/cerveza.jpg",
    nombre: "cerveza",
    precio: 320,  
    cantidad: 1
  },
  {
    id: 7,
    img : "./assets/img/satur.jpg",
    precio: 120,
    nombre: "Don Satur",
    cantidad: 1
  },
  {
    id: 8,
    img : "./assets/img/manaos.jpg",
    precio: 160,
    nombre: "manaos",
    cantidad: 1
  },
  {
    id: 9,
    img : "./assets/img/baggio.jpg",
    precio: 240,
    nombre: "baggio 1.5L",
    cantidad: 1
  }
]

let carrito = [] || pintarCarrito();

if (localStorage.getItem('carrito')) {
  carrito = JSON.parse(localStorage.getItem('carrito'));
  pintarCarrito();
}

function pintarProductos(){

  const tienda = document.getElementById("tienda");

  BBDD.forEach((p)=>{
    let producto = document.createElement("div");
    producto.classList.add('containerProducto');
    producto.classList.add('col-12');
    producto.classList.add('col-md-4');
    producto.classList.add('mb-5');
    producto.classList.add('d-flex');
    producto.classList.add('justify-content-center');

    producto.innerHTML =`
    <div class="card">
    <figure>
      <img src="${p.img}" alt="t-shirt">
    </figure>
    <section class="details">
      <div class="min-details">
        <h1>${p.nombre}</h1>
        <h1 class="price">$ ${p.precio}</h1>
      </div>
  
      <div class="options">
      </div>
      <button href="#" class="btn">Agregar al carrito</button>
    </section>
  </div>
 `

    tienda.appendChild(producto);


    producto.querySelector('button').addEventListener('click', ()=>{

      Toastify({
        text: 'Se a agregado el producto al carrito',
        duration: 2000,
        style: {
          background: 'linear-gradient(to right, #C62626, #D8C2C2)'
        }
      }).showToast();

      agregarProductosAlCarrito(p.id);    

      localStorage.setItem('carrito', JSON.stringify(carrito));


    })
  })
  
}

pintarProductos();

function agregarProductosAlCarrito(id){
    
  let producto = BBDD.find(producto => producto.id === id);

  let productoEnCarrito = carrito.find(producto => producto.id === id);

  if(productoEnCarrito){
    productoEnCarrito. cantidad++;
    
    console.log(carrito);
  }else{

    producto.cantidad = 1

    carrito.push(producto);

    console.log(carrito);

  }
  pintarCarrito();
  precioFinal();
}

  function pintarCarrito(){
    const d = document;
    let carritoHTML = d.querySelector('#carrito');

    carritoHTML.innerHTML = '';

    carrito.forEach((p, id)=> { 

      let producto = document.createElement("div");
    producto.classList.add('containerProducto');
    producto.classList.add('col-12');
    producto.classList.add('col-md-4');
    producto.classList.add('mb-5');
    producto.classList.add('d-flex');
    producto.classList.add('justify-content-center');

    producto.innerHTML =`
    <div class="card" style="width: 18rem;">
      <img src="${p.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${p.nombre}</h5>
        <p class="card-text"> $${p.precio}</p>
        <p>Cantidad: ${p.cantidad}<p>
        <button class="btn btn-danger" id="${p.id}">Eliminar</a>
      </div>
  </div>
 `
      producto.querySelector('button').addEventListener('click', ()=>{

        EliminarUnidadDeCarrito(id);

      })

      carritoHTML.appendChild(producto)

    })
  }

  function EliminarUnidadDeCarrito(id) {

    Toastify({
      text: 'Se elimino el producto correctamente',
      duration: 2000,
      style: {
        background: 'linear-gradient(to right, #080708, #e6e8e6)'
      }
    }).showToast();

    carrito[id].cantidad--;

    if (carrito[id].cantidad === 0) {
      carrito.splice(id, 1);
      }

      pintarCarrito();
      precioFinal();
  }

  function precioFinal(){

    let total = 0;

    carrito.forEach((p) =>{
      total += p.precio * p.cantidad;
    })

    console.log(total);

    const t = document.getElementById('total');

    t.innerHTML = `<h5>Total a pagar: $${total}<h5>`

    localStorage.setItem('carrito',JSON.stringify(carrito));

  }





  



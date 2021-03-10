console.log("hola");
let productos = [
  {
    marca: "nike",
    color: "blanco",
    talle: 42,
    precio: 100,
  },
  {
    marca: "adidas",
    color: "negro",
    talle: 38,
    precio: 45,
  },
  {
    marca: "fila",
    color: "negro",
    talle: 42,
    precio: 60,
  },
  {
    marca: "puma",
    color: "blanco",
    talle: 41,
    precio: 55,
  },
];

// let boton3 = document.createElement("button");
// boton3.textContent = "Ordenar por precio"
// item.appendChild(boton3);

// boton3.addEventListener("click", () => {
//   boton3.sort((a, b) => a.precio - b.precio);
// })

const carrito = [];

let lista = document.getElementById("lista");
for (let index = 0; index < productos.length; index++) {
  const element = productos[index];
  let item = document.createElement("li");
  let parrafo = document.createElement("p");
  let boton = document.createElement("button");
  boton.setAttribute("key", index);
  parrafo.textContent = element.marca;
  boton.textContent = "Agregar";
  item.appendChild(parrafo);
  item.appendChild(boton);
  lista.appendChild(item);

  boton.addEventListener("click", (e) => {
    let indice = +e.target.getAttribute("key");
    carrito.push(productos[indice]);
    let productosCarrito = document.createElement("li");
    let parrafo2 = document.createElement("p");
    let boton2 = document.createElement("button");
    boton2.textContent = "Eliminar";
    productosCarrito.appendChild(boton2);
    productosCarrito.appendChild(parrafo2);
    listaCarro.appendChild(productosCarrito);
    parrafo2.textContent = ` Precio: $${element.precio} Marca: ${element.marca} `;
  });
}
boton2.setAttribute("key", indice);

boton2.addEventListener("click", (r) => {
  let indice = +r.target.getAttribute("key");
  carrito.splice(indice, 1);
});

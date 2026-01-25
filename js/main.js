const productos = ["mouse", "teclado", "auriculares"]
const precios = [65000, 72000, 80000]
let carrito = []

function mostrarProductos() {
  let mensaje = "Productos disponibles:\n"

  for (let i = 0; i < productos.length; i++) {
   mensaje = mensaje + (i + 1) + " - " + productos[i] + " Precio: " + precios[i] + "\n"
  }

  alert(mensaje)
}

function agregarAlCarrito(opcion) {
  if (opcion >= 1 && opcion <= productos.length) {
    carrito.push(precios[opcion - 1])
    alert("Producto agregado al carrito")
  } else {
    alert("Opción inválida")
  }
}
function calcularTotal() {
  let total = 0

  for (let precio of carrito) {
    total += precio
  }

  alert("Total a pagar: $" + total)
}
mostrarProductos()

let opcionUsuario = prompt("Ingrese el número del producto que desea comprar:");
agregarAlCarrito(opcionUsuario)

calcularTotal()

let nombre = prompt("Ingrese su nombre")

  console.log("Bienvenido nombre")

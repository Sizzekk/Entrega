const productos = [
    {
        "Nombre": "Mouse",
        "Precio": 50000,
        "id": 1,
    },
   {
        "Nombre": "Teclado",
        "Precio": 25000,
        "id": 2,
    },
    
    {
        "Nombre": "Auriculares",
        "Precio": 37200,
        "id": 3,
    },
     {
        "Nombre": "Monitor",
        "Precio": 120000,
        "id": 4,
    },
    {
        "Nombre": "Placa de video",
        "Precio": 300000,
        "id": 5,
    },
]
let carrito = []

let productwrapper = document.getElementById ("productwrapper")

function visualitem (productsguide){
    productsguide.forEach(perifericos =>  {
    const lista = document.createElement ("div")
    lista.innerHTML = `<div class = "producto">
                        <h2>${perifericos.Nombre}</h2>
                        <h3>Precio: ${perifericos.Precio}</h3>
                        <h4>id: ${perifericos.id}</h4>
                        <button class = "agregarcarrito" id = "${perifericos.id}"> agregar </button> </div>`
    productwrapper.appendChild (lista)
    });
    document.querySelectorAll(".agregarcarrito").forEach(button => {
        button.addEventListener("click", function(ev){
        const idbutton = ev.currentTarget.id
        const selectproduct = productos.find (producto => producto.id == idbutton)
        carrito.push (selectproduct)
        localStorage.setItem("carrito", JSON.stringify(carrito))
        })
    });
}
visualitem(productos)




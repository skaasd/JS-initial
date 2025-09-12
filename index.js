precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let incrementar = document.getElementById("incrementar");
let decrementar = document.getElementById("decrementar");
let cantidadSpan = document.querySelector(".cantidad");

let cantidad = 0;

incrementar.onclick = function() {
    cantidad = cantidad + 1;
    cantidadSpan.innerHTML = cantidad;
}
decrementar.onclick = function() {
    if (cantidad > 0) {
        cantidad = cantidad - 1;
        cantidadSpan.innerHTML = cantidad;
    }
}

let valorTotal = document.querySelector(".valor-total");
setInterval(function() {
    valorTotal.innerHTML = precio * cantidad;
}, 100);   


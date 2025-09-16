// precio = 400000;

// precioSpan = document.querySelector(".precio-inicial");
// precioSpan.innerHTML = precio;

// let incrementar = document.getElementById("incrementar");
// let decrementar = document.getElementById("decrementar");
// let cantidadSpan = document.querySelector(".cantidad");

// let cantidad = 0;

// incrementar.onclick = function () {
//   cantidad = cantidad + 1;
//   cantidadSpan.innerHTML = cantidad;
// };
// decrementar.onclick = function () {
//   if (cantidad > 0) {
//     cantidad = cantidad - 1;
//     cantidadSpan.innerHTML = cantidad;
//   }
// };

// let valorTotal = document.querySelector(".valor-total");
// setInterval(function () {
//   valorTotal.innerHTML = precio * cantidad;
// }, 100);

let imagen = document.querySelector("img");
imagen.addEventListener("click", () => {
  if (imagen.style.border == "") {
    imagen.style.border = "3px solid red";
  } else {
    imagen.style.border = "";
  }
});


// const img = document.getElementById("foto");
// if (!img) throw new Error("No se encontró la imagen #foto");

// const toggleBorde = () => img.classList.toggle("borde-rojo");

// img.addEventListener("click", toggleBorde);
// img.addEventListener("keydown", (e) => {
//   if (e.key === "Enter" || e.key === " ") {
//     e.preventDefault();
//     toggleBorde();
//   }
// });


// let suma = function(a, b){
// return a + b
// }


const suma = ()=>{ suma(2,3)
}
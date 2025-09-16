// const pintar = () => {
//   let ele1 = document.querySelector("#ele1");
//   if (ele1.style.backgroundColor === "") ele1.style.backgroundColor = "yellow";
//   else {
//     ele1.style.backgroundColor = "";
//   }
// };
// const ele = document.getElementById("ele1");
// ele.addEventListener("click", pintar);

// pintar(green);

// const pintar = (color1, color2) => {
//   const ele1 = document.querySelector("#ele1");

//   if (ele1.style.backgroundColor === color1) {
//     // si ya está verde, cámbialo a amarillo
//     ele1.style.backgroundColor = color2;
//   } else {
//     // en cualquier otro caso (vacío o amarillo), cámbialo a verde
//     ele1.style.backgroundColor = color1;
//   }
// };

// // pinta verde al cargar
// pintar("green", "yellow");

// const ele = document.getElementById("ele1");
// // al hacer clic, alterna entre verde y amarillo
// ele.addEventListener("click", () => pintar("green", "yellow"));

const cambiar_color = (id) => {
  const elemento = document.getElementById(id);
  const colorOriginal = elemento.style.backgroundColor;
  elemento.dataset.original = colorOriginal;

  elemento.addEventListener("click", () => {
    if (elemento.style.backgroundColor === "black") {
      elemento.style.backgroundColor = elemento.dataset.original;
    } else {
      elemento.style.backgroundColor = "black";
    }
  });
};

const ids = ["rojo", "azul", "amarillo", "verde"];

ids.forEach(cambiar_color);

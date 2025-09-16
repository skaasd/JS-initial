const teclasColores = {
  a: "pink",
  s: "orange",
  d: "lightblue",
};

const teclasDivs = {
  q: "purple",
  w: "grey",
  e: "brown",
};

document.addEventListener("keydown", (event) => {
  const tecla = event.key.toLowerCase();
  const elemento = document.getElementById("key");

  // Cambia color del div existente si corresponde
  if (teclasColores?.[tecla]) {
    elemento.style.backgroundColor = teclasColores[tecla];
  }

  // Crea nuevos divs si corresponde
  if (teclasDivs?.[tecla]) {
    const nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("cuadro"); // asegúrate de tener .cuadro en tu CSS
    nuevoDiv.style.backgroundColor = teclasDivs[tecla];
    document.getElementById("contenedor").appendChild(nuevoDiv);
  }
});

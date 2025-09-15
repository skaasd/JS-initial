const verificar = document.querySelector("#submit");

verificar.addEventListener("click", (event) => {
  event.preventDefault(); // evita que el form recargue la página

  let valor1 = document.querySelector("#pass1").value;
  let valor2 = document.querySelector("#pass2").value;
  let valor3 = document.querySelector("#pass3").value;

  let password = valor1 + valor2 + valor3;

  if (password === "911") {
    document.querySelector("#result").innerHTML = "Password 1 correcto";
  } else {
    document.querySelector("#result").innerHTML = "Password incorrecto";
  }
});

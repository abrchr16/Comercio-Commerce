const botones = document.querySelectorAll(".btn");
const productos = ["Mochila", "Zapatillas", "Remera", "Crocs", "Cartera", "Buzo"];
const numero = document.querySelector(".Numero");
let i = 0;

botones.forEach((boton, index) => {
  boton.addEventListener("click", () => {
    if (boton.classList.contains("btn-primary")) {
      console.log(`${productos[index]} añadido/a al carrito`);
      numero.textContent = ++i;
      boton.classList.replace("btn-primary", "btn-secondary");
      boton.textContent = "Añadido";
    } 
    else {
      console.log(`${productos[index]} eliminado/a del carrito`);
      numero.textContent = --i;
      boton.classList.replace("btn-secondary", "btn-primary");
      boton.textContent = "Añadir al carrito";
    }
  });
});

const boton = document.querySelectorAll(".btn.btn-primary");
const productos = ["Mochila", "Zapatillas", "Remera", "Crocs", "Cartera", "Buzo"];
const numero = document.querySelector(".Numero")
let i = 0

boton.forEach((boton, index) => {
    boton.addEventListener("click", () => {
        console.log(`${productos[index]} añadido/a al carrito`);
        numero.textContent = ++i
        boton.style.backgroundColor = "#e9ecef";
        boton.style.color = "#6c757d";
        boton.style.borderColor = "#dee2e6";
        boton.disabled = true;
        boton.textContent = "Añadido";
    });
});
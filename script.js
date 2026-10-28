
const encabezados = document.querySelectorAll(".encabezado");

encabezados.forEach((boton) => {
    boton.addEventListener("click", () => {
        const respuesta = boton.nextElementSibling;
        const estabaAbierta = respuesta.classList.contains("abierta");

        document.querySelectorAll(".respuesta").forEach((elemento) => {
            elemento.classList.remove("abierta");
        });

        document.querySelectorAll(".encabezado").forEach((elemento) => {
            elemento.setAttribute("aria-expanded", "false");
        });

        if (!estabaAbierta) {
            respuesta.classList.add("abierta");
            boton.setAttribute("aria-expanded", "true");
        }
    });
});

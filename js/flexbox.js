const juegos = [
    {
        nombre: "Minecraft",
        genero: "Survival",
        imagen: "imagenes/Minecraft.jpg"
    },
    {
        nombre: "Grand Theft Auto V",
        genero: "Acción",
        imagen: "imagenes/GTA5.jpg"
    },
    {
        nombre: "Age of Empires II",
        genero: "Estrategia",
        imagen: "imagenes/Age2.jpg"
    },
    {
        nombre: "DOOM Eternal",
        genero: "Acción",
        imagen: "imagenes/Doom.jpg"
    },
    {
        nombre: "Forza Horizon 6",
        genero: "Carreras",
        imagen: "imagenes/Forza6.jpg"
    },
    {
        nombre: "ARK: Survival Evolved",
        genero: "Survival",
        imagen: "imagenes/ARK.jpg"
    }
];

const contenedor = document.getElementById("contenedorJuegos");
const botonOrdenar = document.getElementById("btnOrdenar");

function mostrarJuegos() {

    contenedor.innerHTML = "";

    juegos.forEach(function (juego) {

        const tarjeta = document.createElement("div");
        tarjeta.className = "card-juego";

        tarjeta.innerHTML = `
            <img src="${juego.imagen}" alt="${juego.nombre}">
            <h3>${juego.nombre}</h3>
            <p>Género: ${juego.genero}</p>
        `;

        contenedor.appendChild(tarjeta);

    });

}

botonOrdenar.addEventListener("click", function () {

    juegos.sort(function (a, b) {
        return a.nombre.localeCompare(b.nombre);
    });

    mostrarJuegos();

});

mostrarJuegos();
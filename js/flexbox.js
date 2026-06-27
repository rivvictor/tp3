const juegos = [
    {
        nombre: "Minecraft",
        genero: "Survival",
        imagen: "imagenes/minecraft.jpg"
    },
    {
        nombre: "Grand Theft Auto V",
        genero: "Acción",
        imagen: "imagenes/gta5.jpg"
    },
    {
        nombre: "Age of Empires II",
        genero: "Estrategia",
        imagen: "imagenes/age2.jpg"
    },
    {
        nombre: "DOOM Eternal",
        genero: "Acción",
        imagen: "imagenes/doom.jpg"
    },
    {
        nombre: "Forza Horizon 6",
        genero: "Carreras",
        imagen: "imagenes/forza6.jpg"
    },
    {
        nombre: "ARK: Survival Evolved",
        genero: "Survival",
        imagen: "imagenes/ark.jpg"
    },
    {
        nombre: "7 Days to Die",
        genero: "Survival",
        imagen: "imagenes/7days.jpg"
    },
    {
        nombre: "Counter Strike 2",
        genero: "Acción",
        imagen: "imagenes/cs2.jpg"
    },
    {
        nombre: "Need For Speed Heat",
        genero: "Carreras",
        imagen: "imagenes/nfsheat.jpg"
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
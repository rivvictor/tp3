const formulario = document.getElementById("formPersona");
const tabla = document.getElementById("tablaPersonas");

let personas = [];

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;

    const persona = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        altura: altura,
        peso: peso
    };

    personas.push(persona);

    formulario.reset();

    mostrarPersonas();
});

function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

function mostrarPersonas() {

    tabla.innerHTML = "";

    personas.forEach(function (persona, index) {

        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${persona.nombre}</td>
            <td>${persona.apellido}</td>
            <td>${persona.edad}</td>
            <td>${persona.altura}</td>
            <td>${persona.peso}</td>
            <td>${calcularIMC(persona.peso, persona.altura)}</td>
            <td>
                <button onclick="eliminarPersona(${index})">Eliminar</button>
            </td>
        `;

        tabla.appendChild(fila);
    });
}

function eliminarPersona(index) {
    personas.splice(index, 1);
    mostrarPersonas();
}
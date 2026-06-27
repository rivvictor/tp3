const { useState } = React;

function App() {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [personas, setPersonas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !edad || !altura || !peso) return;

    const nuevaPersona = {
      id: Date.now(),
      nombre,
      apellido,
      edad,
      altura,
      peso
    };

    setPersonas([...personas, nuevaPersona]);

    setNombre("");
    setApellido("");
    setEdad("");
    setAltura("");
    setPeso("");
  };

  const eliminarPersona = (id) => {
    setPersonas(personas.filter(p => p.id !== id));
  };

  const calcularIMC = (peso, altura) => {
    const h = parseFloat(altura);
    const p = parseFloat(peso);
    return (p / (h * h)).toFixed(2);
  };

  return (
    <main>

      <h2>Formulario de Personas (React)</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />

        <input
          type="number"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />

        <input
          type="number"
          step="0.01"
          placeholder="Altura (m)"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <input
          type="number"
          step="0.1"
          placeholder="Peso (kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />

        <button type="submit">Agregar persona</button>

      </form>

      <h2>Lista de personas</h2>

      {personas.length === 0 ? (
        <p>No hay personas cargadas</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Edad</th>
              <th>Altura</th>
              <th>Peso</th>
              <th>IMC</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {personas.map((p) => (
              <tr key={p.id}>
                <td>{p.nombre}</td>
                <td>{p.apellido}</td>
                <td>{p.edad}</td>
                <td>{p.altura}</td>
                <td>{p.peso}</td>
                <td>{calcularIMC(p.peso, p.altura)}</td>
                <td>
                  <button onClick={() => eliminarPersona(p.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </main>
  );
}
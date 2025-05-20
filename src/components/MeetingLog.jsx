import { useState, useEffect } from "react";

export default function MeetingLog() {
  const [reuniones, setReuniones] = useState(() => {
    const guardadas = localStorage.getItem("bitacorasReuniones");
    return guardadas ? JSON.parse(guardadas) : [];
  });

  const [formulario, setFormulario] = useState({
    fecha: "",
    duracion: "",
    objetivo: "",
    temas: "",
    participantes: "",
    conclusiones: "",
  });

  useEffect(() => {
    localStorage.setItem("bitacorasReuniones", JSON.stringify(reuniones));
  }, [reuniones]);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const agregarReunion = () => {
    if (
      !formulario.fecha ||
      !formulario.duracion ||
      !formulario.objetivo ||
      !formulario.temas ||
      !formulario.participantes ||
      !formulario.conclusiones
    ) {
      alert("Completa todos los campos");
      return;
    }

    const nuevaReunion = { ...formulario, id: Date.now() };
    setReuniones([...reuniones, nuevaReunion]);

    setFormulario({
      fecha: "",
      duracion: "",
      objetivo: "",
      temas: "",
      participantes: "",
      conclusiones: "",
    });
  };

  const eliminarReunion = (id) => {
    setReuniones(reuniones.filter((r) => r.id !== id));
  };

  return (
    <div>
      <h3>Registrar Bitácora de Reunión</h3>
      <div>
        <input
          type="date"
          name="fecha"
          value={formulario.fecha}
          onChange={manejarCambio}
        />
        <input
          type="text"
          name="duracion"
          placeholder="Duración (ej. 2 horas)"
          value={formulario.duracion}
          onChange={manejarCambio}
        />
        <input
          type="text"
          name="objetivo"
          placeholder="Objetivo"
          value={formulario.objetivo}
          onChange={manejarCambio}
        />
        <textarea
          name="temas"
          placeholder="Temas tratados"
          value={formulario.temas}
          onChange={manejarCambio}
        />
        <input
          type="text"
          name="participantes"
          placeholder="Participantes"
          value={formulario.participantes}
          onChange={manejarCambio}
        />
        <textarea
          name="conclusiones"
          placeholder="Conclusiones"
          value={formulario.conclusiones}
          onChange={manejarCambio}
        />
        <button onClick={agregarReunion}>Agregar Bitácora</button>
      </div>

      <h4>Historial de Reuniones</h4>
      <ul>
        {reuniones.map((reunion) => (
          <li key={reunion.id}>
            <strong>{reunion.fecha}</strong> - {reunion.duracion}<br />
            <em>Objetivo:</em> {reunion.objetivo}<br />
            <em>Temas:</em> {reunion.temas}<br />
            <em>Participantes:</em> {reunion.participantes}<br />
            <em>Conclusiones:</em> {reunion.conclusiones}<br />
            <button onClick={() => eliminarReunion(reunion.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
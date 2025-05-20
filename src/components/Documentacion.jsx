import React from "react";

const Documentacion = () => {
  const imagenes = [
    {
      url: "/public/backlog.png",
      titulo: "Product Backlog",
      descripcion: "proyecto cerrado.",
    },
    {
      url: "/public/sprints.png",
      titulo: "sprint planning",
      descripcion: "planeacion para el sprint schedule",
    },    
    {
      url: "/rev_final.png",
      titulo: "junta final",
      descripcion: "prevision y ajustes con sprint final",
    },    
  ];

  return (
    <div>
      <h2>Documentación del Proyecto</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {imagenes.map((img, index) => (
          <div key={index} style={{ border: "1px solid #ccc", padding: "10px", width: "600px" }}>
            <img src={img.url} alt={img.titulo} style={{ width: "100%" }} />
            <h3>{img.titulo}</h3>
            <p>{img.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documentacion;
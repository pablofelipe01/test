"use client";

import React from 'react';

const Disclaimer: React.FC = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Descargo de Responsabilidad</h1>
      <p className="mb-4">
        La información proporcionada en este sitio web es solo para fines informativos generales. Consulta IA no asume
        ninguna responsabilidad por errores u omisiones en los contenidos del servicio.
      </p>
      <h2 className="text-2xl font-semibold mb-3">1. Exención de Responsabilidad</h2>
      <p className="mb-4">
        En ningún caso Consulta IA será responsable de ningún daño especial, directo, indirecto, consecuente o
        incidental ni de ningún daño, ya sea en una acción de contrato, negligencia u otra acción, que surja de o en
        conexión con el uso del Servicio o los contenidos del Servicio.
      </p>
      {/* Add more sections as needed */}
    </div>
  );
};

export default Disclaimer;

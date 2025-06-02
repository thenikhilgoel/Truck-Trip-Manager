// src/pages/Fuel.tsx
import React from "react";

export default function Fuel() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">⛽ Fuel Logbook</h2>
      <p className="text-gray-600">
        Log fuel entries, view consumption stats, and analyze your data.
      </p>

      {/* Placeholder for fuel log form/table */}
      <div className="mt-6 p-6 bg-white rounded-lg shadow">
        <p className="text-gray-500">[Fuel log form and stats will go here]</p>
      </div>
    </div>
  );
}

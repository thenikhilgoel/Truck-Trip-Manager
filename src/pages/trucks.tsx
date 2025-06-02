// src/pages/Trucks.tsx
import React, { useState } from "react";

interface Truck {
  id: string;
  name: string;
  model: string;
  docs: string[]; // list of document names (placeholder)
}

// Dummy data for illustration. You’ll replace this with real data later.
const DUMMY_TRUCKS: Truck[] = [
  { id: "t1", name: "Truck Alpha", model: "Volvo X1", docs: ["Insurance.pdf", "Permit.pdf"] },
  { id: "t2", name: "Truck Beta", model: "Mahindra XUV", docs: ["Insurance.pdf", "Pollution.pdf"] },
  { id: "t3", name: "Truck Gamma", model: "Tata Haul", docs: ["Insurance.pdf"] },
];

export default function Trucks() {
  // We’ll allow one truck’s docs to expand/collapse
  const [expandedTruckId, setExpandedTruckId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedTruckId(prev => (prev === id ? null : id));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">🚚 Trucks</h2>
      <p className="text-gray-600">
        Manage all your trucks and truck‐specific documents here.
      </p>

      {/* Placeholder for “Add Truck” form */}
      <div className="mt-4 p-4 bg-white rounded-lg shadow">
        <p className="text-gray-500">[Form to add/edit trucks will go here]</p>
      </div>

      {/* List of Trucks */}
      <div className="mt-6 space-y-4">
        {DUMMY_TRUCKS.map(truck => (
          <div key={truck.id} className="p-6 bg-white rounded-lg shadow">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-medium">{truck.name}</h3>
                <p className="text-gray-500">Model: {truck.model}</p>
              </div>
              <button
                onClick={() => toggleExpand(truck.id)}
                className="text-blue-600 hover:underline"
              >
                {expandedTruckId === truck.id ? "Hide Documents" : "View Documents"}
              </button>
            </div>

            {/* Truck‐Wise Documents Section */}
            {expandedTruckId === truck.id && (
              <ul className="mt-4 list-disc list-inside text-gray-700">
                {truck.docs.length > 0 ? (
                  truck.docs.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))
                ) : (
                  <li className="text-gray-500 italic">No documents uploaded.</li>
                )}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

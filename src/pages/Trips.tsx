// src/pages/Trips.tsx
import React from "react";
import AddTripForm from "../components/AddTripForm";

export default function Trips() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-primary">🛣️ Trip Management</h2>
      <p className="text-gray-600">
        Create a new trip below, or scroll down to see existing trips.
      </p>

      <AddTripForm />

      {/* Placeholder for existing trips list */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Existing Trips</h3>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-gray-500">
            [Here you can render a table or list of all trips from your database]
          </p>
        </div>
      </div>
    </div>
  );
}

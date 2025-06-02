// src/pages/TripHistory.tsx
import React from "react";

export default function TripHistory() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">📜 Trip History</h2>
      <p className="text-gray-600">
        Review all historical trips, filter by date, driver, truck, etc.
      </p>

      {/* Placeholder for trip history table */}
      <div className="mt-6 p-6 bg-white rounded-lg shadow">
        <p className="text-gray-500">[Trip history table will go here]</p>
      </div>
    </div>
  );
}

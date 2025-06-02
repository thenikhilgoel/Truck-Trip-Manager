// src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import AddTripForm from "../components/AddTripForm";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Dashboard Header */}
      <div>
        <h2 className="text-3xl font-bold flex items-center text-primary">
          <span className="mr-2">📊</span> Dashboard Overview
        </h2>
        <p className="text-gray-600 mt-1">
          Welcome to Truckn Saarthi! Use the cards below or add a trip directly.
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          to="/trips"
          className="flex flex-col p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow"
        >
          <span className="text-4xl mb-4 text-accent">🛣️</span>
          <h3 className="text-xl font-semibold mb-1 text-gray-800">Trips</h3>
          <p className="text-gray-500">Create & manage trip entries.</p>
        </Link>

        <Link
          to="/fuel"
          className="flex flex-col p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow"
        >
          <span className="text-4xl mb-4 text-accent">⛽</span>
          <h3 className="text-xl font-semibold mb-1 text-gray-800">Fuel</h3>
          <p className="text-gray-500">Log fuel entries & view consumption.</p>
        </Link>

        <Link
          to="/trucks"
          className="flex flex-col p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow"
        >
          <span className="text-4xl mb-4 text-accent">🚚</span>
          <h3 className="text-xl font-semibold mb-1 text-gray-800">Trucks</h3>
          <p className="text-gray-500">Manage trucks & their documents.</p>
        </Link>

        <Link
          to="/drivers"
          className="flex flex-col p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow"
        >
          <span className="text-4xl mb-4 text-accent">🧑‍✈️</span>
          <h3 className="text-xl font-semibold mb-1 text-gray-800">Drivers</h3>
          <p className="text-gray-500">Manage driver profiles & info.</p>
        </Link>

        <Link
          to="/clients"
          className="flex flex-col p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow"
        >
          <span className="text-4xl mb-4 text-accent">👥</span>
          <h3 className="text-xl font-semibold mb-1 text-gray-800">Clients</h3>
          <p className="text-gray-500">Manage client details & contacts.</p>
        </Link>

        <Link
          to="/trip-history"
          className="flex flex-col p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow"
        >
          <span className="text-4xl mb-4 text-accent">📜</span>
          <h3 className="text-xl font-semibold mb-1 text-gray-800">Trip History</h3>
          <p className="text-gray-500">View historical trip records.</p>
        </Link>
      </div>

      {/* Add New Trip Form (Full-width on mobile) */}
      <div>
        <AddTripForm />
      </div>
    </div>
  );
}

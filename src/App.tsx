// src/App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Trips from "./pages/Trips";
import Fuel from "./pages/Fuel";
import Trucks from "./pages/Trucks";
import Drivers from "./pages/Drivers";
import Clients from "./pages/Clients";
import TripHistory from "./pages/TripHistory";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

export default function App() {
  // State to toggle sidebar on small screens
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex h-screen bg-neutralBg overflow-hidden">
        {/* Sidebar for large screens, drawer for small */}
        <aside
          className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-md transform transition-transform duration-200 ease-in-out
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
            lg:translate-x-0 lg:static lg:inset-auto lg:shadow-none`}
        >
          <div className="flex flex-col h-full p-6">
            <h1 className="text-2xl font-bold mb-8 text-primary">
              Truckn Saarthi
            </h1>
            <nav className="space-y-4 flex-1">
              <Link
                to="/"
                onClick={() => setSidebarOpen(false)}
                className="block text-lg text-gray-700 hover:text-primary"
              >
                Dashboard
              </Link>
              <Link
                to="/trips"
                onClick={() => setSidebarOpen(false)}
                className="block text-lg text-gray-700 hover:text-primary"
              >
                Trips
              </Link>
              <Link
                to="/fuel"
                onClick={() => setSidebarOpen(false)}
                className="block text-lg text-gray-700 hover:text-primary"
              >
                Fuel
              </Link>
              <Link
                to="/trucks"
                onClick={() => setSidebarOpen(false)}
                className="block text-lg text-gray-700 hover:text-primary"
              >
                Trucks
              </Link>
              <Link
                to="/drivers"
                onClick={() => setSidebarOpen(false)}
                className="block text-lg text-gray-700 hover:text-primary"
              >
                Drivers
              </Link>
              <Link
                to="/clients"
                onClick={() => setSidebarOpen(false)}
                className="block text-lg text-gray-700 hover:text-primary"
              >
                Clients
              </Link>
              <Link
                to="/trip-history"
                onClick={() => setSidebarOpen(false)}
                className="block text-lg text-gray-700 hover:text-primary"
              >
                Trip History
              </Link>
            </nav>
            <div className="mt-auto border-t pt-4">
              <Link
                to="/profile"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center space-x-2 text-gray-700 hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A9 9 0 0112 15a9 9 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-lg">Profile</span>
              </Link>
            </div>
          </div>
        </aside>

        {/* Backdrop when sidebar is open on mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-30 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col lg:pl-64">
          {/* Top bar */}
          <header className="flex items-center justify-between bg-primary px-6 py-4 shadow-sm">
            <div className="flex items-center">
              {/* Hamburger menu for small screens */}
              <button
                className="text-white lg:hidden focus:outline-none mr-4"
                onClick={() => setSidebarOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <h2 className="text-xl font-semibold text-white">Truckn Saarthi</h2>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14c-4.418 0-8 1.79-8 4v1h16v-1c0-2.21-3.582-4-8-4z"
                />
              </svg>
              <span className="text-white">Test User</span>
            </div>
          </header>

          {/* Pages Container */}
          <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8 bg-neutralBg">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/trips" element={<Trips />} />
              <Route path="/fuel" element={<Fuel />} />
              <Route path="/trucks" element={<Trucks />} />
              <Route path="/drivers" element={<Drivers />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/trip-history" element={<TripHistory />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

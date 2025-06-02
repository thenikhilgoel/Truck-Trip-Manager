// src/pages/NotFound.tsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-gray-600">Page not found.</p>
      <Link to="/" className="text-blue-600 hover:underline">
        Go back to Dashboard
      </Link>
    </div>
  );
}

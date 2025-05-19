// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-indigo-600">AI BG Remover</Link>
      <div className="space-x-4">
        <Link to="/login" className="text-gray-600 hover:text-indigo-600">Login</Link>
        <Link to="/register" className="text-gray-600 hover:text-indigo-600">Register</Link>
      </div>
    </nav>
  );
}

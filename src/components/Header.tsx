
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-interior-blue">InteriorCost</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-interior-blue transition-colors">
            Inicio
          </Link>
          <Link to="/projects" className="text-gray-600 hover:text-interior-blue transition-colors">
            Proyectos
          </Link>
          <Link to="/items" className="text-gray-600 hover:text-interior-blue transition-colors">
            Ítems
          </Link>
          <Link to="/design-spec" className="text-gray-600 hover:text-interior-blue transition-colors">
            Libro de Especificaciones
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-interior-blue transition-colors">
            Acerca de
          </Link>
        </nav>
        <div className="md:hidden">
          {/* Menú móvil - solo un placeholder */}
          <button className="text-gray-600">
            Menú
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

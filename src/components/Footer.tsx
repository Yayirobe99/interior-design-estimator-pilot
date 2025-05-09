
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} InteriorCost. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-interior-blue transition-colors text-sm">
              Términos de servicio
            </a>
            <a href="#" className="text-gray-600 hover:text-interior-blue transition-colors text-sm">
              Política de privacidad
            </a>
            <a href="#" className="text-gray-600 hover:text-interior-blue transition-colors text-sm">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

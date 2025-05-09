
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Acerca del proyecto</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              InteriorCost es una aplicación web piloto diseñada para ayudar a profesionales del diseño de interiores a gestionar presupuestos, tiempos y materiales de manera eficiente.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Objetivos del proyecto</h2>
            <p>
              Este proyecto piloto tiene como objetivo validar la viabilidad técnica y comercial de una solución completa para la estimación y gestión de proyectos de diseño interior, migrando datos desde hojas de cálculo Excel a una base de datos relacional estructurada.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Arquitectura técnica</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Frontend:</strong> Desarrollado con React y Tailwind CSS para una experiencia de usuario moderna y responsive.
              </li>
              <li>
                <strong>Backend:</strong> API REST con Node.js para cálculos de costos y tiempos.
              </li>
              <li>
                <strong>Base de datos:</strong> PostgreSQL alojado en un servidor Linux para almacenamiento estructurado de datos.
              </li>
              <li>
                <strong>Almacenamiento de imágenes:</strong> Sistema local o AWS S3 para gestionar imágenes de muebles y materiales.
              </li>
              <li>
                <strong>Despliegue:</strong> Servidor Nginx con certificado SSL para una conexión segura.
              </li>
            </ul>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Cronograma de desarrollo</h2>
            <p>
              El desarrollo de este proyecto piloto está programado para completarse en un período de 6-8 semanas, siguiendo estas etapas principales:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Semanas 1-2:</strong> Configuración del servidor y migración inicial de datos.
              </li>
              <li>
                <strong>Semanas 3-4:</strong> Desarrollo de la API backend y lógica de cálculos.
              </li>
              <li>
                <strong>Semanas 4-6:</strong> Implementación del frontend y flujos de usuario.
              </li>
              <li>
                <strong>Semanas 6-7:</strong> Integración, pruebas y correcciones.
              </li>
              <li>
                <strong>Semana 8:</strong> Despliegue final y capacitación de usuarios.
              </li>
            </ol>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Costos estimados</h2>
            <p>
              El costo total del proyecto piloto dependerá del alcance final y el nivel de personalización requerido, con un rango estimado entre €2,700 y €8,000.
            </p>
            <p className="mt-2">
              Este presupuesto incluye desarrollo, migración de datos, implementación, pruebas y capacitación inicial de usuarios.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;

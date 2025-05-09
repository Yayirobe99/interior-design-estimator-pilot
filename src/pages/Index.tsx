
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-interior-blue/10 to-interior-green/30 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Gestión inteligente de presupuestos para diseño de interiores
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Optimice sus estimaciones de costos y tiempos con nuestra plataforma especializada para profesionales del diseño interior.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-interior-blue hover:bg-interior-blue/90">
                  <Link to="/projects">Ver proyectos</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/new-project">Nuevo proyecto</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Características principales</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-interior-blue/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-interior-blue text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Estimación precisa</h3>
                <p className="text-gray-600">
                  Calcule presupuestos y tiempos de ejecución con alta precisión basados en datos históricos de proyectos similares.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-interior-blue/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-interior-blue text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Catálogo organizado</h3>
                <p className="text-gray-600">
                  Mantenga un registro completo de muebles y materiales con imágenes, precios y proveedores para rápida referencia.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-interior-blue/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-interior-blue text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Gestión de proyectos</h3>
                <p className="text-gray-600">
                  Siga el progreso de sus proyectos, controle desviaciones de presupuesto y mantenga todos los detalles organizados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-interior-green/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                ¿Listo para optimizar sus estimaciones?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Comience a utilizar nuestra plataforma y descubra cómo puede mejorar la precisión y eficiencia de sus presupuestos.
              </p>
              <Button asChild size="lg" className="bg-interior-blue hover:bg-interior-blue/90">
                <Link to="/new-project">Crear mi primer proyecto</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

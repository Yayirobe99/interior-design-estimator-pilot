
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import NewProjectForm from "@/components/NewProjectForm";
import { Link } from "react-router-dom";

const NewProject = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Crear nuevo proyecto</h1>
            <p className="text-gray-600 mt-2">
              Complete el formulario a continuación para crear un nuevo proyecto.
            </p>
          </div>
          
          <Card className="p-6">
            <NewProjectForm />
          </Card>
          
          <div className="mt-4 text-sm text-gray-500 text-center">
            <Link to="/projects" className="text-interior-blue hover:underline">
              Volver a la lista de proyectos
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewProject;

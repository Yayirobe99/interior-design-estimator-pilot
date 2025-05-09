
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard, { ProjectProps } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { mockProjects } from "@/data/mockData";

const Projects = () => {
  const [projects, setProjects] = React.useState<ProjectProps[]>(mockProjects);
  const [filter, setFilter] = React.useState<string>("todos");

  const filteredProjects = React.useMemo(() => {
    if (filter === "todos") return projects;
    return projects.filter((project) => project.status === filter);
  }, [projects, filter]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Proyectos</h1>
          <Button asChild>
            <Link to="/new-project">Nuevo proyecto</Link>
          </Button>
        </div>

        <div className="mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2">
            <Button 
              variant={filter === "todos" ? "default" : "outline"}
              onClick={() => setFilter("todos")}
              size="sm"
            >
              Todos
            </Button>
            <Button 
              variant={filter === "planificación" ? "default" : "outline"}
              onClick={() => setFilter("planificación")}
              size="sm"
            >
              Planificación
            </Button>
            <Button 
              variant={filter === "en progreso" ? "default" : "outline"}
              onClick={() => setFilter("en progreso")}
              size="sm"
            >
              En progreso
            </Button>
            <Button 
              variant={filter === "completado" ? "default" : "outline"}
              onClick={() => setFilter("completado")}
              size="sm"
            >
              Completado
            </Button>
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl text-gray-500">No hay proyectos que mostrar</h3>
            <p className="mt-2 text-gray-400">
              {filter !== "todos" 
                ? `No tienes proyectos con estado "${filter}".` 
                : "Crea tu primer proyecto para empezar."}
            </p>
            <Button asChild className="mt-4">
              <Link to="/new-project">Crear proyecto</Link>
            </Button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;

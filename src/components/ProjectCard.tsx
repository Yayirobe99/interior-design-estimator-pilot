
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";

export interface ProjectProps {
  id: string;
  name: string;
  client: string;
  budget: number;
  status: "planificación" | "en progreso" | "completado";
  estimatedTime: number; // en días
  description?: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "planificación":
        return "bg-yellow-100 text-yellow-800";
      case "en progreso":
        return "bg-blue-100 text-blue-800";
      case "completado":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md animate-fade-in">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{project.name}</CardTitle>
          <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
        </div>
        <p className="text-sm text-gray-500">Cliente: {project.client}</p>
      </CardHeader>
      <CardContent className="pb-2">
        {project.description && (
          <p className="text-sm text-gray-600 mb-4">{project.description}</p>
        )}
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm font-medium">Presupuesto:</span>
            <span className="text-sm font-bold">{formatCurrency(project.budget)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium">Tiempo estimado:</span>
            <span className="text-sm font-bold">{project.estimatedTime} días</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button variant="outline" size="sm" className="w-full">
          Ver detalles
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

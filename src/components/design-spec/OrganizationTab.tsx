
import React from "react";
import { Button } from "@/components/ui/button";
import { Folder, Building2, Calendar } from "lucide-react";
import { 
  Collapsible, 
  CollapsibleTrigger, 
  CollapsibleContent 
} from "@/components/ui/collapsible";

const OrganizationTab = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-1">
        <div className="bg-white p-5 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Estructura del Proyecto</h2>
          
          <div className="space-y-1">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Folder className="h-4 w-4 mr-2" /> Vista general
            </Button>
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-gray-100 rounded text-sm">
                <div className="flex items-center">
                  <Building2 className="h-4 w-4 mr-2" />
                  <span>Espacios</span>
                </div>
                <span>+</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-6 space-y-1">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  Sala de estar
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  Cocina
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  Dormitorio principal
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  Baños
                </Button>
              </CollapsibleContent>
            </Collapsible>
            
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-gray-100 rounded text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Fases del proyecto</span>
                </div>
                <span>+</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-6 space-y-1">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  Diseño conceptual
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  Selección de materiales
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  Documentación técnica
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  Construcción
                </Button>
              </CollapsibleContent>
            </Collapsible>
          </div>
          
          <div className="mt-6 pt-4 border-t">
            <Button variant="outline" className="w-full">
              <Folder className="h-4 w-4 mr-2" />
              Crear nueva carpeta
            </Button>
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-3">
        <div className="bg-white p-5 rounded-lg shadow mb-6">
          <h2 className="text-lg font-semibold mb-4">Contenido - Sala de estar</h2>
          
          <div className="border rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Elemento</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {["Sofá principal", "Mesa de centro", "Iluminación", "Pintura paredes"].map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{item}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {index === 0 ? "Mobiliario" : index === 1 ? "Mobiliario" : index === 2 ? "Iluminación" : "Acabado"}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${index === 0 ? "bg-green-100 text-green-800" : 
                          index === 1 ? "bg-green-100 text-green-800" : 
                          index === 2 ? "bg-yellow-100 text-yellow-800" : 
                          "bg-gray-100 text-gray-800"}`}>
                        {index === 0 ? "Aprobado" : 
                          index === 1 ? "Aprobado" : 
                          index === 2 ? "Pendiente" : 
                          "En revisión"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <Button variant="ghost" size="sm">Ver detalles</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Cronograma del Proyecto</h2>
          
          <div className="border p-4 rounded-lg">
            <div className="flex mb-4 items-center">
              <div className="w-1/4 font-medium">Tarea</div>
              <div className="w-3/4 bg-gray-200 h-2 rounded">
                <div className="flex">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="flex-1 border-r border-gray-300" />
                  ))}
                </div>
              </div>
            </div>
            
            {["Selección de materiales", "Planos técnicos", "Presupuestos", "Documentación final"].map((task, i) => (
              <div key={i} className="flex mb-4 items-center">
                <div className="w-1/4 text-sm">{task}</div>
                <div className="w-3/4 bg-gray-200 h-6 rounded relative">
                  <div 
                    className={`absolute h-full rounded ${
                      i === 0 ? "bg-blue-500 w-1/2 left-0" : 
                      i === 1 ? "bg-green-500 w-1/3 left-1/4" : 
                      i === 2 ? "bg-yellow-500 w-1/4 left-1/2" : 
                      "bg-purple-500 w-1/6 left-3/4"
                    }`}
                  />
                </div>
              </div>
            ))}
            
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>May 1</span>
              <span>Jun 1</span>
              <span>Jul 1</span>
              <span>Ago 1</span>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <Button>
              <Calendar className="h-4 w-4 mr-2" />
              Actualizar cronograma
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationTab;

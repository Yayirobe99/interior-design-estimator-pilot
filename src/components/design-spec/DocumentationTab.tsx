
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  FileText, 
  Upload, 
  Download, 
  Monitor,
  FileCode,
  Share
} from "lucide-react";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";

const DocumentationTab = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1">
        <div className="bg-white p-5 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Plantillas</h2>
          
          <div className="space-y-3">
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-gray-50 hover:bg-gray-100 rounded-md">
                <div className="flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  <span>Plantillas de Spec Book</span>
                </div>
                <span>+</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-3 pt-2 space-y-1">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  Spec Book Completo
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  Spec Book Residencial
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  Spec Book Comercial
                </Button>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-gray-50 hover:bg-gray-100 rounded-md">
                <div className="flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  <span>Listas de Materiales</span>
                </div>
                <span>+</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-3 pt-2 space-y-1">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  BOM Detallado
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  BOM con Precios
                </Button>
              </CollapsibleContent>
            </Collapsible>

            <Button variant="outline" className="w-full mt-4">
              <Upload className="h-4 w-4 mr-2" />
              Cargar nueva plantilla
            </Button>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow mt-6">
          <h2 className="text-lg font-semibold mb-4">Integración con Software</h2>
          
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start text-left">
              <Monitor className="h-4 w-4 mr-2" />
              Sincronizar con AutoCAD
            </Button>
            <Button variant="outline" className="w-full justify-start text-left">
              <Monitor className="h-4 w-4 mr-2" />
              Sincronizar con SketchUp
            </Button>
            <Button variant="outline" className="w-full justify-start text-left">
              <Monitor className="h-4 w-4 mr-2" />
              Sincronizar con Revit
            </Button>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2">
        <div className="bg-white p-5 rounded-lg shadow">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Generación de Documentación</h2>
            <Button size="sm">
              <FileText className="h-4 w-4 mr-2" />
              Vista previa
            </Button>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="doc-title">Título del documento</Label>
              <Input 
                id="doc-title" 
                placeholder="Ej: Especificaciones Técnicas Proyecto Residencial Torres del Valle"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="client-name">Cliente</Label>
                <Input id="client-name" placeholder="Nombre del cliente" />
              </div>
              <div>
                <Label htmlFor="project-code">Código de proyecto</Label>
                <Input id="project-code" placeholder="Ej: PRJ-2023-01" />
              </div>
            </div>

            <div className="space-y-3">
              <Label>Secciones a incluir</Label>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="include-materials" defaultChecked />
                  <label
                    htmlFor="include-materials"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Materiales y productos
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="include-specs" defaultChecked />
                  <label
                    htmlFor="include-specs"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Especificaciones técnicas
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="include-plans" defaultChecked />
                  <label
                    htmlFor="include-plans"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Planos técnicos
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="include-images" defaultChecked />
                  <label
                    htmlFor="include-images"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Imágenes y referencias
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="include-budget" defaultChecked />
                  <label
                    htmlFor="include-budget"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Presupuesto estimado
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="include-timeline" defaultChecked />
                  <label
                    htmlFor="include-timeline"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Cronograma de instalación
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="include-legal" defaultChecked />
                  <label
                    htmlFor="include-legal"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Términos legales
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="include-contacts" defaultChecked />
                  <label
                    htmlFor="include-contacts"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Contactos de proveedores
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Label>Personalización</Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="company-logo" className="block text-sm mb-1">Logo de la empresa</Label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-3 pb-2">
                        <Upload className="w-6 h-6 mb-1 text-gray-400" />
                        <p className="text-xs text-gray-500">Subir logo</p>
                      </div>
                      <input id="company-logo" type="file" className="hidden" />
                    </label>
                  </div>
                </div>
                <div>
                  <Label htmlFor="primary-color" className="block text-sm mb-1">Color principal</Label>
                  <Input type="color" id="primary-color" defaultValue="#0EA5E9" />
                </div>
                <div>
                  <Label htmlFor="doc-format" className="block text-sm mb-1">Formato</Label>
                  <select 
                    id="doc-format"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  >
                    <option value="pdf">PDF</option>
                    <option value="docx">Microsoft Word</option>
                    <option value="xlsx">Microsoft Excel</option>
                    <option value="html">Página Web (HTML)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4 pt-4 border-t">
              <Button variant="outline">
                <FileCode className="h-4 w-4 mr-2" />
                Guardar plantilla
              </Button>
              <Button variant="outline">
                <Share className="h-4 w-4 mr-2" />
                Compartir
              </Button>
              <Button>
                <Download className="h-4 w-4 mr-2" />
                Generar documento
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationTab;

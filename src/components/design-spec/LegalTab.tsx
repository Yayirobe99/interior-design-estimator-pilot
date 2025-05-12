
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FileCheck, Download } from "lucide-react";

const LegalTab = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1">
        <div className="bg-white p-5 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Documentos Legales</h2>
          
          <div className="space-y-2">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <FileCheck className="h-4 w-4 mr-2" />
              Términos y Condiciones
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <FileCheck className="h-4 w-4 mr-2" />
              Contrato de Servicios
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <FileCheck className="h-4 w-4 mr-2" />
              Acuerdo de Confidencialidad
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <FileCheck className="h-4 w-4 mr-2" />
              Términos de Garantía
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <FileCheck className="h-4 w-4 mr-2" />
              Política de Privacidad
            </Button>
          </div>
          
          <div className="mt-6 pt-4 border-t">
            <Button variant="outline" className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Descargar todos los documentos
            </Button>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow mt-6">
          <h2 className="text-lg font-semibold mb-4">Estado de Aprobaciones</h2>
          
          <div className="space-y-3">
            {[
              { document: "Términos y Condiciones", approved: true, date: "12/04/2023" },
              { document: "Contrato de Servicios", approved: true, date: "15/04/2023" },
              { document: "Acuerdo de Confidencialidad", approved: false, date: "Pendiente" },
              { document: "Términos de Garantía", approved: false, date: "Pendiente" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-2 border-b">
                <span className="text-sm">{item.document}</span>
                <div className="flex items-center">
                  <span className={`inline-block w-3 h-3 rounded-full mr-2 ${item.approved ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                  <span className="text-xs text-gray-500">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-2">
        <div className="bg-white p-5 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-6">Términos y Condiciones</h2>
          
          <div className="border rounded-lg p-6 mb-6 h-96 overflow-y-auto text-sm">
            <h3 className="font-semibold mb-4">1. Generalidades</h3>
            <p className="mb-4">
              El presente documento establece los términos y condiciones generales (en adelante, los "Términos y Condiciones") que serán aplicables a la prestación de servicios de diseño de interiores por parte de [Nombre de la Empresa] (en adelante, la "Empresa") a favor del cliente (en adelante, el "Cliente").
            </p>
            
            <h3 className="font-semibold mb-4">2. Servicios</h3>
            <p className="mb-4">
              La Empresa prestará los servicios de diseño de interiores según lo acordado en el documento de especificaciones técnicas (Spec Book) y la propuesta de servicios aceptada por el Cliente. Los servicios incluyen:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Desarrollo de concepto de diseño</li>
              <li>Selección de materiales y acabados</li>
              <li>Especificaciones técnicas detalladas</li>
              <li>Coordinación con contratistas y proveedores</li>
              <li>Supervisión de implementación (si está incluido en el contrato)</li>
            </ul>
            
            <h3 className="font-semibold mb-4">3. Responsabilidades del Cliente</h3>
            <p className="mb-4">
              El Cliente se compromete a:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Proporcionar información precisa sobre sus necesidades y preferencias</li>
              <li>Revisar y aprobar las propuestas y documentos en los plazos acordados</li>
              <li>Realizar los pagos según lo estipulado en el calendario de pagos</li>
              <li>Obtener los permisos necesarios para realizar los trabajos</li>
            </ul>
            
            <h3 className="font-semibold mb-4">4. Derechos de Propiedad Intelectual</h3>
            <p className="mb-4">
              Todos los diseños, conceptos, ilustraciones y documentos técnicos desarrollados por la Empresa son propiedad intelectual de la misma. El Cliente adquiere una licencia de uso para la implementación específica del proyecto contratado, pero no podrá reproducir, modificar o utilizar dichos elementos para otros fines sin autorización expresa.
            </p>
            
            <h3 className="font-semibold mb-4">5. Garantías y Limitación de Responsabilidad</h3>
            <p className="mb-4">
              La Empresa garantiza la prestación de sus servicios con la diligencia y calidad profesional debida. Sin embargo, no se responsabiliza por:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Defectos de fabricación en productos seleccionados (cubiertos por garantía de fabricante)</li>
              <li>Trabajos realizados por contratistas no recomendados por la Empresa</li>
              <li>Modificaciones realizadas sin consulta o aprobación de la Empresa</li>
            </ul>
            
            <h3 className="font-semibold mb-4">6. Ley Aplicable y Resolución de Conflictos</h3>
            <p className="mb-4">
              Los presentes Términos y Condiciones se regirán por la legislación vigente del país del Cliente. Cualquier controversia derivada de la interpretación o cumplimiento de este acuerdo será resuelta mediante negociación amistosa y, en su defecto, a través de mediación o tribunales competentes.
            </p>
          </div>
          
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Checkbox id="agree-terms" />
                <label
                  htmlFor="agree-terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  He leído y acepto los términos y condiciones
                </label>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="client-name">Nombre completo</Label>
                  <Input id="client-name" placeholder="Nombre del cliente" />
                </div>
                <div>
                  <Label htmlFor="client-position">Cargo</Label>
                  <Input id="client-position" placeholder="Ej: Representante legal" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Firma Digital</h3>
              <div className="border border-dashed rounded-lg h-32 flex items-center justify-center bg-gray-50">
                <p className="text-gray-400">Firmar aquí o cargar firma digital</p>
              </div>
            </div>
            
            <div className="flex justify-end space-x-4 pt-4 border-t">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Descargar copia
              </Button>
              <Button>
                <FileCheck className="h-4 w-4 mr-2" />
                Firmar y Confirmar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalTab;

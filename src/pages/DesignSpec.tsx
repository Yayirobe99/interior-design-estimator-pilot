
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  PaintBucket, 
  FileText, 
  Layers, 
  Building2, 
  MessageCircle, 
  FileCheck, 
  Sun,
  Moon
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MaterialsTab from "@/components/design-spec/MaterialsTab";
import DocumentationTab from "@/components/design-spec/DocumentationTab";
import OrganizationTab from "@/components/design-spec/OrganizationTab";
import CollaborationTab from "@/components/design-spec/CollaborationTab";
import LegalTab from "@/components/design-spec/LegalTab";

const DesignSpec = () => {
  // Estado para modo oscuro
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-wrap items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-1">Libro de Especificaciones</h1>
            <p className="text-gray-600">
              Sistema completo para gestionar especificaciones técnicas de proyectos de diseño de interiores
            </p>
          </div>
          <div className="flex items-center gap-2 mt-4 lg:mt-0">
            <Button size="sm" variant="outline" className="flex items-center gap-1">
              <FileText className="h-4 w-4" /> Nuevo Proyecto
            </Button>
            <Button size="sm" variant="outline" className="flex items-center gap-1">
              <Building2 className="h-4 w-4" /> Exportar
            </Button>
            <Button 
              size="icon" 
              variant="outline" 
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        <Tabs defaultValue="materiales" className="w-full">
          <TabsList className="grid grid-cols-5 mb-8">
            <TabsTrigger value="materiales" className="flex items-center gap-2">
              <PaintBucket className="h-4 w-4" /> Materiales
            </TabsTrigger>
            <TabsTrigger value="documentacion" className="flex items-center gap-2">
              <FileText className="h-4 w-4" /> Documentación
            </TabsTrigger>
            <TabsTrigger value="organizacion" className="flex items-center gap-2">
              <Layers className="h-4 w-4" /> Organización
            </TabsTrigger>
            <TabsTrigger value="colaboracion" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> Colaboración
            </TabsTrigger>
            <TabsTrigger value="legal" className="flex items-center gap-2">
              <FileCheck className="h-4 w-4" /> Legal
            </TabsTrigger>
          </TabsList>

          {/* PESTAÑA DE MATERIALES Y PRODUCTOS */}
          <TabsContent value="materiales">
            <MaterialsTab />
          </TabsContent>

          {/* PESTAÑA DE DOCUMENTACIÓN */}
          <TabsContent value="documentacion">
            <DocumentationTab />
          </TabsContent>

          {/* PESTAÑA DE ORGANIZACIÓN */}
          <TabsContent value="organizacion">
            <OrganizationTab />
          </TabsContent>
          
          {/* PESTAÑA DE COLABORACIÓN */}
          <TabsContent value="colaboracion">
            <CollaborationTab />
          </TabsContent>
          
          {/* PESTAÑA DE LEGAL */}
          <TabsContent value="legal">
            <LegalTab />
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default DesignSpec;

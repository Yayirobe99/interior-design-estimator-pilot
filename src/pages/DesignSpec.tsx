import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";
import { 
  PaintBucket, 
  FileText, 
  Layers, 
  Building2, 
  Calendar, 
  Upload,
  Download, 
  MessageCircle, 
  History, 
  User,
  FileCheck, 
  Search,
  Folder,
  Clock,
  Share,
  FileCode,
  Component,
  Monitor,
  Sun,
  Moon
} from "lucide-react";

const DesignSpec = () => {
  // Estados para pestañas principales y subpestañas
  const [materialType, setMaterialType] = useState("all");
  const [materialView, setMaterialView] = useState("gallery");
  const [darkMode, setDarkMode] = useState(false);
  const [device, setDevice] = useState("desktop");
  
  // Estado para formulario de material
  const [materialForm, setMaterialForm] = useState({
    name: "",
    category: "floor",
    manufacturer: "",
    sku: "",
    dimensions: "",
    color: "#FFFFFF",
    finish: "",
    price: "",
    quantity: "1",
    notes: "",
    sustainable: false,
    fireproof: false
  });

  // Categorías de materiales
  const materialCategories = [
    { value: "floor", label: "Pisos" },
    { value: "wall", label: "Paredes" },
    { value: "ceiling", label: "Techos" },
    { value: "furniture", label: "Mobiliario" },
    { value: "lighting", label: "Iluminación" },
    { value: "textile", label: "Textiles" },
    { value: "hardware", label: "Herrajes" },
    { value: "decor", label: "Decoración" }
  ];

  // Datos de ejemplo para materiales
  const sampleMaterials = [
    {
      id: 1,
      name: "Porcelanato Marmorizado Calacatta",
      category: "floor",
      manufacturer: "Porcelanosa",
      sku: "PRC-CAL-60x60",
      dimensions: "60cm x 60cm x 0.8cm",
      color: "#F5F5F0",
      finish: "Mate",
      price: "45.99",
      quantity: "86",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
      notes: "Acabado premium, requiere instalación especializada",
      sustainable: true,
      fireproof: true
    },
    {
      id: 2,
      name: "Lámpara Colgante Moderna",
      category: "lighting",
      manufacturer: "Artemide",
      sku: "ART-LC-001",
      dimensions: "Ø40cm x 45cm altura",
      color: "#000000",
      finish: "Negro mate",
      price: "299.50",
      quantity: "4",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      notes: "Incluye 3 bombillas LED E27",
      sustainable: false,
      fireproof: false
    }
  ];

  // Función de búsqueda
  const handleSearchMaterials = (term) => {
    console.log("Searching for:", term);
    // Aquí iría la lógica de búsqueda
  };

  // Función para manejar cambios en el formulario de materiales
  const handleMaterialFormChange = (field, value) => {
    setMaterialForm({
      ...materialForm,
      [field]: value
    });
  };

  // Función para guardar un nuevo material
  const handleSaveMaterial = (e) => {
    e.preventDefault();
    console.log("Material guardado:", materialForm);
    // Aquí iría la lógica para guardar el material en la base de datos
  };

  // Filtrar materiales por categoría
  const filteredMaterials = materialType === "all" 
    ? sampleMaterials
    : sampleMaterials.filter(material => material.category === materialType);

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
              <Download className="h-4 w-4" /> Exportar
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
          <TabsContent value="materiales" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Panel lateral - formulario */}
              <div className="lg:col-span-1">
                <div className="bg-white p-5 rounded-lg shadow">
                  <h2 className="text-lg font-semibold mb-4">Añadir Material</h2>
                  
                  <form onSubmit={handleSaveMaterial} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nombre</Label>
                      <Input 
                        id="name"
                        value={materialForm.name}
                        onChange={(e) => handleMaterialFormChange("name", e.target.value)}
                        placeholder="Ej: Porcelanato Marmorizado"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="category">Categoría</Label>
                      <select 
                        id="category"
                        value={materialForm.category}
                        onChange={(e) => handleMaterialFormChange("category", e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      >
                        {materialCategories.map((cat) => (
                          <option key={cat.value} value={cat.value}>
                            {cat.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="manufacturer">Fabricante</Label>
                        <Input 
                          id="manufacturer"
                          value={materialForm.manufacturer}
                          onChange={(e) => handleMaterialFormChange("manufacturer", e.target.value)}
                          placeholder="Ej: Porcelanosa"
                        />
                      </div>
                      <div>
                        <Label htmlFor="sku">Código SKU</Label>
                        <Input 
                          id="sku"
                          value={materialForm.sku}
                          onChange={(e) => handleMaterialFormChange("sku", e.target.value)}
                          placeholder="Ej: PRC-001"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="dimensions">Dimensiones</Label>
                      <Input 
                        id="dimensions"
                        value={materialForm.dimensions}
                        onChange={(e) => handleMaterialFormChange("dimensions", e.target.value)}
                        placeholder="Ej: 60cm x 60cm"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="color">Color</Label>
                        <div className="flex space-x-2">
                          <Input 
                            type="color"
                            id="color"
                            value={materialForm.color}
                            onChange={(e) => handleMaterialFormChange("color", e.target.value)}
                            className="h-10 w-10 p-1"
                          />
                          <Input 
                            type="text"
                            value={materialForm.color}
                            onChange={(e) => handleMaterialFormChange("color", e.target.value)}
                            className="flex-1"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="finish">Acabado</Label>
                        <Input 
                          id="finish"
                          value={materialForm.finish}
                          onChange={(e) => handleMaterialFormChange("finish", e.target.value)}
                          placeholder="Ej: Mate"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="price">Precio Unitario</Label>
                        <Input 
                          id="price"
                          type="number"
                          value={materialForm.price}
                          onChange={(e) => handleMaterialFormChange("price", e.target.value)}
                          placeholder="Ej: 45.99"
                        />
                      </div>
                      <div>
                        <Label htmlFor="quantity">Cantidad</Label>
                        <Input 
                          id="quantity"
                          type="number"
                          value={materialForm.quantity}
                          onChange={(e) => handleMaterialFormChange("quantity", e.target.value)}
                          placeholder="Ej: 50"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="image">Imagen</Label>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-3 text-gray-400" />
                            <p className="mb-2 text-sm text-gray-500">
                              <span className="font-semibold">Click para subir</span> o arrastrar y soltar
                            </p>
                            <p className="text-xs text-gray-500">
                              SVG, PNG, JPG (MAX. 2MB)
                            </p>
                          </div>
                          <input id="image" type="file" className="hidden" />
                        </label>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="notes">Notas de Instalación</Label>
                      <textarea
                        id="notes"
                        value={materialForm.notes}
                        onChange={(e) => handleMaterialFormChange("notes", e.target.value)}
                        placeholder="Instrucciones especiales para la instalación"
                        className="flex min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      />
                    </div>

                    <div className="flex items-start space-x-8">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="sustainable" 
                          checked={materialForm.sustainable}
                          onCheckedChange={(checked) => 
                            handleMaterialFormChange("sustainable", checked)
                          }
                        />
                        <label
                          htmlFor="sustainable"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Sostenible
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="fireproof" 
                          checked={materialForm.fireproof}
                          onCheckedChange={(checked) => 
                            handleMaterialFormChange("fireproof", checked)
                          }
                        />
                        <label
                          htmlFor="fireproof"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Resistente al fuego
                        </label>
                      </div>
                    </div>

                    <Button type="submit" className="w-full">
                      Guardar Material
                    </Button>
                  </form>
                </div>
              </div>
              
              {/* Galería principal */}
              <div className="lg:col-span-3">
                <div className="bg-white p-5 rounded-lg shadow">
                  <div className="flex flex-wrap items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <h2 className="text-lg font-semibold">Catálogo de Materiales</h2>
                      <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-0.5 rounded">
                        {filteredMaterials.length} ítems
                      </span>
                    </div>
                    
                    <div className="flex space-x-3 mt-3 sm:mt-0">
                      <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                        <Input 
                          placeholder="Buscar materiales..." 
                          className="pl-8 w-full md:w-64"
                          onChange={(e) => handleSearchMaterials(e.target.value)}
                        />
                      </div>
                      
                      <select
                        onChange={(e) => setMaterialType(e.target.value)}
                        value={materialType}
                        className="h-10 rounded-md border border-input px-3 py-2 text-sm focus-visible:outline-none"
                      >
                        <option value="all">Todas las categorías</option>
                        {materialCategories.map((cat) => (
                          <option key={cat.value} value={cat.value}>{cat.label}</option>
                        ))}
                      </select>
                      
                      <div className="flex border rounded-md overflow-hidden">
                        <button
                          onClick={() => setMaterialView("gallery")}
                          className={`px-2 py-1 ${materialView === "gallery" ? "bg-gray-200" : "bg-white"}`}
                          title="Vista de galería"
                        >
                          <Component className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => setMaterialView("list")}
                          className={`px-2 py-1 ${materialView === "list" ? "bg-gray-200" : "bg-white"}`}
                          title="Vista de lista"
                        >
                          <Layers className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {materialView === "gallery" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredMaterials.map((material) => (
                        <div key={material.id} className="border rounded-lg overflow-hidden bg-gray-50 hover:shadow-md transition-shadow">
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={material.image} 
                              alt={material.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="font-medium text-base mb-1">{material.name}</h3>
                            <div className="text-sm text-gray-600 mb-2">
                              <p>{material.manufacturer} • {material.sku}</p>
                              <p className="mt-1">{material.dimensions}</p>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center space-x-1">
                                <div 
                                  className="w-4 h-4 rounded-full border"
                                  style={{backgroundColor: material.color}}
                                  title={`Color: ${material.color}`}
                                ></div>
                                <span className="text-xs">{material.finish}</span>
                              </div>
                              <p className="font-medium">${material.price}</p>
                            </div>
                            
                            <div className="flex mt-3 pt-3 border-t justify-between items-center">
                              <div className="flex space-x-2">
                                {material.sustainable && (
                                  <span className="bg-green-100 text-green-800 text-xs px-1.5 py-0.5 rounded">
                                    Eco
                                  </span>
                                )}
                                {material.fireproof && (
                                  <span className="bg-orange-100 text-orange-800 text-xs px-1.5 py-0.5 rounded">
                                    Ignífugo
                                  </span>
                                )}
                              </div>
                              <Button variant="outline" size="sm">
                                Ver detalles
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="border rounded-lg overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Material
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Especificaciones
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Precio
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Acciones
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {filteredMaterials.map((material) => (
                            <tr key={material.id}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-10 w-10">
                                    <img 
                                      className="h-10 w-10 rounded-full object-cover" 
                                      src={material.image} 
                                      alt={material.name}
                                    />
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                      {material.name}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                      {material.manufacturer} • {material.sku}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="text-sm text-gray-900">{material.dimensions}</div>
                                <div className="text-xs text-gray-500 flex items-center">
                                  <div 
                                    className="w-3 h-3 rounded-full border mr-1"
                                    style={{backgroundColor: material.color}}
                                  ></div>
                                  {material.finish}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">${material.price}</div>
                                <div className="text-xs text-gray-500">
                                  Cantidad: {material.quantity}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <Button variant="outline" size="sm">
                                  Ver detalles
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  
                  {filteredMaterials.length === 0 && (
                    <div className="text-center py-12">
                      <h3 className="text-lg font-medium text-gray-900">No se encontraron materiales</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Intenta con otra categoría o añade nuevos materiales
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* PESTAÑA DE DOCUMENTACIÓN */}
          <TabsContent value="documentacion" className="space-y-8">
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
          </TabsContent>

          {/* PESTAÑA DE ORGANIZACIÓN */}
          <TabsContent value="organizacion" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1">
                <div className="bg-white p-5 rounded-lg shadow">
                  <h2 className="text-lg font-semibold mb-4">Estructura del Proyecto</h2>
                  
                  <div className="space-y-1">
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      <Folder className="h-4 w-4 mr-2" /> Vista general
                    </Button>
                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center justify-between w-full

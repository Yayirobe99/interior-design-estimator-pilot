
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Upload, Component, Layers } from "lucide-react";
import MaterialCard from "./MaterialCard";
import MaterialListItem from "./MaterialListItem";
import MaterialForm from "./MaterialForm";

// Material categories for reuse
export const materialCategories = [
  { value: "floor", label: "Pisos" },
  { value: "wall", label: "Paredes" },
  { value: "ceiling", label: "Techos" },
  { value: "furniture", label: "Mobiliario" },
  { value: "lighting", label: "Iluminación" },
  { value: "textile", label: "Textiles" },
  { value: "hardware", label: "Herrajes" },
  { value: "decor", label: "Decoración" }
];

// Sample materials data
export const sampleMaterials = [
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

const MaterialsTab = () => {
  const [materialType, setMaterialType] = useState("all");
  const [materialView, setMaterialView] = useState("gallery");
  
  // Función de búsqueda
  const handleSearchMaterials = (term) => {
    console.log("Searching for:", term);
    // Aquí iría la lógica de búsqueda
  };

  // Filtrar materiales por categoría
  const filteredMaterials = materialType === "all" 
    ? sampleMaterials
    : sampleMaterials.filter(material => material.category === materialType);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Panel lateral - formulario */}
      <div className="lg:col-span-1">
        <div className="bg-white p-5 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Añadir Material</h2>
          <MaterialForm />
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
                <MaterialCard key={material.id} material={material} />
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
                    <MaterialListItem key={material.id} material={material} />
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
  );
};

export default MaterialsTab;

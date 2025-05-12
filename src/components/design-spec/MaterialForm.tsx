
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload } from "lucide-react";
import { materialCategories } from "./MaterialsTab";

const MaterialForm = () => {
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

  return (
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
  );
};

export default MaterialForm;

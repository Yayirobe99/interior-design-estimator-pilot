
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Filter } from "lucide-react";

interface BudgetToolbarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  filterCategory: string;
  onFilterChange: (value: string) => void;
}

const BudgetToolbar: React.FC<BudgetToolbarProps> = ({
  searchTerm,
  onSearchChange,
  filterCategory,
  onFilterChange
}) => {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Estimador de Presupuesto</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Añadir ítem
        </Button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Filter className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Buscar por código o nombre..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        
        <Select value={filterCategory} onValueChange={onFilterChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filtrar por categoría" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos los ítems</SelectItem>
            <SelectItem value="casegoods">Casegoods</SelectItem>
            <SelectItem value="textiles">Textiles</SelectItem>
            <SelectItem value="lighting">Iluminación</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default BudgetToolbar;

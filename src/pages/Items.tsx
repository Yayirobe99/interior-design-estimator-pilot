
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ItemCard, { ItemProps } from "@/components/ItemCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mockItems } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

const Items = () => {
  const [items, setItems] = React.useState<ItemProps[]>(mockItems);
  const [filter, setFilter] = React.useState<string>("todos");
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  const filteredItems = React.useMemo(() => {
    let result = items;
    
    // Aplicar filtro por categoría
    if (filter !== "todos") {
      result = result.filter((item) => item.category === filter);
    }
    
    // Aplicar filtro de búsqueda
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(term) ||
          (item.description && item.description.toLowerCase().includes(term)) ||
          (item.supplier && item.supplier.toLowerCase().includes(term))
      );
    }
    
    return result;
  }, [items, filter, searchTerm]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8 flex-col md:flex-row gap-4">
          <h1 className="text-3xl font-bold">Catálogo de ítems</h1>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Buscar ítems..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
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
              variant={filter === "mueble" ? "default" : "outline"}
              onClick={() => setFilter("mueble")}
              size="sm"
            >
              Muebles
            </Button>
            <Button 
              variant={filter === "material" ? "default" : "outline"}
              onClick={() => setFilter("material")}
              size="sm"
            >
              Materiales
            </Button>
          </div>
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl text-gray-500">No hay ítems que mostrar</h3>
            <p className="mt-2 text-gray-400">
              {searchTerm
                ? "No se encontraron ítems con tu búsqueda."
                : filter !== "todos"
                ? `No hay ítems en la categoría "${filter === "mueble" ? "Muebles" : "Materiales"}".`
                : "Agrega ítems para comenzar a construir tu catálogo."}
            </p>
            <Button className="mt-4">
              Agregar nuevo ítem
            </Button>
          </div>
        )}

        <div className="mt-6 p-4 bg-interior-green/20 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Información del catálogo</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-white">
              {items.length} ítems en total
            </Badge>
            <Badge variant="outline" className="bg-white">
              {items.filter(i => i.category === "mueble").length} muebles
            </Badge>
            <Badge variant="outline" className="bg-white">
              {items.filter(i => i.category === "material").length} materiales
            </Badge>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Items;


import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableRow, 
  TableHead, 
  TableCell 
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { formatCurrency } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { Plus, Filter, Edit } from "lucide-react";

// Simplificación de datos para el ejemplo (esto vendría de la API conectada a PostgreSQL)
type BudgetItem = {
  id: string;
  category: string;
  item_code: string;
  item_name: string;
  description?: string;
  width_mm?: number;
  depth_mm?: number;
  height_mm?: number;
  unit_price: number;
  total_qty: number;
  uom: string;
  image_url?: string;
  total: number;
};

// Ejemplo de datos que simularía lo que viene del archivo Excel
const mockBudgetItems: BudgetItem[] = [
  {
    id: "1",
    category: "Casegoods",
    item_code: "CG-001",
    item_name: "CABECERO",
    description: "Cabecero tapizado en tela cliente con botones",
    width_mm: 3610,
    depth_mm: 76,
    height_mm: 1490,
    unit_price: 540,
    total_qty: 10,
    uom: "UND",
    image_url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    total: 5400
  },
  {
    id: "2",
    category: "Textiles",
    item_code: "TXT-03",
    item_name: "TELA COJÍN @ TIPO A",
    description: "Tela para cojines decorativos",
    unit_price: 120,
    total_qty: 15,
    uom: "ML",
    total: 1800
  },
  {
    id: "3",
    category: "Lighting",
    item_code: "LGT-01",
    item_name: "LÁMPARA DE MESA",
    description: "Lámpara de mesa con base de metal y pantalla textil",
    width_mm: 400,
    depth_mm: 400,
    height_mm: 650,
    unit_price: 280,
    total_qty: 20,
    uom: "UND",
    image_url: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    total: 5600
  }
];

const BudgetEstimator = () => {
  const [items, setItems] = useState<BudgetItem[]>(mockBudgetItems);
  const [filter, setFilter] = useState<string>("todos");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [grandTotal, setGrandTotal] = useState<number>(0);
  const { toast } = useToast();

  // Filtrar items según los criterios
  const filteredItems = React.useMemo(() => {
    let result = items;
    
    // Filtrar por categoría
    if (filter !== "todos") {
      result = result.filter((item) => item.category.toLowerCase() === filter.toLowerCase());
    }
    
    // Filtrar por búsqueda
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (item) =>
          item.item_name.toLowerCase().includes(term) ||
          item.item_code.toLowerCase().includes(term) ||
          (item.description && item.description.toLowerCase().includes(term))
      );
    }
    
    return result;
  }, [items, filter, searchTerm]);

  // Calcular el total general
  useEffect(() => {
    const total = items.reduce((sum, item) => sum + item.total, 0);
    setGrandTotal(total);
  }, [items]);

  // Actualizar cantidad y recalcular total
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 0) return;
    
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === id 
          ? { ...item, total_qty: quantity, total: quantity * item.unit_price } 
          : item
      )
    );
    
    toast({
      title: "Cantidad actualizada",
      description: `La cantidad ha sido actualizada y los totales recalculados.`
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
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
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Select value={filter} onValueChange={setFilter}>
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
        
        <div className="rounded-md border shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Código</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead className="w-[150px]">Categoría</TableHead>
                <TableHead className="w-[100px]">UOM</TableHead>
                <TableHead className="text-right">Precio Unit.</TableHead>
                <TableHead className="w-[120px]">Cantidad</TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.item_code}</TableCell>
                  <TableCell>
                    <div>
                      {item.item_name}
                      {item.description && (
                        <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                      )}
                      {item.width_mm && item.depth_mm && item.height_mm && (
                        <p className="text-xs text-gray-500">
                          {item.width_mm} × {item.depth_mm} × {item.height_mm} mm
                        </p>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.uom}</TableCell>
                  <TableCell className="text-right">{formatCurrency(item.unit_price)}</TableCell>
                  <TableCell>
                    <Input 
                      type="number" 
                      value={item.total_qty} 
                      min={0}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                      className="w-20"
                    />
                  </TableCell>
                  <TableCell className="text-right font-medium">{formatCurrency(item.total)}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="mt-8 flex justify-end">
          <div className="bg-interior-green/10 rounded-lg p-4 w-full md:w-80">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Total ítems:</span>
              <span>{filteredItems.length}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal:</span>
              <span>{formatCurrency(grandTotal)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">IVA (21%):</span>
              <span>{formatCurrency(grandTotal * 0.21)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg mt-2 pt-2 border-t">
              <span>TOTAL:</span>
              <span>{formatCurrency(grandTotal * 1.21)}</span>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BudgetEstimator;

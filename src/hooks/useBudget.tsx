
import { useState, useEffect, useMemo } from "react";
import { useToast } from "@/components/ui/use-toast";

export interface BudgetItem {
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
}

export const useBudget = (initialItems: BudgetItem[]) => {
  const [items, setItems] = useState<BudgetItem[]>(initialItems);
  const [filter, setFilter] = useState<string>("todos");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [grandTotal, setGrandTotal] = useState<number>(0);
  const [selectedItem, setSelectedItem] = useState<BudgetItem | null>(null);
  const { toast } = useToast();

  // Filtrar items según los criterios
  const filteredItems = useMemo(() => {
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

  return {
    items,
    filteredItems,
    grandTotal,
    filter,
    setFilter,
    searchTerm,
    setSearchTerm,
    selectedItem,
    setSelectedItem,
    updateQuantity
  };
};

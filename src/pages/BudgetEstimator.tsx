
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BudgetToolbar from "@/components/BudgetToolbar";
import BudgetTable from "@/components/BudgetTable";
import BudgetSummary from "@/components/BudgetSummary";
import ItemDetailPanel from "@/components/ItemDetailPanel";
import { useBudget } from "@/hooks/useBudget";

// Ejemplo de datos que simularía lo que viene del archivo Excel
const mockBudgetItems = [
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
  const {
    filteredItems,
    grandTotal,
    filter,
    setFilter,
    searchTerm,
    setSearchTerm,
    selectedItem,
    setSelectedItem,
    updateQuantity
  } = useBudget(mockBudgetItems);

  // Mostrar panel de detalles del ítem
  const showItemDetails = (item: typeof mockBudgetItems[0]) => {
    setSelectedItem(item);
  };

  // Cerrar panel de detalles
  const closeItemDetails = () => {
    setSelectedItem(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 relative">
        <BudgetToolbar 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          filterCategory={filter}
          onFilterChange={setFilter}
        />
        
        <BudgetTable 
          items={filteredItems}
          onItemClick={showItemDetails}
          onQuantityChange={updateQuantity}
        />
        
        <div className="mt-8 flex justify-end">
          <BudgetSummary 
            totalItems={filteredItems.length}
            subtotal={grandTotal}
          />
        </div>
        
        {/* Panel de detalles del ítem */}
        {selectedItem && (
          <ItemDetailPanel 
            {...selectedItem} 
            onClose={closeItemDetails}
            onUpdateQuantity={updateQuantity}
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default BudgetEstimator;

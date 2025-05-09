
import React from "react";
import { formatCurrency } from "@/lib/utils";

interface BudgetSummaryProps {
  totalItems: number;
  subtotal: number;
  vatRate?: number;
}

const BudgetSummary: React.FC<BudgetSummaryProps> = ({ 
  totalItems, 
  subtotal, 
  vatRate = 0.21 
}) => {
  const vatAmount = subtotal * vatRate;
  const grandTotal = subtotal + vatAmount;

  return (
    <div className="bg-interior-green/10 rounded-lg p-4 w-full md:w-80">
      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Total ítems:</span>
        <span>{totalItems}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Subtotal:</span>
        <span>{formatCurrency(subtotal)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-600">IVA ({vatRate * 100}%):</span>
        <span>{formatCurrency(vatAmount)}</span>
      </div>
      <div className="flex justify-between font-bold text-lg mt-2 pt-2 border-t">
        <span>TOTAL:</span>
        <span>{formatCurrency(grandTotal)}</span>
      </div>
    </div>
  );
};

export default BudgetSummary;

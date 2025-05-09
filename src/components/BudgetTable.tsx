
import React from "react";
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
import { Edit, Image as ImageIcon } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

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

interface BudgetTableProps {
  items: BudgetItem[];
  onItemClick: (item: BudgetItem) => void;
  onQuantityChange: (id: string, quantity: number) => void;
}

const BudgetTable: React.FC<BudgetTableProps> = ({ 
  items, 
  onItemClick, 
  onQuantityChange 
}) => {
  return (
    <div className="rounded-md border shadow overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[60px]"></TableHead>
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
          {items.map((item) => (
            <TableRow 
              key={item.id} 
              className="cursor-pointer hover:bg-gray-50"
              onClick={() => onItemClick(item)}
            >
              <TableCell className="p-2">
                <div className="w-10 h-10 relative rounded overflow-hidden bg-gray-100">
                  {item.image_url ? (
                    <img 
                      src={item.image_url} 
                      alt={item.item_name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <ImageIcon className="h-5 w-5 text-gray-400" />
                    </div>
                  )}
                </div>
              </TableCell>
              <TableCell className="font-medium">{item.item_code}</TableCell>
              <TableCell>
                <div>
                  {item.item_name}
                  {item.description && (
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">{item.description}</p>
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
                  onChange={(e) => {
                    e.stopPropagation();
                    onQuantityChange(item.id, parseInt(e.target.value) || 0);
                  }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-20"
                />
              </TableCell>
              <TableCell className="text-right font-medium">{formatCurrency(item.total)}</TableCell>
              <TableCell>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    onItemClick(item);
                  }}
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BudgetTable;

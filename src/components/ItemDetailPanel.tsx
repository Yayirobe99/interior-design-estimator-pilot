
import React from "react";
import { X, Image as ImageIcon, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatCurrency, formatDimensions, getImageUrl } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

export interface ItemDetailProps {
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
  onClose: () => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

const ItemDetailPanel: React.FC<ItemDetailProps> = ({
  id,
  category,
  item_code,
  item_name,
  description,
  width_mm,
  depth_mm,
  height_mm,
  unit_price,
  total_qty,
  uom,
  image_url,
  total,
  onClose,
  onUpdateQuantity
}) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [quantity, setQuantity] = React.useState(total_qty);

  // Manejar cambio de cantidad
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 0) return;
    setQuantity(newQuantity);
    onUpdateQuantity(id, newQuantity);
  };

  return (
    <div className="fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-lg border-l z-50 overflow-y-auto flex flex-col">
      <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
        <h3 className="text-lg font-bold">{item_name}</h3>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="p-4 flex-grow">
        <div className="relative aspect-video mb-4 bg-gray-100 rounded-md overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Skeleton className="w-full h-full" />
              <ImageIcon className="h-10 w-10 text-gray-400 absolute" />
            </div>
          )}
          <img
            src={getImageUrl(image_url, item_code, item_name)}
            alt={item_name}
            className={`w-full h-full object-cover ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute bottom-0 left-0 bg-black/60 text-white text-xs px-2 py-1">
            Ref: {item_code}
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-900">Información básica</h4>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="bg-gray-50 p-2 rounded">
                <p className="text-xs text-gray-500">Categoría</p>
                <p className="text-sm font-medium">{category}</p>
              </div>
              <div className="bg-gray-50 p-2 rounded">
                <p className="text-xs text-gray-500">Código</p>
                <p className="text-sm font-medium">{item_code}</p>
              </div>
              <div className="bg-gray-50 p-2 rounded">
                <p className="text-xs text-gray-500">UOM</p>
                <p className="text-sm font-medium">{uom}</p>
              </div>
              <div className="bg-gray-50 p-2 rounded">
                <p className="text-xs text-gray-500">Precio Unitario</p>
                <p className="text-sm font-medium">{formatCurrency(unit_price)}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900">Dimensiones</h4>
            <div className="bg-gray-50 p-3 rounded mt-2">
              {width_mm && depth_mm && height_mm ? (
                <p className="text-sm">{formatDimensions(width_mm, depth_mm, height_mm)}</p>
              ) : (
                <p className="text-sm italic text-gray-500">Dimensiones no disponibles</p>
              )}
            </div>
          </div>
          
          {description && (
            <div>
              <h4 className="font-medium text-gray-900">Descripción</h4>
              <p className="mt-2 text-sm text-gray-600 bg-gray-50 p-3 rounded">{description}</p>
            </div>
          )}
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Cantidad</h4>
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 0}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 0)}
                className="w-20 h-10 border border-gray-300 rounded-md text-center"
                min={0}
              />
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t p-4 bg-interior-green/10 sticky bottom-0">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Precio Unitario:</span>
          <span>{formatCurrency(unit_price)}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Cantidad:</span>
          <span>{quantity} {uom}</span>
        </div>
        <div className="flex justify-between items-center font-bold text-lg pt-2 border-t">
          <span>TOTAL:</span>
          <span>{formatCurrency(unit_price * quantity)}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailPanel;

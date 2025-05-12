
import React from "react";
import { Button } from "@/components/ui/button";

interface MaterialProps {
  id: number;
  name: string;
  category: string;
  manufacturer: string;
  sku: string;
  dimensions: string;
  color: string;
  finish: string;
  price: string;
  quantity: string;
  image: string;
  notes?: string;
  sustainable: boolean;
  fireproof: boolean;
}

const MaterialListItem: React.FC<{ material: MaterialProps }> = ({ material }) => {
  return (
    <tr key={material.id}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img 
              className="h-10 w-10 rounded-full object-cover" 
              src={material.image} 
              alt={material.name}
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {material.name}
            </div>
            <div className="text-xs text-gray-500">
              {material.manufacturer} • {material.sku}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm text-gray-900">{material.dimensions}</div>
        <div className="text-xs text-gray-500 flex items-center">
          <div 
            className="w-3 h-3 rounded-full border mr-1"
            style={{backgroundColor: material.color}}
          ></div>
          {material.finish}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">${material.price}</div>
        <div className="text-xs text-gray-500">
          Cantidad: {material.quantity}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <Button variant="outline" size="sm">
          Ver detalles
        </Button>
      </td>
    </tr>
  );
};

export default MaterialListItem;

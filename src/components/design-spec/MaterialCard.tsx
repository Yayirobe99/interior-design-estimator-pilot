
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
  notes: string;
  sustainable: boolean;
  fireproof: boolean;
}

const MaterialCard: React.FC<{ material: MaterialProps }> = ({ material }) => {
  return (
    <div className="border rounded-lg overflow-hidden bg-gray-50 hover:shadow-md transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={material.image} 
          alt={material.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-base mb-1">{material.name}</h3>
        <div className="text-sm text-gray-600 mb-2">
          <p>{material.manufacturer} • {material.sku}</p>
          <p className="mt-1">{material.dimensions}</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center space-x-1">
            <div 
              className="w-4 h-4 rounded-full border"
              style={{backgroundColor: material.color}}
              title={`Color: ${material.color}`}
            ></div>
            <span className="text-xs">{material.finish}</span>
          </div>
          <p className="font-medium">${material.price}</p>
        </div>
        
        <div className="flex mt-3 pt-3 border-t justify-between items-center">
          <div className="flex space-x-2">
            {material.sustainable && (
              <span className="bg-green-100 text-green-800 text-xs px-1.5 py-0.5 rounded">
                Eco
              </span>
            )}
            {material.fireproof && (
              <span className="bg-orange-100 text-orange-800 text-xs px-1.5 py-0.5 rounded">
                Ignífugo
              </span>
            )}
          </div>
          <Button variant="outline" size="sm">
            Ver detalles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MaterialCard;

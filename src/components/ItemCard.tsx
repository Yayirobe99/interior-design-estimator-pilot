
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

export interface ItemProps {
  id: string;
  name: string;
  category: "mueble" | "material";
  price: number;
  imageUrl: string;
  supplier?: string;
  description?: string;
}

const ItemCard = ({ item }: { item: ItemProps }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md animate-fade-in">
      <div className="aspect-square overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold">{item.name}</CardTitle>
        <div className="flex items-center">
          <span className="text-xs px-2 py-1 bg-interior-green text-gray-700 rounded">
            {item.category === "mueble" ? "Mueble" : "Material"}
          </span>
          {item.supplier && (
            <span className="text-xs text-gray-500 ml-2">
              Proveedor: {item.supplier}
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        {item.description && (
          <p className="text-xs text-gray-600 mb-2 line-clamp-2">{item.description}</p>
        )}
      </CardContent>
      <CardFooter className="pt-0 flex justify-between items-center">
        <span className="text-lg font-bold text-interior-blue">
          {formatCurrency(item.price)}
        </span>
      </CardFooter>
    </Card>
  );
};

export default ItemCard;

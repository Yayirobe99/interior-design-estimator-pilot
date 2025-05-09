
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
  }).format(amount);
}

// Nuevas funciones útiles para el estimador de presupuestos
export function formatDimensions(width?: number, depth?: number, height?: number): string {
  if (!width || !depth || !height) return "No disponible";
  return `${width} × ${depth} × ${height} mm`;
}

export function calculateTotalPrice(unitPrice: number, quantity: number): number {
  return unitPrice * quantity;
}

export function calculateVAT(amount: number, vatRate: number = 0.21): number {
  return amount * vatRate;
}

export function calculateGrandTotal(amount: number, includeVAT: boolean = true, vatRate: number = 0.21): number {
  return includeVAT ? amount * (1 + vatRate) : amount;
}

export interface Product {
  id?: number;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
}

export interface StockResponse {
  id: number;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  belowMinimumStock: boolean;
  stockStatus: string;
}

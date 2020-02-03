export interface Product {
  name: string;
  id: number;
  categories: string[];
  stockCount: number;
  price: number;
}

export const products: Product[] = [
  {
    name: 'Toyota Camry',
    id: 1,
    categories: ['auto'],
    stockCount: 3,
    price: 400,
  },
  {
    name: 'Tush',
    id: 2,
    categories: ['beauty'],
    stockCount: 7,
    price: 55,
  },
  {
    name: 'The Godfather',
    id: 3,
    categories: ['books'],
    stockCount: 0,
    price: 10,
  }
];

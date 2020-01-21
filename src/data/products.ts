export interface Product {
  name: string;
  id: number;
  categories: string[];
}

export const products: Product[] = [
  {
    name: 'Toyota Camry',
    id: 1,
    categories: ['auto'],
  },
  {
    name: 'Tush',
    id: 2,
    categories: ['beauty'],
  },
  {
    name: 'The Godfather',
    id: 3,
    categories: ['books'],
  }
];

import { useState, useEffect } from 'react';
import { ItemProps } from '../components/Item';

export const useProducts = () => {
  const [products, setProducts] = useState<ItemProps[]>([]);
  useEffect(() => {
    const loadProducts = async () => {
      const response = await (await fetch('data/data.json')).json();
      setProducts(response[0].products);
    };
    loadProducts();
  }, []);

  return products;
};

"use client";

import { useEffect, useState } from "react";

import { fetchProducts } from "@/services/api";

export async function loader() {
  const products = await fetchProducts();
  return { props: { products } };
}

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    getProducts();
  }, []);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} style={{ height: 200 }} alt="" />
          {product.title}
        </li>
      ))}
    </ul>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { fetchProductById } from "@/services/api";

export default function ProductDetail({ params }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const id = params.id;

  useEffect(() => {
    const getProduct = async () => {
      if (id) {
        const data = await fetchProductById(id);
        setProduct(data);
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="relative w-full max-w-md px-12 overflow-hidden rounded-md">
        <Image
          src={product.image || "/img/fallback.jpg"}
          alt={product.title}
          width={200}
          height={200}
          className="rounded-md"
        />
      </div>
      <h1 className="mt-4 text-xl font-bold">{product.title}</h1>
      <p className="mt-1 text-lg">${product.price}</p>
      <p className="mt-2 text-gray-700">{product.category}</p>
      <p className="mt-2 text-gray-700">
        {product.rating.rate} - {product.rating.count}
      </p>
      <p className="mt-2 text-gray-700">{product.description}</p>
    </div>
  );
}

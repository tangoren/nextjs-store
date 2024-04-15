"use client";

import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";

import { fetchProducts } from "@/services/api";
import Card from "@/components/product/Card";
import { Skeleton } from "@/components/ui/skeleton";

export default function SectionProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const allProducts = await fetchProducts();
      const productMap = {};

      allProducts.forEach((product) => {
        if (!productMap[product.category]) {
          productMap[product.category] = product;
        }
      });

      const selectedProducts = Object.values(productMap);
      setProducts(selectedProducts);
      setLoading(false);
    };

    getProducts();
  }, []);

  return loading ? (
    <Skeleton className="w-full h-[462px] rounded-lg flex justify-center items-center text-slate-400">
      <LoaderCircle className="animate-spin" size={32} />
    </Skeleton>
  ) : (
    <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}

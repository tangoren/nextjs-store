import Card from "@/components/product/Card";

const products = [
  {
    id: 1,
    image: "/img/product-1.jpg",
    title: "Classic Black Cotton Crew Neck T-Shirt",
    price: 109.99,
  },
  {
    id: 2,
    image: "/img/product-2.jpg",
    title: "Stylish Black Slim-Fit Long Sleeve Shirt",
    price: 139.99,
  },
  {
    id: 3,
    image: "/img/product-4.jpg",
    title: "Cozy Black Warm Knit Cap",
    price: 55.99,
  },
  {
    id: 4,
    image: "/img/product-3.jpg",
    title: "Insulated Black Stainless Steel Vacuum Flask",
    price: 15.99,
  },
];

export default function SectionProducts() {
  return (
    <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}

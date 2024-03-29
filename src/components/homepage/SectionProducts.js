import Card from "@/components/product/Card";

export default function SectionProducts() {
  return (
    <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

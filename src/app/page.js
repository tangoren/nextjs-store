import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Slider from "@/components/homepage/Slider";
import Section from "@/components/homepage/Section";
import SectionCategory from "@/components/homepage/SectionCategory";
import Card from "@/components/product/Card";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Topbar />
      <Navbar />
      <Slider />
      <Section
        title="Shop by Category"
        buttonText="View All"
        buttonLink="/products"
        className="pt-24"
      >
        <SectionCategory />
      </Section>

      <Section
        title="Our Picks for You"
        buttonText="View All"
        buttonLink="/products"
        className="pt-32"
      >
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Section>

      <div style={{ height: 5000 }}>{/* temporary space for scrolling */}</div>
    </div>
  );
}

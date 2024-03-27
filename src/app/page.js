import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Slider from "@/components/homepage/Slider";
import Section from "@/components/homepage/Section";
import SectionCategory from "@/components/homepage/SectionCategory";

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
        className="pt-16"
      >
        <SectionCategory />
      </Section>

      <div style={{ height: 5000 }}>{/* temporary space for scrolling */}</div>
    </div>
  );
}

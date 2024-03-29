import { BadgePercent } from "lucide-react";

import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Slider from "@/components/homepage/Slider";
import Section from "@/components/homepage/Section";
import SectionCategory from "@/components/homepage/SectionCategory";
import SectionProducts from "@/components/homepage/SectionProducts";
import SectionCta from "@/components/homepage/SectionCta";

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
        <SectionProducts />
      </Section>

      <Section className="mt-32">
        <SectionCta />
      </Section>

      <div style={{ height: 5000 }}>{/* temporary space for scrolling */}</div>
    </div>
  );
}

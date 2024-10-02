import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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

      <Section title="Shop by Category" buttonText="View All" className="pt-24">
        <SectionCategory />
      </Section>

      <Section
        title="Our Picks for You"
        buttonText="View All"
        className="pt-24 md:pt-32"
      >
        <SectionProducts />
      </Section>

      <Section className="mt-24 md:mt-32">
        <SectionCta />
      </Section>

      <Footer />
    </div>
  );
}

"use client";

import { ArrowRight, Award, ShieldCheck, Users, Zap } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

const FooterAdvantageItem = ({ iconName, title, description }) => {
  return (
    <div>
      <div className="relative flex items-center justify-center mx-auto bg-white rounded-full size-16 stroke-indigo-400 border border-indigo-200 before:content-[''] before:rounded-full before:border before:border-indigo-100 before:size-20 before:-top-2 before:-left-2 before:absolute after:content-[''] after:rounded-full after:border after:border-indigo-50 after:size-24 after:-top-4 after:-left-4 after:absolute">
        {iconName}
      </div>

      <div className="text-center mt-7">
        <div className="text-sm font-semibold lg:text-base text-slate-800">
          {title}
        </div>
        <div className="mt-2 text-sm text-slate-600">{description}</div>
      </div>
    </div>
  );
};

const FooterDevLink = ({ link }) => {
  let title, href, icon;

  if (link === "github") {
    title = "GitHub";
    href = "https://www.github.com/tangoren";
    icon = (
      <svg viewBox="0 0 496 512" fill="currentColor" height="16" width="16">
        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
      </svg>
    );
  } else if (link === "linkedin") {
    title = "LinkedIn";
    href = "https://www.linkedin.com/in/tangoren/";
    icon = (
      <svg viewBox="0 0 448 512" fill="currentColor" height="16" width="16">
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 01107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
      </svg>
    );
  }

  return (
    <Button asChild variant="outline">
      <Link href={href} target="_blank" className="flex gap-1.5 select-none">
        <div className="text-slate-500">{icon}</div> {title}
      </Link>
    </Button>
  );
};

const FooterMenuSection = ({ title, children }) => {
  return (
    <div className="lg:mx-auto">
      <div className="text-sm font-semibold text-slate-800 mb-7">{title}</div>

      <ul className="text-sm transition-all duration-500">{children}</ul>
    </div>
  );
};

const FooterMenuSectionItem = ({ title, link }) => {
  const handleLinkClick = (e) => {
    if (!link || link === "#") {
      e.preventDefault();

      toast.info("Coming Soon ", {
        description: "Exciting updates are on the way, stay tuned.",
      });
    }
  };

  return (
    <li className="mt-6">
      <Link
        href={link || "#"}
        onClick={handleLinkClick}
        className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-800"
      >
        {title}
        {link && (
          <ArrowRight size={12} className="relative top-px stroke-slate-400" />
        )}
      </Link>
    </li>
  );
};

export default function Footer() {
  return (
    <div className="pt-16 mt-16 border-t lg:pt-20 lg:mt-32 bg-slate-50 border-slate-200">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 gap-x-8 gap-y-16 lg:gap-16 lg:grid-cols-4">
          <FooterAdvantageItem
            iconName={<Zap color />}
            title="Fast Shipping"
            description="Get your products quickly with our expedited shipping options available at checkout."
          />

          <FooterAdvantageItem
            iconName={<ShieldCheck color />}
            title="Secure Payment"
            description="Your payment information is always secure with our encrypted checkout process."
          />

          <FooterAdvantageItem
            iconName={<Award color />}
            title="Top Quality"
            description="We guarantee top-quality products, sourced from the best manufacturers worldwide."
          />

          <FooterAdvantageItem
            iconName={<Users color />}
            title="Excellent Support"
            description="Our customer support team is here to help you with any queries you might have."
          />
        </div>

        <div className="pt-12 mt-12 border-t border-dashed lg:mt-20 lg:pt-20 border-slate-200">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6 md:gap-8 max-sm:mx-auto gap-y-8">
            <div className="flex flex-col items-center order-5 pt-10 mt-4 border-t border-dashed lg:pt-0 lg:mt-0 lg:order-first col-span-full lg:col-span-2 lg:items-start border-slate-200 lg:border-none">
              <div className="rounded-full size-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 shrink-0"></div>

              <p className="py-8 text-sm text-center text-slate-500 lg:max-w-xs lg:text-left">
                Our website, built with Next.js and styled with Tailwind CSS,
                offers a seamless shopping experience using data from Fake Store
                API. Explore, shop, and enjoy!
              </p>

              <div className="flex gap-2">
                <FooterDevLink link="github" />
                <FooterDevLink link="linkedin" />
              </div>
            </div>

            <FooterMenuSection title="Products">
              <FooterMenuSectionItem title="Men‘s Clothing" link="/products" />
              <FooterMenuSectionItem
                title="Women‘s Clothing"
                link="/products"
              />
              <FooterMenuSectionItem title="Jewelery" link="/products" />
              <FooterMenuSectionItem title="Electronics" link="/products" />
              <FooterMenuSectionItem title="All Products" link="/products" />
            </FooterMenuSection>

            <FooterMenuSection title="Customer Service">
              <FooterMenuSectionItem title="Contact" />
              <FooterMenuSectionItem title="Shipping" />
              <FooterMenuSectionItem title="Returns" />
              <FooterMenuSectionItem title="Warranty" />
              <FooterMenuSectionItem title="Secure Payments" />
              <FooterMenuSectionItem title="FAQ" />
              <FooterMenuSectionItem title="Find a store" />
            </FooterMenuSection>

            <FooterMenuSection title="Company">
              <FooterMenuSectionItem title="Who we are" />
              <FooterMenuSectionItem title="Sustainability" />
              <FooterMenuSectionItem title="Press" />
              <FooterMenuSectionItem title="Careers" />
              <FooterMenuSectionItem title="Terms & Conditions" />
              <FooterMenuSectionItem title="Privacy" />
            </FooterMenuSection>

            <FooterMenuSection title="Legal">
              <FooterMenuSectionItem title="Terms of Service" />
              <FooterMenuSectionItem title="Return Policy" />
              <FooterMenuSectionItem title="Privacy Policy" />
              <FooterMenuSectionItem title="Shipping Policy" />
            </FooterMenuSection>
          </div>

          <div className="py-6 mt-10 text-center border-t border-dashed lg:mt-20 border-slate-200">
            <div className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Next.js Store. All rights
              reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

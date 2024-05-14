"use client";

import { ArrowRight, Award, ShieldCheck, Users, Zap } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

import DevLink from "../DevLink";

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

              <p className="py-8 text-sm leading-6 text-center text-slate-500 lg:max-w-xs lg:text-left">
                Our website, built with Next.js, styled with Tailwind CSS, and
                enhanced with shadcn/ui, offers a seamless shopping experience.
                Explore, shop, and enjoy!
              </p>

              <div className="flex gap-2">
                <DevLink type="github" />
                <DevLink type="linkedin" />
              </div>
            </div>

            <FooterMenuSection title="Products">
              <FooterMenuSectionItem title="Men‘s Clothing" />
              <FooterMenuSectionItem title="Women‘s Clothing" />
              <FooterMenuSectionItem title="Jewelery" />
              <FooterMenuSectionItem title="Electronics" />
              <FooterMenuSectionItem title="All Products" />
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

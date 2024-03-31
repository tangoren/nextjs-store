import { Award, ShieldCheck, Users, Zap } from "lucide-react";

const FooterAdvantageItem = ({ iconName, title, description }) => {
  return (
    <div>
      <div className="relative flex items-center justify-center mx-auto rounded-full size-16 stroke-indigo-400 border border-indigo-200 before:content-[''] before:rounded-full before:border before:border-indigo-100 before:size-20 before:-top-2 before:-left-2 before:absolute after:content-[''] after:rounded-full after:border after:border-indigo-50 after:size-24 after:-top-4 after:-left-4 after:absolute">
        {iconName}
      </div>

      <div className="text-center mt-7">
        <div className="text-base font-semibold text-slate-800">{title}</div>
        <div className="mt-2 text-sm text-slate-600">{description}</div>
      </div>
    </div>
  );
};

export default function Footer() {
  return (
    <div className="py-20 mt-32 border-t bg-slate-50 border-slate-200">
      <div className="container">
        <div className="grid grid-cols-2 gap-16 lg:grid-cols-4">
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

        <div class="border-t border-slate-200 mt-20 pt-20"></div>
      </div>
    </div>
  );
}

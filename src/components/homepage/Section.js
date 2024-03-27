import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Section({
  children,
  title,
  buttonText,
  buttonLink = "/",
  className,
}) {
  return (
    <div className={`${className} container`}>
      {title && (
        <div className="flex items-center justify-between mb-6">
          <div className="text-2xl font-bold text-slate-950">{title}</div>

          {buttonText && (
            <div>
              <Button
                variant="link"
                asChild
                className="p-0 font-bold text-indigo-600 hover:no-underline"
              >
                <Link href={buttonLink}>
                  {buttonText} <ArrowRight className="w-4 h-4 mr-l" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      )}

      {children}
    </div>
  );
}

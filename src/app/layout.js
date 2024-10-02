import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const fontBody = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Nextjs Ecommerce Landing",
  description: "Lorem ipsum dolor sit amet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontBody.className} antialiased`}>
        {children}
        <Toaster closeButton />
      </body>
    </html>
  );
}

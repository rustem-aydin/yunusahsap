import { HeroSection } from "@/components/blocks/hero-section-1";
import { Footer } from "@/components/ui/footer";
import { Hexagon, Instagram, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className=" justify-center items-center">
      <HeroSection />
      <div className="max-7xl">
        <Footer
          logo={<Hexagon className="h-10 w-10" />}
          brandName="Işık Nakliyat"
          socialLinks={[
            {
              icon: <Twitter className="h-5 w-5" />,
              href: "https://twitter.com",
              label: "Twitter",
            },
            {
              icon: <Instagram className="h-5 w-5" />,
              href: "https://github.com",
              label: "GitHub",
            },
          ]}
          mainLinks={[
            { href: "/products", label: "Anasayfa" },
            { href: "/about", label: "Hakkında" },
            { href: "/blog", label: "İletişim" },
          ]}
          copyright={{
            text: "© 2025 Tüm Hakları Saklıdır",
          }}
        />
      </div>
    </div>
  );
}

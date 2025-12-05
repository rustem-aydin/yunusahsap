import ContactHeader from "@/components/blocks/contact-header";
import { PremiumContact } from "@/components/blocks/contact-me";
import React from "react";
export const metadata = {
  title: "İletişim | Işık Nakliyat",
  description:
    "Işık Nakliyat ile hızlı ve güvenilir taşımacılık hizmeti için hemen iletişime geçin. Uygun fiyat, sigortalı taşıma, 7/24 hizmet.",
};
const İletisim = () => {
  return (
    <>
      <ContactHeader />
      <PremiumContact />;
    </>
  );
};

export default İletisim;

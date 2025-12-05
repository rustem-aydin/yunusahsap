import React from "react";
import { Pricing } from "./pricing";
const demoPlans = [
  {
    name: "İstanbul - İzmir",
    price: "22000",
    yearlyPrice: "20000",
    period: "",
    features: [
      "Ekspertiz Hizmeti",
      "Demonte Kolileme",
      "Hedefe Taşıma",
      "Asansör Hizmeti",
      "Monte Etme",
      "Eşyaları Yerleştirme",
    ],
    description: "Özel İstekleriniz İçin İletişime Geçiniz.",
    buttonText: "İletişime Geç",
    href: "https://wa.me/90532850615?text=Merhaba%ben%2C%taşınmak%istiyorum.",
    isPopular: false,
  },
  {
    name: "İstanbul - Ankara",
    price: "44000",
    yearlyPrice: "40000",
    period: "",
    features: [
      "Ekspertiz Hizmeti",
      "Demonte Kolileme",
      "Hedefe Taşıma",
      "Asansör Hizmeti",
      "Monte Etme",
      "Eşyaları Yerleştirme",
    ],
    description: "Özel İstekleriniz İçin İletişime Geçiniz.",
    buttonText: "İletişime Geç",
    href: "https://wa.me/90532850615?text=Merhaba%ben%2C%taşınmak%istiyorum.",
    isPopular: true,
  },
  {
    name: "İstanbul - Bursa",
    price: "18000",
    yearlyPrice: "17500",
    period: "",
    features: [
      "Ekspertiz Hizmeti",
      "Demonte Kolileme",
      "Hedefe Taşıma",
      "Asansör Hizmeti",
      "Monte Etme",
      "Eşyaları Yerleştirme",
    ],
    description: "Özel İstekleriniz İçin İletişime Geçiniz.",
    buttonText: "İletişime Geç",
    href: "https://wa.me/90532850615?text=Merhaba%ben%2C%taşınmak%istiyorum.",
    isPopular: false,
  },
];

const PricingSection = () => {
  return (
    <div className="justify-center  rounded-lg">
      <Pricing
        plans={demoPlans}
        title="Fiyatlandırma"
        description="Fiyatlara Göz Atın"
      />
    </div>
  );
};

export default PricingSection;

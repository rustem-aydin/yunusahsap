import AboutSection from "@/components/blocks/about-section";
import { ImageGallery } from "@/components/blocks/image-gallery";
import React from "react";
export const metadata = {
  title: "Hakkımızda | Işık Nakliyat",
  description:
    "Işık Nakliyat’ın tarihçesi, vizyonu ve profesyonel nakliye hizmetleri.",
};
const About = () => {
  return (
    <div>
      <AboutSection />
      <ImageGallery />
    </div>
  );
};

export default About;

import { Gallery4, Gallery4Props } from "@/components/blocks/gallery4";

const demoData: Gallery4Props = {
  title: "Projects",
  description:
    "Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences. These case studies showcase real-world applications and success stories.",
  items: [
    {
      id: "1",
      title: "Işık Nakliyat ile Güvenli ve Hızlı Taşınma",
      href: "#",
      image: "/images/images-gallery/1.png",
    },
    {
      id: "2",
      title: "Eşyalarınızı Işık Hızında Yeni Yuvanıza Taşıyoruz",
      href: "#",
      image: "/images/images-gallery/1.png",
    },
    {
      id: "3",
      title: "Profesyonel Ambalajlama ve Titiz Nakliye Hizmeti",
      href: "#",
      image: "/images/images-gallery/1.png",
    },
    {
      id: "4",
      title: "Şehir İçi ve Şehirler Arası Güvenilir Taşımacılık",
      href: "#",
      image: "/images/images-gallery/1.png",
    },
    {
      id: "5",
      title: "Uzman Ekiple Sorunsuz Taşınma Deneyimi",
      href: "#",
      image: "/images/images-gallery/1.png",
    },
  ],
};

function ImageGallery() {
  return <Gallery4 {...demoData} />;
}

export { ImageGallery };

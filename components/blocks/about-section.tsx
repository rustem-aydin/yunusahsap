"use client";

import type React from "react";
import { useRef } from "react";
import {
  BadgeCheck,
  MoveRight,
  PackageCheck,
  Truck,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  easeInOut,
} from "framer-motion";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: easeInOut }, // Süre biraz kısaltıldı
    },
  };

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="w-full pt-32 py-6 px-4 bg-linear-to-b overflow-hidden relative"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#A9BBC8]/5 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />

      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-[#88734C]/30"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-[#A9BBC8]/30"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col items-center mb-6"
          variants={itemVariants}
        >
          <motion.span
            className="text-rose-500 font-medium mb-2 flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Zap className="w-4 h-4" />
            Biz Kimiz
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-light mb-4 text-center">
            Hakkımızda
          </h1>
          <motion.div
            className="w-24 h-1 bg-rose-500"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
        </motion.div>
        <motion.p
          className="text-center text-lg max-w-2xl mx-auto mb-16"
          variants={itemVariants}
        >
          İster evinizi ister ofisinizi taşıyor olun, ister sadece bir parça
          eşyanızı göndermeniz gereksin; amacımız aynı: Size en konforlu,
          ekonomik ve güvenilir hizmeti sunmak. Bize ulaştığınız andan itibaren,
          güler yüzlü ve profesyonel ekibimizle taşınma sürecinizin her anında
          yanınızdayız. Çünkü biz, Işık Nakliyat olarak sadece eşya taşımıyoruz;
          güven inşa ediyoruz.
        </motion.p>
        <motion.p
          className="text-center text-lg max-w-2xl mx-auto mb-10"
          variants={itemVariants}
        >
          Işık Nakliyat Firması, uzun yıllara dayanan deneyimi ve profesyonel
          ekibiyle Türkiye’nin önde gelen nakliyat firmalarından biridir. 1980
          yılında İstanbulda kurulan firmamız, müşteri odaklı hizmet anlayışıyla
          sektörde önemli bir yer edinmiştir. Güvenilirlik, hız ve
          profesyonellik firmamızın temel ilkeleridir.
        </motion.p>
        <motion.ul
          className="space-y-4 max-w-2xl mx-auto text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.li variants={itemVariants}>
            <strong>Evden Eve Nakliyat:</strong> Eşyalarınız uzman ekip
            tarafından güvenli ve hızlı bir şekilde taşınır. Müşteri memnuniyeti
            her zaman ön planda tutulur.
          </motion.li>

          <motion.li variants={itemVariants}>
            <strong>Ofis Taşımacılığı:</strong> İş akışınızı aksatmadan,
            profesyonel ve sorunsuz bir ofis taşıma hizmeti sunuyoruz.
          </motion.li>

          <motion.li variants={itemVariants}>
            <strong>Şehirlerarası Nakliyat:</strong> Türkiye’nin her bölgesine
            güvenli şehirlerarası taşımacılık hizmeti sağlıyoruz.
          </motion.li>

          <motion.li variants={itemVariants}>
            <strong>Depolama Hizmetleri:</strong> Eşyalarınızı güvenli, temiz ve
            kontrollü depolama alanlarımızda muhafaza ediyoruz.
          </motion.li>

          <motion.li variants={itemVariants}>
            <strong>Ambalaj Hizmetleri:</strong> Profesyonel ambalaj malzemeleri
            ve teknikleri kullanarak eşyalarınızı özenle koruyoruz.
          </motion.li>

          <motion.li variants={itemVariants}>
            <strong>Çevre Duyarlılığı:</strong> Tüm taşımacılık süreçlerimizde
            çevreye zarar vermeden sürdürülebilir bir yaklaşım benimsiyoruz.
          </motion.li>

          <motion.li variants={itemVariants}>
            <strong>Geniş Araç Filosu:</strong> Deneyimli ekibimiz ve modern
            araç filomuzla her türlü nakliyat ihtiyacına cevap veriyoruz.
          </motion.li>

          <motion.li variants={itemVariants}>
            <strong>İletişim:</strong> Hizmetlerimiz hakkında bilgi almak veya
            bizimle iletişime geçmek için dilediğiniz zaman ulaşabilirsiniz.
          </motion.li>
        </motion.ul>

        <motion.ul
          className="grid grid-cols-1 mt-12 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.li
            variants={itemVariants}
            className="p-4 rounded-xl bg-white/10 backdrop-blur flex items-center gap-3"
          >
            <Wrench className="w-6 h-6 text-theme" />
            <strong>Montaj ve Demontaj İşlemi</strong>
          </motion.li>

          <motion.li
            variants={itemVariants}
            className="p-4 rounded-xl bg-white/10 backdrop-blur flex items-center gap-3"
          >
            <Users className="w-6 h-6 text-theme" />
            <strong>Tecrübeli Çalışma Arkadaşları</strong>
          </motion.li>

          <motion.li
            variants={itemVariants}
            className="p-4 rounded-xl bg-white/10 backdrop-blur flex items-center gap-3"
          >
            <MoveRight className="w-6 h-6 text-theme" />
            <strong>Asansörlü Eşya Taşımacılık</strong>
          </motion.li>

          <motion.li
            variants={itemVariants}
            className="p-4 rounded-xl bg-white/10 backdrop-blur flex items-center gap-3"
          >
            <PackageCheck className="w-6 h-6 text-theme" />
            <strong>Kaliteli Malzemeler ile Paketleme</strong>
          </motion.li>

          <motion.li
            variants={itemVariants}
            className="p-4 rounded-xl bg-white/10 backdrop-blur flex items-center gap-3"
          >
            <Truck className="w-6 h-6 text-theme" />
            <strong>Farklı Boyutlarda Taşıma Araçları</strong>
          </motion.li>

          <motion.li
            variants={itemVariants}
            className="p-4 rounded-xl bg-white/10 backdrop-blur flex items-center gap-3"
          >
            <BadgeCheck className="w-6 h-6 text-theme" />
            <strong>20 Yıllık Bilgi ve Birikim</strong>
          </motion.li>
        </motion.ul>
      </motion.div>
    </section>
  );
}

"use client";

import type React from "react";
import { useRef } from "react";
import {
  PaintBucket,
  Home,
  Ruler,
  PenTool,
  Building2,
  CheckCircle,
  Sparkles,
  Star,
  ArrowRight,
  Zap,
  Calculator,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  easeInOut,
  Easing,
} from "framer-motion";
import Image from "next/image";

export default function AboutUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // DEĞİŞİKLİK 1: 'once: true' yapıldı.
  // Böylece sadece ilk görüşte çalışır, yukarı çıkarken animasyonlar iptal olmaz/başa dönmez.
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
        // DEĞİŞİKLİK 2: Gecikmeler azaltıldı (Daha seri akış)
        staggerChildren: 0.1, // 0.2 -> 0.1
        delayChildren: 0.1, // 0.3 -> 0.1
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

  const services = [
    {
      icon: <Calculator className="w-6 h-6" />,
      secondaryIcon: (
        <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-rose-500" />
      ),
      title: "Ekspertiz Hizmeti",
      description:
        "Öncelikle sizlere ekspertiz gönderiyoruz. Bu personelimizle, eşyalarınızı inceleyerek gereken araçları, ambalaj ve koli sayısını belirliyoruz.",
      position: "left",
    },
    {
      icon: <Home className="w-6 h-6" />,
      secondaryIcon: (
        <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-rose-500" />
      ),
      title: "Demonte Kolileme",
      description:
        "Sizlere söz verdiğimiz saatte evinize gelerek eşyalarınızı özenlice demonte ediyoruz. Orta boy eşyalarınızı kolilere koyuyor, küçük boyları ambalajlara titizce sarıyoruz.",
      position: "left",
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      secondaryIcon: (
        <Star className="w-4 h-4 absolute -top-1 -right-1 text-rose-500" />
      ),
      title: "Hedefe Taşıma",
      description:
        "Kolilerinizi ve eşya parçalarını araçlarımıza taşıyoruz. Sonrasında ise eşyalarınızın hedef lokasyona taşınma süreci için deneyimli şoförlerimizle yola çıkıyoruz.",
      position: "left",
    },
    {
      icon: <PaintBucket className="w-6 h-6" />,
      secondaryIcon: (
        <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-rose-500" />
      ),
      title: "Asansör Hizmeti",
      description:
        "Asansör kurulumu için alan uygunsa ve asansörlü nakliye hizmeti tercih edilmişse asansör kurulumu yapıyoruz.",
      position: "right",
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      secondaryIcon: (
        <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-rose-500" />
      ),
      title: "Monte Etme",
      description:
        "Araçlarımız yeni evinize ulaştıktan sonra eşyalarınızı mekana taşıyor ve uygun bir şekilde yerlerine monte ediyoruz.",
      position: "right",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      secondaryIcon: (
        <Star className="w-4 h-4 absolute -top-1 -right-1 text-rose-500" />
      ),
      title: "Eşyaları Yerleştirme",
      description:
        "Taşınan eşyaları sizlerin direktifleri doğrultusunda odalara koyuyoruz. Kolilerdeki ve ambalajlardaki eşyaları çıkararak yerleştiriyoruz.",
      position: "right",
    },
  ];

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="w-full py-6 px-4 bg-linear-to-b overflow-hidden relative"
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

      {/* Basit dekoratif animasyonlar (Bunlar loop olduğu için dokunulmadı) */}
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
        // isInView true olduğunda visible olur, once: true olduğu için bir daha hidden olmaz.
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
            Neler Yapıyoruz
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-center">
            Hizmetlerimiz
          </h2>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Left Column */}
          <div className="space-y-16">
            {services
              .filter((service) => service.position === "left")
              .map((service, index) => (
                <ServiceItem
                  key={`left-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  // DEĞİŞİKLİK 3: Her bir eleman arasındaki gecikme azaltıldı
                  delay={index * 0.1}
                  direction="left"
                  isInView={isInView}
                />
              ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            <motion.div
              className="relative w-full max-w-xs"
              variants={itemVariants}
            >
              <motion.div
                className="rounded-md overflow-hidden shadow-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={
                  isInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.9, opacity: 0 }
                }
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <Image
                  src="/images/about.png"
                  alt="Modern House"
                  width={350}
                  height={100}
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 border-4 border-[#A9BBC8] rounded-md -m-3 z-[-1]"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 1.1 }
                }
                transition={{ duration: 0.6, delay: 0.3 }}
              ></motion.div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-4 -right-8 w-16 h-16 rounded-full bg-rose-500/10"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ y: y1 }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-6 -left-10 w-20 h-20 rounded-full bg-[#A9BBC8]/15"
                initial={{ opacity: 0, y: -20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
                }
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ y: y2 }}
              ></motion.div>

              <motion.div
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#88734C]"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#A9BBC8]"
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              ></motion.div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-16">
            {services
              .filter((service) => service.position === "right")
              .map((service, index) => (
                <ServiceItem
                  key={`right-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  // DEĞİŞİKLİK 3: Gecikme azaltıldı
                  delay={index * 0.1}
                  direction="right"
                  isInView={isInView}
                />
              ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

interface ServiceItemProps {
  icon: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  title: string;
  description: string;
  variants: {
    hidden: { opacity: number; y?: number };
    visible: {
      opacity: number;
      y?: number;
      transition: {
        duration: number;
        ease?: Easing | Easing[] | ((t: number) => number);
      };
    };
  };
  delay: number;
  direction: "left" | "right";
  isInView: boolean;
}

function ServiceItem({
  icon,
  secondaryIcon,
  title,
  description,
  variants,
  delay,
  direction,
  isInView,
}: ServiceItemProps) {
  return (
    <motion.div
      className="flex flex-col group"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-3 mb-3"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        // isInView prop'u kullanılarak parent state'e bağlandı
        animate={
          isInView
            ? { x: 0, opacity: 1 }
            : { x: direction === "left" ? -20 : 20, opacity: 0 }
        }
        transition={{ duration: 0.5, delay: delay + 0.1 }}
      >
        <motion.div
          className="text-rose-500 bg-rose-500/10 p-3 rounded-lg transition-colors duration-300 group-hover:bg-rose-500/20 relative"
          whileHover={{
            rotate: [0, -10, 10, -5, 0],
            transition: { duration: 0.5 },
          }}
        >
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3 className="text-xl font-medium text-rose-500 group-hover:text-text-rose-900 transition-colors duration-300">
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="text-sm leading-relaxed pl-12"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

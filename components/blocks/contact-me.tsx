"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, easeInOut } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Building,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Clock,
  Globe,
  Shield,
  Zap,
  Users,
  Headset,
  ThumbsUp,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "E-posta Adresi",
    value: "isik.nakliyat.maltepe@gmail.com",
    link: "mailto:isik.nakliyat.maltepe@gmail.com",
    gradient: "from-rose-500/20 to-rose-500/20",
    hoverColor: "blue",
  },
  {
    icon: Phone,
    title: "Telefon",
    value: "+90 532 685 06 15",
    description: "0850 305 15 04",
    link: "tel:+905326850615",
    gradient: "from-rose-500/20 to-rose-500/20",
    hoverColor: "green",
  },
  {
    icon: MapPin,
    title: "Konum",
    value: "San Francisco, CA",
    gradient: "from-rose-500/20 to-rose-500/20",
    hoverColor: "purple",
  },
];

const companyStats = [
  { label: "Geri Dönüş Süresi", value: "< 30 Dakika", icon: Clock },
  { label: "Mutlu Müşteri", value: "260+", icon: Users },
  { label: "Kesintisiz Destek", value: "7/24", icon: Headset },
  { label: "Memnuniyet Oranı", value: "100%", icon: ThumbsUp },
];

export function PremiumContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 0.86, 0.39, 0.96] as const,
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section className="relative py-12 bg-gradient-to-br  “Her türlü sorunuz için bize dilediğiniz zaman ulaşabilirsiniz; hızlı geri dönüş ve güvenilir destek için iletişim kanallarımız her zaman açık.” overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient mesh */}
        <motion.div
          className="absolute inset-0 "
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "400% 400%",
          }}
        />

        {/* Moving orbs */}
        <motion.div
          className="absolute top-1/3 left-1/5 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 200, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -150, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Communication lines */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-40 bg-gradient-to-b from-transparent via-rose/20 to-transparent"
              style={{
                left: `${20 + i * 15}%`,
                top: `${25 + i * 8}%`,
                transform: `rotate(${30 + i * 20}deg)`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scaleY: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div className="text-center mb-20" variants={fadeInUp}>
          <motion.p
            className="text-xl sm:text-2xl /60 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            “Her türlü sorunuz için bize dilediğiniz zaman ulaşabilirsiniz;
            hızlı geri dönüş ve güvenilir destek için iletişim kanallarımız her
            zaman açık.”
          </motion.p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          variants={fadeInUp}
        >
          {companyStats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-rose-500/10 backdrop-blur-xl rounded-2xl border border-white/[0.15] group  transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
              variants={fadeInUp}
            >
              <motion.div
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500/20 to-rose-500/20 border border-white/20 flex items-center justify-center mx-auto mb-3"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-6 h-6 text-indigo-300" />
              </motion.div>
              <div className="text-2xl font-bold  mb-1">{stat.value}</div>
              <div className="/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div className="space-y-8" variants={fadeInUp}>
            <iframe
              className="w-full overflow-hidden border-10 border-platinum dark:border-greyBlack embed-map h-120 2xl:h-190 rounded-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25908.703277839155!2d-74.18208878159237!3d40.640176526919696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1699271377092!5m2!1sen!2sbd"
              aria-label="Contact Map"
            />
          </motion.div>

          <motion.div className="space-y-8" variants={fadeInUp}>
            <div>
              <h3 className="text-3xl font-bold  mb-4">
                Bize Ulaşmanın Diğer Yolları
              </h3>
              <p className="/60 text-lg">
                Size en uygun iletişim yöntemini seçin.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  className="block p-6 bg-rose-500/5 backdrop-blur-xl rounded-2xl border border-white/[0.15] transition-all group"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.gradient} border border-white/20 flex items-center justify-center`}
                      whileHover={{ scale: 1.1, rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                    >
                      <method.icon className="w-7 h-7 " />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold  mb-1">
                        {method.title}
                      </h4>
                      <p className="text-sm mb-2">{method.description}</p>
                      <p className=" font-medium">{method.value}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 group-hover: group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              className="p-6 bg-gradient-to-br from-rose-500/[0.08] to-rose-500/[0.08] backdrop-blur-xl rounded-2xl border border-rose-400/30"
              variants={fadeInUp}
            >
              <h4 className="text-lg font-semibold  mb-3">
                Hızlı Geri Dönüş Garantisi
              </h4>
              <p className="/80 text-sm leading-relaxed">
                Hızlı geri dönüş sürecimizle gurur duyuyoruz. Tüm talepler
                genellikle mesai saatleri içinde 1 saat içerisinde yanıtlanır ve
                işimizi detaylıca konuşmak için hemen harekete geçeriz.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          />
        ))}
      </motion.div>
    </section>
  );
}

"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { easeInOut, motion } from "framer-motion";
import { Check, Coins, Star } from "lucide-react"; // Zap kaldırıldı (kullanılmıyordu)
import Link from "next/link";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easeInOut },
  },
};

export function Pricing({
  plans,
  title = "Evden Eve Nakliyat", // Yazım hatası düzeltildi
  description = "Planı Seçin",
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: [
          "hsl(var(--primary))",
          "hsl(var(--accent))",
          "hsl(var(--secondary))",
          "hsl(var(--muted))",
        ],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    // DEĞİŞİKLİK 1: min-h-screen, flex, items-center ve justify-center eklendi.
    <section className="container   flex flex-col items-center justify-center mx-auto">
      <motion.div
        className="flex flex-col items-center mb-12" // mb-6 -> mb-12 (biraz daha boşluk)
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.span
          className="text-rose-500 font-medium mb-2 flex items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Coins className="w-4 h-4" />
          Ücretlendirme
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-light mb-4 text-center">
          {title}
        </h2>
        <motion.div
          className="w-24 h-1 bg-rose-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 1, delay: 0.5 }}
        ></motion.div>
      </motion.div>

      <div className="flex justify-center mb-16">
        {" "}
        {/* mb-10 -> mb-16 */}
        <label className="relative inline-flex items-center cursor-pointer">
          <Label>
            <Switch
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              ref={switchRef as any}
              checked={!isMonthly}
              onCheckedChange={handleToggle}
              className="relative"
            />
          </Label>
        </label>
        <span className="ml-2 font-semibold select-none">
          Peşin Fiyatına <span className="text-primary">(%20 İndirim)</span>
        </span>
      </div>

      {/* DEĞİŞİKLİK 2: Grid yapısı düzenlendi ve ortalamak için max-width verildi */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl items-center">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }} // opacity başlangıçta 0 olmalı
            whileInView={
              isDesktop
                ? {
                    y: plan.isPopular ? -20 : 0,
                    opacity: 1,
                    x: index === 2 ? -30 : index === 0 ? 30 : 0,
                    scale: index === 0 || index === 2 ? 0.94 : 1.0,
                  }
                : {
                    y: 0,
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }
            }
            viewport={{ once: true }}
            transition={{
              duration: 0.8, // Süre biraz kısaltıldı (daha akıcı his için)
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: index * 0.1, // Kartlar sırayla gelsin
            }}
            className={cn(
              `rounded-2xl border-[1px] p-6 bg-background text-center lg:flex lg:flex-col lg:justify-center relative`,
              plan.isPopular
                ? "border-rose-500 border-2 shadow-xl z-20"
                : "border-border shadow-sm",
              "flex flex-col h-full", // h-full eklendi
              !plan.isPopular && isDesktop && "mt-5", // Sadece masaüstünde margin ver
              isDesktop && (index === 0 || index === 2)
                ? "z-10" // Yan kartlar altta kalsın
                : "z-10"
              // Transform efektleri motion tarafından yönetildiği için buradan statik transformları kaldırdım
            )}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-0 transform translate-x-[1px] -translate-y-[1px] bg-rose-500 py-1 px-3 rounded-bl-xl rounded-tr-lg flex items-center shadow-md">
                <Star className="text-white h-3.5 w-3.5 fill-current" />
                <span className="text-white ml-1 text-xs font-bold uppercase tracking-wider">
                  Popüler
                </span>
              </div>
            )}
            <div className="flex-1 flex flex-col">
              <p className="text-lg font-semibold text-muted-foreground mb-4">
                {plan.name}
              </p>
              <div className="flex items-end justify-center gap-x-1 mb-2">
                <span className="text-4xl font-bold tracking-tight text-foreground">
                  <NumberFlow
                    value={
                      isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)
                    }
                    format={{
                      style: "currency",
                      currency: "TRY",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }}
                    transformTiming={{
                      duration: 500,
                      easing: "ease-out",
                    }}
                    willChange
                    className="font-variant-numeric: tabular-nums"
                  />
                </span>
                {plan.period && (
                  <span className="text-sm font-medium text-muted-foreground mb-1">
                    /{plan.period}
                  </span>
                )}
              </div>

              <p className="text-xs font-medium text-muted-foreground mb-6 bg-muted/50 py-1 rounded-full mx-auto px-3 inline-block">
                {isMonthly ? "Taksitli Ödeme" : "Tek Seferlik Ödeme"}
              </p>

              <ul className="mt-2 space-y-3 flex-1 text-sm text-muted-foreground text-left px-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <Check className="h-3 w-3 text-primary flex-shrink-0" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t w-full">
                <Link
                  href={plan.href}
                  className={cn(
                    buttonVariants({
                      variant: plan.isPopular ? "default" : "outline",
                      size: "lg",
                    }),
                    "w-full rounded-full font-semibold transition-all duration-300",
                    plan.isPopular
                      ? "bg-rose-500 hover:bg-rose-600 shadow-rose-500/25 shadow-lg hover:shadow-xl"
                      : "hover:bg-muted"
                  )}
                >
                  {plan.buttonText}
                </Link>
                {plan.description && (
                  <p className="mt-4 text-xs text-muted-foreground px-2">
                    {plan.description}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

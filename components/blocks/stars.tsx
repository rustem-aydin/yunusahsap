"use client";
import React, { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { motion, animate } from "framer-motion";
import { cn } from "@/lib/utils"; // Assumes you have a lib/utils.ts file for clsx and tailwind-merge

// Define the props for the component
interface ReviewSummaryCardProps {
  /** The average rating value. */
  rating: number;
  /** The total number of reviews. */
  reviewCount: number;
  /** The maximum possible rating, used to render stars. */
  maxRating?: number;
  /** A descriptive summary text line. */
  summaryText: string;
  /** Optional class name for custom styling. */
  className?: string;
}

/**
 * A responsive and theme-adaptive card to display an animated rating summary.
 */
export const ReviewSummaryCard: React.FC<ReviewSummaryCardProps> = ({
  rating,
  reviewCount,
  maxRating = 5,
  summaryText,
  className,
}) => {
  // Refs to animate the numbers
  const ratingRef = useRef<HTMLSpanElement>(null);
  const reviewCountRef = useRef<HTMLSpanElement>(null);

  // Effect to trigger the count-up animations on mount
  useEffect(() => {
    const ratingControl = animate(0, rating, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate(value) {
        if (ratingRef.current) {
          ratingRef.current.textContent = value.toFixed(1);
        }
      },
    });

    const reviewCountControl = animate(0, reviewCount, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate(value) {
        if (reviewCountRef.current) {
          // Format with commas for better readability
          reviewCountRef.current.textContent = new Intl.NumberFormat(
            "en-US"
          ).format(Math.round(value));
        }
      },
    });

    // Cleanup animations on unmount
    return () => {
      ratingControl.stop();
      reviewCountControl.stop();
    };
  }, [rating, reviewCount]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2 + i * 0.1, // Staggered delay for each star
        duration: 0.4,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <motion.div
      className={cn(
        "w-full max-w-xs rounded-xl border p-2 text-center shadow-sm",
        "flex flex-col items-center justify-center",
        className
      )}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      aria-label={`Rating: ${rating} out of ${maxRating} based on ${reviewCount} reviews.`}
    >
      <div className="flex items-center gap-1">
        {Array.from({ length: maxRating }, (_, i) => (
          <motion.div key={i} custom={i} variants={starVariants}>
            <Star
              className={cn(
                "h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6",
                rating >= i + 1 ? "text-yellow-400" : "text-muted-foreground/50"
              )}
              fill="currentColor"
            />
          </motion.div>
        ))}
      </div>

      <h2 className="mt-1 md:mt-4 text-md md:text-lg lg:text-2xl xl:text-4xl font-bold tracking-tight text-foreground">
        <span ref={ratingRef}>0.0</span>
        <span className="text-md md:text-lg lg:text-2xl xl:text-4xl font-semibold">
          (<span ref={reviewCountRef}>0</span> Yorum)
        </span>
      </h2>

      <p className="mt-1 text-xs md:text-sm text-muted-foreground">
        {summaryText}
      </p>
    </motion.div>
  );
};

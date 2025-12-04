import { Star } from "lucide-react";
import { Marquee } from "./marquee";
import { CardContent, LiquidCard } from "./liquid-card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    content:
      "This component library has transformed our development workflow. Highly recommended!",

    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "Frontend Developer",
    content:
      "Clean, modern, and incredibly easy to use. Perfect for our React projects.",

    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "UI Designer",
    content:
      "The design system is consistent and beautiful. Love the attention to detail.",

    rating: 5,
  },
  {
    name: "Alex Rodriguez",
    role: "Tech Lead",
    content:
      "Excellent documentation and great community support. A must-have toolkit.",
    rating: 5,
  },
];

export const Component = () => {
  return (
    <div>
      <Marquee>
        {testimonials.map((testimonial, index) => (
          <LiquidCard key={index} className="mx-1 rounded-3xl w-80 h-full">
            <CardContent className="p-6 py-0">
              <div className="mb-4 flex items-center space-x-3">
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-primary/60">{testimonial.role}</p>
                </div>
              </div>
              <p className="mb-3">{testimonial.content}</p>
              <div className="flex space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#fff200] text-[#fff200]"
                  />
                ))}
              </div>
            </CardContent>
          </LiquidCard>
        ))}
      </Marquee>
    </div>
  );
};

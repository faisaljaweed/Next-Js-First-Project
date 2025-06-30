"use client";
import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const musicTestimonialCard = [
  {
    quote:
      "This platform completely transformed how we manage our daily operations. Highly recommended!",
    name: "Ayesha Khan",
    title: "Operations Manager, SoftPoint Ltd.",
  },
  {
    quote:
      "User-friendly interface and excellent customer support. Truly a game-changer for our team.",
    name: "Fahad Ali",
    title: "CTO, Innovatech Solutions",
  },
  {
    quote:
      "I was impressed by the ease of use and powerful features. It exceeded our expectations.",
    name: "Maria Sheikh",
    title: "CEO, VisionCraft Media",
  },
  {
    quote:
      "Their attention to detail and commitment to customer satisfaction sets them apart.",
    name: "Imran Zaidi",
    title: "Marketing Director, NextGen Corp",
  },
  {
    quote:
      "Reliable, efficient, and built with users in mind. We couldn’t be happier with the results.",
    name: "Sana Rauf",
    title: "Product Manager, BlueSky Apps",
  },
  {
    quote:
      "They truly understand client needs and deliver beyond expectations. A solid 10/10.",
    name: "Noman Rehman",
    title: "Founder, Alpha Digital",
  },
  {
    quote:
      "Excellent service and great communication throughout our collaboration.",
    name: "Mehwish Tariq",
    title: "Brand Strategist, NovaWorks",
  },
  {
    quote:
      "It simplified complex processes and saved us countless hours. Great investment!",
    name: "Usman Ghani",
    title: "Senior Developer, TechSavvy Ltd.",
  },
  {
    quote:
      "We loved the personalized support and the intuitive design. Would definitely recommend.",
    name: "Zara Qureshi",
    title: "HR Manager, TalentBridge",
  },
  {
    quote:
      "Efficient, scalable, and built to last — this is the future of digital tools.",
    name: "Bilal Noor",
    title: "Business Analyst, CoreMetrics",
  },
];

const TestimonialCards = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative  overflow-hidden">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          "flex flex-col items-center justify-center"
        )}
      >
        <h2 className="text-3xl dark:text-white font-bold text-center mb-8 z-10">
          Hear Our Harmony: Voices of Success
        </h2>
        <div className="flex justify-center w-full overflow-hidden px-4 smLpx-6 lg:px-8">
          <div className="w-full max-w-6xl">
            <InfiniteMovingCards
              items={musicTestimonialCard}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;

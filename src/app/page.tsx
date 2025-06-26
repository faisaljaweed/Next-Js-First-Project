import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

function page() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        {/* <h1 className="text-2xl text-center">Chai or Code</h1> */}
        <HeroSection />
        <FeaturedSection />
        <WhyChooseUs />
      </main>
    </>
  );
}

export default page;

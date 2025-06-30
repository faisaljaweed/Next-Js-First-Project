import ComingWebinar from "@/components/ComingWebinar";
import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import TestimonialCards from "@/components/TestimonialCards";
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
        <TestimonialCards />
        <ComingWebinar />
        <Instructor />
        <Footer />
      </main>
    </>
  );
}

export default page;

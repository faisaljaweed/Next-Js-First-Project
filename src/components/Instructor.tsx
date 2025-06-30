"use client";

import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";
const userProfiles = [
  {
    id: 1,
    name: "Ayesha Khalid",
    designation:
      "Creative designer with a passion for branding and visual storytelling.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 2,
    name: "Usman Tariq",
    designation:
      "Full-stack developer focused on scalable web applications and APIs.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Hira Zaman",
    designation:
      "Marketing expert helping brands grow through strategic campaigns.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 4,
    name: "Ali Raza",
    designation:
      "DevOps engineer with experience in CI/CD pipelines and cloud services.",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    id: 5,
    name: "Mehwish Noor",
    designation:
      "UX/UI designer creating seamless digital experiences for mobile and web.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 6,
    name: "Zain Haider",
    designation:
      "Data analyst turning raw data into actionable business insights.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const Instructor = () => {
  return (
    <div
      className="relative h-[40rem] overflow-hidden flex items-center
  justify-center"
    >
      <WavyBackground
        className="w-full max-w-7xl mx-auto flex 
      flex-col items-center justify-center h-full"
      >
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Meet Our Instructors
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Discover the talented professionals who will guide your musical
          journey
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={userProfiles} />
        </div>
      </WavyBackground>
    </div>
  );
};

export default Instructor;

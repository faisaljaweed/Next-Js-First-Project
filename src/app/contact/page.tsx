"use client";
import { Meteors } from "../../components/ui/meteors";

const page = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">

      {/* 🔵 Full-screen Meteor Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Meteors number={60} />
      </div>

      {/* 🟢 Foreground Content */}
      <div className="relative z-10 py-12 pt-36">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className="max-w-md mx-auto mt-8 text-center text-sm tracking-widest text-white">
          We're here to help with any questions about our courses, programs or events. 
          Reach out and let us know how we can assist you in your musical journey.
        </p>
        <div className="max-w-md mx-auto mt-8">
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 m-2 w-full bg-black rounded-lg text-white"
          />
          <textarea
            placeholder="Your Message"
            className="p-4 m-2 w-full h-32 bg-black rounded-lg text-white"
          ></textarea>
          <button className="bg-white text-black p-2 m-2">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default page;

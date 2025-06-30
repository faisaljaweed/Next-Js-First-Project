"use client";

import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
const ComingWebinar = () => {
  const featuredWebinars = [
    {
      title: "Seamless Integration",
      description:
        "Connect your tools effortlessly and streamline your workflow across platforms.",
      slug: "seamless-integration",
      inFeatured: true,
    },
    {
      title: "Real-Time Analytics",
      description:
        "Track performance and make data-driven decisions with live insights and reports.",
      slug: "real-time-analytics",
      inFeatured: true,
    },
    {
      title: "User-Friendly Interface",
      description:
        "Enjoy a clean, intuitive design that makes navigation and usage simple for everyone.",
      slug: "user-friendly-interface",
      inFeatured: false,
    },
    {
      title: "Customizable Features",
      description:
        "Tailor every aspect to fit your business needs with flexible configuration options.",
      slug: "customizable-features",
      inFeatured: false,
    },
    {
      title: "Secure & Reliable",
      description:
        "Built with industry-grade security to protect your data and ensure system stability.",
      slug: "secure-and-reliable",
      inFeatured: true,
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any issues.",
      slug: "24-7-support",
      inFeatured: false,
    },
    {
      title: "Fast Performance",
      description:
        "Optimized architecture ensures quick loading times and smooth user experience.",
      slug: "fast-performance",
      inFeatured: true,
    },
    {
      title: "Cloud-Based Access",
      description:
        "Access your data and tools from anywhere, on any device, with cloud convenience.",
      slug: "cloud-based-access",
      inFeatured: false,
    },
    {
      title: "Scalable Solution",
      description:
        "Grow without limits — our system scales effortlessly with your business expansion.",
      slug: "scalable-solution",
      inFeatured: true,
    },
    {
      title: "Affordable Pricing",
      description:
        "Get premium features without breaking the bank with our competitive pricing plans.",
      slug: "affordable-pricing",
      inFeatured: false,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            ENHANCE YOUR MUSICAL JOURNEY
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinars) => ({
              title: webinars.title,
              description: webinars.description,
              link: `/`,
              //   link: `/webinars/${webinars.slug}`,
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 
            bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingWebinar;

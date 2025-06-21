"use client";

import { useEffect } from "react";
import { useAppSelector } from "@/redux/store";

export default function AboutPage() {
  const theme = useAppSelector((state) => state.themeReducer.value.lightMode);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.remove("opacity-0", "translate-y-4");
        el.classList.add("opacity-100", "translate-y-0");
      }, 150 * i);
    });
  }, []);

  return (
    <div
      className={`min-h-screen px-6 py-12 transition-colors duration-500 ${
        theme
          ? "bg-gradient-to-br from-[#f6faff] via-[#e6f1f9] to-[#f6faff] text-gray-800"
          : "bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#0d1b2a] text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#096AD8] relative inline-block pb-2">
            About Us
            <span className="block h-1 w-24 bg-[#096AD8] absolute -bottom-1 left-1/2 transform -translate-x-1/2 animate-pulse" />
          </h1>
          <p
            className={`text-lg mt-4 fade-in opacity-0 translate-y-4 transition duration-700 ease-out ${
              theme ? "text-gray-600" : "text-gray-300"
            }`}
          >
            Driving Global Trust — Powered by Passion for Cars
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="fade-in opacity-0 translate-y-4 transition duration-700 ease-out">
            <p className="text-lg mb-6">
              <strong>Hikar Trading Company Ltd.</strong> is a global car and
              parts trading enterprise based in Japan. We specialize in sourcing
              and exporting vehicles of all types — from sleek sedans and rugged
              SUVs to performance cars and commercial fleets — as well as
              genuine car parts.
            </p>
            <p className="text-lg mb-6">
              Our core mission is to deliver high-quality, affordable vehicles
              to clients worldwide with transparency and care. Whether you’re an
              individual or a dealership, Hikar makes auto trading seamless.
            </p>
            <p className="text-lg">
              We’re deeply integrated into Japan’s leading auctions and supply
              chains, ensuring competitive pricing and trusted logistics — every
              step of the way.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 fade-in opacity-0 translate-y-4 transition duration-700 ease-out">
            {[
              { label: "Years of Experience", value: "10+" },
              { label: "Vehicles Exported", value: "1000+" },
              { label: "Support Worldwide", value: "24/7" },
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center rounded-xl p-6 transform transition hover:scale-105 ${
                  theme
                    ? "bg-white text-gray-800 shadow-md"
                    : "bg-[#1e2a3a] text-white border border-white/10 shadow-md"
                }`}
              >
                <h2 className="text-3xl font-bold text-[#096AD8]">
                  {item.value}
                </h2>
                <p className="text-sm mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

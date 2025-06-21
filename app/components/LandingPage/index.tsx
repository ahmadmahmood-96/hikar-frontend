"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/redux/store";
import Logo from "@/public/hikar-logo.png"; // Make sure this exists

export default function LandingPage() {
  const theme = useAppSelector((state) => state.themeReducer.value.lightMode);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center text-center px-6 py-12 transition-colors duration-500 ${
        theme
          ? "bg-gradient-to-br from-[#f0f8ff] via-[#e6f0f8] to-[#f0f8ff] text-gray-800"
          : "bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
      }`}
    >
      <Image
        src={Logo}
        alt="Hikar Trading Logo"
        width={160}
        height={60}
        className="mb-8 rounded-md"
      />
      <h1 className="text-4xl lg:text-5xl font-bold text-[#096AD8] mb-4">
        Welcome to Hikar Trading
      </h1>
      <p className="text-lg lg:text-xl mb-4 max-w-2xl">
        Your trusted partner for sourcing quality cars and car parts — locally
        and internationally.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300 mb-6">
        We&apos;re working hard behind the scenes. Stay tuned for exciting
        updates!
      </p>
      <Link
        href="/contact"
        className="bg-[#096AD8] hover:bg-[#085dbb] text-white px-6 py-3 rounded-lg transition"
      >
        Contact Us
      </Link>
    </div>
  );
}

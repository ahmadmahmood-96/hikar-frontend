"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/redux/provider";
import { useAppSelector } from "@/redux/store";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  subsets: ["latin"],
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <ThemedLayout>{children}</ThemedLayout>
    </ReduxProvider>
  );
}

function ThemedLayout({ children }: { children: React.ReactNode }) {
  const theme = useAppSelector((state) => state.themeReducer.value.lightMode);

  return (
    <html data-theme={theme ? "light" : "dark"} lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

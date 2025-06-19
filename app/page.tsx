import LandingPage from "./components/LandingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ahmad's Portfolio",
};

export default function Home() {
  return (
    <main>
      <LandingPage />
    </main>
  );
}

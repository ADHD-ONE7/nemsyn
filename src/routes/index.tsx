import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/nemsyn/Navbar";
import { Hero } from "@/components/nemsyn/Hero";
import { Features } from "@/components/nemsyn/Features";
import { OmOs } from "@/components/nemsyn/OmOs";
import { Ydelser } from "@/components/nemsyn/Ydelser";
import { Priser } from "@/components/nemsyn/Priser";
import { Kontakt } from "@/components/nemsyn/Kontakt";
import { Footer } from "@/components/nemsyn/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <OmOs />
        <Ydelser />
        <Priser />
        <Kontakt />
      </main>
      <Footer />
    </div>
  );
}

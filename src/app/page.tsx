// src/app/page.tsx

import { AnimatedBackground } from "@/components/effects/AnimatedBackground";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative">
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />

      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />

      <Footer />
    </main>
  );
}

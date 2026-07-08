import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { TechStack } from "@/components/TechStack";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020711] text-white">
      <Navbar />
      <Hero /> 
      <FeaturedProjects />
      <TechStack />
      <ContactCTA />
      <Footer />
    </main>
  );
}

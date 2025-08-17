// src/app/page.js
import Hero from "@/components/Hero";
import FeaturedCars from "@/components/FeaturedCars";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <FeaturedCars />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
    </div>
  );
}

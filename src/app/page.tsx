import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Clinics } from "@/components/sections/Clinics";
import { Technology } from "@/components/sections/Technology";
import { FAQ } from "@/components/sections/FAQ";
import { Blog } from "@/components/sections/Blog";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Benefits />
      <About />
      <Services />
      <Testimonials />
      <Technology />
      <Clinics />
      <FAQ />
      <Blog />
      <CTA />
    </div>
  );
}

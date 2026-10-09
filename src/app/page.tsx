import {
  Hero,
  Highlights,
  About,
  WhyUs,
  Signature,
  Gallery,
  KnowCoffee,
  Quote,
  CardsShowcase,
  HowItWorks,
  Testimonials,
  Visit,
  Footer,
} from "@/components/Sections";
import { Navbar, Shop, Faq, Newsletter } from "@/components/Interactive";

export default function Home() {
  return (
    <main className="bg-[#faf3e8] font-serif text-[#2b1810]">
      <Navbar />
      <Hero />
      <Highlights />
      <About />
      <WhyUs />
      <Signature />
      <Gallery />
      <KnowCoffee />
      <Quote />
      <CardsShowcase />
      <Shop />
      <HowItWorks />
      <Testimonials />
      <Visit />
      <Faq />
      <Newsletter />
      <Footer />
    </main>
  );
}
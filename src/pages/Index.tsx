import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import PremiumCarousel from "@/components/site/PremiumCarousel";
import DesignSection from "@/components/site/DesignSection";
import Marquee from "@/components/site/Marquee";

const contentImages = [
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1400&q=80",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=80",
  "https://images.unsplash.com/photo-1496440737103-cd596325d314?w=1400&q=80",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1400&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1400&q=80",
];

const projectImages = [
  "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=1600&q=80",
  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&q=80",
  "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1600&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80",
  "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=1600&q=80",
];

const Index = () => {
  return (
    <main className="min-h-screen bg-canvas">
      <Navbar />
      <Hero />
      <Services />

      <PremiumCarousel
        eyebrow="Content"
        heading={<>Frames worth <span className="italic-display">looking twice</span> at.</>}
        description="Photography, reels and campaigns crafted in-house. Real shoots, real stories."
        images={contentImages}
        ctaLabel="View all content"
        ctaHref="/content"
        itemAspect="aspect-[4/5]"
        speed={5}
      />

      <DesignSection />

      <section id="work">
        <PremiumCarousel
          eyebrow="Selected work"
          heading={<>Websites that <span className="italic-display">earn the click.</span></>}
          description="A glance at recent product launches and brand sites."
          images={projectImages}
          ctaLabel="View all projects"
          ctaHref="/projects"
          itemAspect="aspect-[16/10]"
          speed={6}
        />
      </section>

      <Marquee />
      <Footer />
    </main>
  );
};

export default Index;

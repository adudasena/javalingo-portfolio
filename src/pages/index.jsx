import Hero from "../components/Hero";
import DocsGallery from "../components/DocsGallery";
import VideoSection from "../components/VideoSection";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";
import BackgroundFX from "../components/BackgroundFX";
import TechSpecs from "../components/TechSpecs";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center text-center overflow-hidden">
      <BackgroundFX />
      <Hero />
      <section id="docs" className="w-full max-w-5xl py-20">
        <DocsGallery />
      </section>
      <section id="techspecs" className="w-full max-w-5xl py-20">
  <TechSpecs />
</section>
      <section id="video" className="w-full max-w-5xl py-20">
        <VideoSection />
      </section>
      <section id="team" className="w-full max-w-5xl py-20">
        <TeamSection />
      </section>
      <Footer />
    </main>
  );
}

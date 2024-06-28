import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex-between flex-col h-auto w-auto overflow-hidden gap-3 sm:gap-8 lg:gap-12 p-4 sm:p-8 lg:p-12">
      <Hero />
      <About />
      <Projects />
      <ContactMe />
    </main>
  );
}

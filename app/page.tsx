import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex-between flex-col h-auto w-auto overflow-hidden gap-12 p-4 sm:p-8 lg:p-12">
      <Hero />
      <About />
    </main>
  );
}

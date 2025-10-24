import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Heroside";
import Experiance from "@/components/Experience";
import Link from "next/link";
import ContactForm from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen w-full">
      {/* LEFT SECTION (STAYS STILL ON SCROLL) */}
      <div className="w-full h-[70vh] mb-5 lg:w-1/2  flex  lg:sticky lg:top-0 lg:min-h-screen transition-all duration-300 ease-in-out">
      <Header/>
      </div>

      {/* RIGHT SECTION (SCROLLS NORMALLY) */}
      <div className="w-full lg:w-1/2 flex flex-col gap-10 mb-20">
  <section id="about" className="flex">
    <About />
  </section>

  <section id="experience" className="min-h-screen flex items-center justify-center mt-10">
    <Experiance />
  </section>

  <section id="contact" className="min-h-screen flex items-center justify-center  mt-10">
    <ContactForm/>
  </section>
</div>

    </main>
  );
}

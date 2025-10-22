import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Heroside";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen w-full">
      {/* LEFT SECTION (STAYS STILL ON SCROLL) */}
      <div className="w-full h-[70vh] mb-5 lg:w-1/2  flex  lg:sticky lg:top-0 lg:h-screen transition-all duration-300 ease-in-out">
      <Header/>
      </div>

      {/* RIGHT SECTION (SCROLLS NORMALLY) */}
      <div className="w-full lg:w-1/2  flex flex-col">
        <section className="p-4 flex   ">
         <About/>
        </section>
        <section className="h-screen flex items-center justify-center bg-red-300">
          <p>Section 2</p>
        </section>
        <section className="h-screen flex items-center justify-center bg-red-400">
          <p>Section 3</p>
        </section>
      </div>
    </main>
  );
}

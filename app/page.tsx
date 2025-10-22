
import About from "@/components/About";
import Contact from "@/components/Contact";
import Link from "next/link";

export default function Home() {
  return (
   
     <main className="flex min-h-screen items-center justify-center">
      <div className=" bg-gray-900 p-8 rounded-md shadow-md text-white flex flex-col items- h-screen-full gap-6 ">
      <h1 className="text-4xl font-bold text-center">
        HeroCode Portfolio – Day 1 🚀
      </h1>
     <div className="flex gap-6 p-8 bg-gray-800 rounded-md mt-8">
        <Link href="#about" className="text-blue-400 hover:underline">
          About
        </Link>
        <Link href="#contact" className="text-blue-400 hover:underline">
          Contact
        </Link>
      </div>
      </div>
      <div className="flex flex-col gap-8 mt-8">
     <section id="about" className="w-full">
        <About />
      </section>
       <section id="contact" className="w-full bg-gray-900 mt-8">
        <Contact />
      </section>
      </div>
      
    </main>
   
  );
}

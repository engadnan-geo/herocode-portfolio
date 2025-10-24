"use client";
import { motion } from "framer-motion";

const Container=()=>{
    return(
<div className="flex flex-row py-2 px-4 bg-transparent  rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer hover:bg-gray-500 hover:backdrop-blur-md">
  <div>
    <h1>27-Dec-2024</h1>
  </div>

  <div className="flex flex-col ml-6">
    <div className="flex flex-col gap-4 mt-4">
      <h1 className="text-3xl font-bold mb-4">Full-Stack Development Skills</h1>
      <p className="text-lg text-gray-700">
        I’m a dedicated full-stack developer skilled in building complete web applications from front to back. On the frontend, I use <strong>Next.js</strong>, <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Framer Motion</strong> to create fast, responsive, and visually appealing user interfaces. On the backend, I work with <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong> to design efficient APIs, manage databases, and ensure smooth server performance. I love crafting modern, user-focused applications that combine great design, strong functionality, and seamless user experiences.
      </p>
    </div>

    <div className="flex flex-wrap space-y-4  space-x-2 mt-6">
     <motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  className="px-6 py-3  text-white font-semibold rounded-2xl shadow-md bg-blue-500"
>
  React
</motion.button>
      <button className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-2xl shadow-md hover:bg-gray-900 transition">
        Next.js
      </button>
      <button className="px-6 py-2 bg-green-600 text-white font-semibold rounded-2xl shadow-md hover:bg-green-700 transition">
        Node.js
      </button>
    </div>
  </div>
</div>

    )
}
export default Container;
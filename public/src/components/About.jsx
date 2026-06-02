import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaCode,
  FaBrain,
  FaLaptopCode,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-zinc-950 overflow-hidden"
    >
      {/* Animated Background Glow */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-cyan-400 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* Main About Card */}
        <motion.div
          className="bg-zinc-900 rounded-3xl p-8 md:p-10 border border-white/10 shadow-xl hover:border-cyan-400 transition"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.02,
          }}
        >
          {/* Profile Icon */}
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="bg-cyan-400 text-black p-5 rounded-full"
            >
              <FaUserGraduate size={40} />
            </motion.div>
          </div>

          {/* About Text */}
          <p className="text-gray-300 leading-8 text-lg text-center">
            I am a passionate{" "}
            <span className="text-cyan-400 font-semibold">
              Computer Science Student
            </span>{" "}
            with a strong interest in{" "}
            <span className="text-cyan-400 font-semibold">
              Frontend Development
            </span>
            ,{" "}
            <span className="text-cyan-400 font-semibold">
              Artificial Intelligence
            </span>
            , and modern web technologies.
            <br />
            <br />
            I enjoy creating responsive websites, building interactive
            user interfaces, and designing modern web applications using{" "}
            <span className="text-cyan-400 font-semibold">
              React.js
            </span>{" "}
            and{" "}
            <span className="text-cyan-400 font-semibold">
              Tailwind CSS
            </span>
            .
          </p>

          {/* Skills Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-800 p-6 rounded-2xl text-center"
            >
              <FaCode className="text-cyan-400 text-4xl mx-auto mb-3" />
              <h3 className="font-semibold text-lg">
                Frontend Development
              </h3>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-800 p-6 rounded-2xl text-center"
            >
              <FaBrain className="text-cyan-400 text-4xl mx-auto mb-3" />
              <h3 className="font-semibold text-lg">
                Artificial Intelligence
              </h3>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-800 p-6 rounded-2xl text-center"
            >
              <FaLaptopCode className="text-cyan-400 text-4xl mx-auto mb-3" />
              <h3 className="font-semibold text-lg">
                React & Tailwind CSS
              </h3>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
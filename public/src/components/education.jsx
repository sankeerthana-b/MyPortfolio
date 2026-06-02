import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaLaptopCode,
} from "react-icons/fa";

export default function Education() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">

      {/* Background Glow Effects */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
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

        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-cyan-400 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        {/* Timeline Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.02,
          }}
          className="relative bg-zinc-900 border border-white/10 rounded-3xl p-8 md:p-10 shadow-xl hover:border-cyan-400 transition"
        >
          {/* Graduation Icon */}
          <div className="absolute -top-6 left-8 bg-cyan-400 text-black p-4 rounded-full">
            <FaGraduationCap size={28} />
          </div>

          <div className="mt-6">

            {/* Degree */}
            <div className="flex items-center gap-3 mb-4">
              <FaLaptopCode className="text-cyan-400 text-2xl" />
              <h3 className="text-2xl md:text-3xl font-semibold">
                Bachelor of Technology
              </h3>
            </div>

            {/* College */}
            <div className="flex items-center gap-3 mb-3">
              <FaUniversity className="text-cyan-400" />
              <p className="text-gray-300 text-lg">
                CMR Technical Campus
              </p>
            </div>

            {/* Duration */}
            <div className="flex items-center gap-3 mb-3">
              <FaCalendarAlt className="text-cyan-400" />
              <p className="text-cyan-400 font-semibold">
                2024 - 2028
              </p>
            </div>

            {/* Branch */}
            <p className="text-gray-400 text-lg mt-4">
              Computer Science Engineering (AI & ML)
            </p>

            {/* Decorative Line */}
            <motion.div
              className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-6"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
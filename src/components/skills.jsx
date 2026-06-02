import skills from "../pages/data/skills";
import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaTools,
  FaLaptopCode,
} from "react-icons/fa";

export default function Skills() {

  const getIcon = (category) => {
    switch (category.toLowerCase()) {
      case "frontend":
        return <FaLaptopCode className="text-cyan-400 text-3xl" />;
      case "backend":
        return <FaServer className="text-cyan-400 text-3xl" />;
      case "tools":
        return <FaTools className="text-cyan-400 text-3xl" />;
      default:
        return <FaCode className="text-cyan-400 text-3xl" />;
    }
  };

  return (
    <section
      id="skills"
      className="relative py-24 px-6 overflow-hidden"
    >
      {/* Animated Background Glow */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-cyan-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                y: -8,
              }}
              className="bg-zinc-900 p-8 rounded-3xl border border-white/10 hover:border-cyan-400 transition shadow-xl"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                {getIcon(category)}

                <h3 className="text-2xl font-semibold capitalize text-cyan-400">
                  {category}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay: skillIndex * 0.05,
                    }}
                    whileHover={{
                      scale: 1.1,
                    }}
                    className="px-4 py-2 rounded-xl bg-black border border-cyan-400/30 hover:bg-cyan-400 hover:text-black transition cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
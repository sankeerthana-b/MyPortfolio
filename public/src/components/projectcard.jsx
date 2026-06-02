import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
} from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400 transition shadow-xl"
    >
      {/* Project Banner */}
      <div className="relative h-48 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center overflow-hidden">
        
        {/* Animated Background Glow */}
        <motion.div
          className="absolute w-40 h-40 rounded-full bg-cyan-400/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <FaCode className="text-6xl text-cyan-400" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Title */}
        <h3 className="text-2xl font-semibold mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 leading-7 mb-5">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: index * 0.05,
              }}
              whileHover={{
                scale: 1.1,
              }}
              className="px-3 py-1 rounded-lg bg-black border border-cyan-400/20 text-sm hover:bg-cyan-400 hover:text-black transition cursor-pointer"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">

          <motion.a
            href={project.liveDemo || "#"}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-400 text-black font-medium"
          >
            <FaExternalLinkAlt />
            Live Demo
          </motion.a>

          <motion.a
            href={project.github || "#"}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
          >
            <FaGithub />
            GitHub
          </motion.a>

        </div>
      </div>
    </motion.div>
  );
}
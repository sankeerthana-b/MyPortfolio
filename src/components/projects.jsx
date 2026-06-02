import projects from "../pages/data/projects";
import ProjectCard from "./projectcard";
import { motion } from "framer-motion";
import { FaFolderOpen } from "react-icons/fa";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-zinc-950 overflow-hidden"
    >
      {/* Background Glow Effects */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
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

        {/* Section Heading */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FaFolderOpen className="text-cyan-400 text-4xl" />

          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
            Projects
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-center text-gray-400 mb-12 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          A collection of projects showcasing my skills in
          React.js, Firebase, UI/UX design, and modern web development.
        </motion.p>

        {/* Project Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
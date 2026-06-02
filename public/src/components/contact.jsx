import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-zinc-950 overflow-hidden"
    >
      {/* Background Glow */}
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

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold mb-6 text-cyan-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-gray-400 text-lg mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Feel free to connect with me for projects,
          internships, collaborations, or tech discussions.
        </motion.p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Email */}
          <motion.a
            href="mailto:bsankeerthana10@gmail.com"
            whileHover={{
              scale: 1.05,
              y: -10,
            }}
            className="bg-zinc-900 rounded-2xl p-6 border border-white/10 hover:border-cyan-400 transition shadow-lg"
          >
            <FaEnvelope className="text-4xl text-cyan-400 mx-auto mb-4" />

            <h3 className="text-xl font-semibold mb-2">
              Email
            </h3>

            <p className="text-gray-400 break-all">
              bsankeerthana10@gmail.com
            </p>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/sankeerthana-b"
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.05,
              y: -10,
            }}
            className="bg-zinc-900 rounded-2xl p-6 border border-white/10 hover:border-cyan-400 transition shadow-lg"
          >
            <FaGithub className="text-4xl text-cyan-400 mx-auto mb-4" />

            <h3 className="text-xl font-semibold mb-2">
              GitHub
            </h3>

            <p className="text-gray-400">
              View My Projects
            </p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/sankeerthana-bestha"
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.05,
              y: -10,
            }}
            className="bg-zinc-900 rounded-2xl p-6 border border-white/10 hover:border-cyan-400 transition shadow-lg"
          >
            <FaLinkedin className="text-4xl text-cyan-400 mx-auto mb-4" />

            <h3 className="text-xl font-semibold mb-2">
              LinkedIn
            </h3>

            <p className="text-gray-400">
              Connect With Me
            </p>
          </motion.a>

        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:bsankeerthana10@gmail.com"
            className="inline-block px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition"
          >
            Let's Work Together 🚀
          </a>
        </motion.div>

      </div>
    </section>
  );
}
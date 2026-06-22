import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const profileImageUrl =
    "https://drive.google.com/file/d/1BaCsvLQx-aOc1L8hAluUqictfmMGL90E/view?usp=sharing";

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">

      {/* Background Blobs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
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
        className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
      />

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 text-cyan-400 text-lg mb-3">
            <motion.span
              animate={{ rotate: [0, 20, -10, 20, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              👋
            </motion.span>
            Hello, I'm
          </div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Bestha
            <motion.span
              className="text-cyan-400"
              animate={{
                textShadow: [
                  "0px 0px 5px #22d3ee",
                  "0px 0px 25px #22d3ee",
                  "0px 0px 5px #22d3ee",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              {" "}Sankeerthana
            </motion.span>
          </motion.h1>

          {/* Typing Animation */}
          <div className="mt-6">
            <span className="text-gray-400 text-xl">I'm a </span>

            <TypeAnimation
              sequence={[
                "Frontend Developer 🚀",
                2000,
                "React.js Developer ⚛️",
                2000,
                "AI Enthusiast 🤖",
                2000,
                "UI/UX Learner 🎨",
                2000,
                "Firebase Developer 🔥",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-cyan-400 text-2xl md:text-3xl font-bold"
            />

            <p className="mt-4 text-gray-300 text-lg leading-8 max-w-xl">
              Passionate about building modern web applications using
              React.js, Firebase, and creating beautiful user experiences.
            </p>
          </div>

          <motion.div
            className="flex gap-4 mt-8 flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-2xl bg-cyan-400 text-black font-semibold"
            >
              Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-2xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">

            {/* Floating Badges */}
            <motion.div
              className="absolute -top-4 -left-8 bg-slate-800 px-4 py-2 rounded-xl shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              React.js
            </motion.div>

            <motion.div
              className="absolute bottom-0 -right-8 bg-slate-800 px-4 py-2 rounded-xl shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Firebase
            </motion.div>

            {/* Rotating Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-cyan-400"
              animate={{ rotate: 360 }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Profile Image */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1 shadow-[0_0_50px_rgba(34,211,238,0.5)]"
            >
              <motion.img
                src={profileImageUrl}
                alt="Bestha Sankeerthana"
                className="w-full h-full rounded-full bg-sky-300 object-contain object-top p-3"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2"></div>
        </div>
      </motion.div>

    </section>
  );
}

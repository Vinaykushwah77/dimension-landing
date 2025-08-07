import { motion } from "framer-motion";

const keys = ["⌘", "K", "Shift", "Enter", "Ctrl", "Tab", "Alt", "Esc"];

export default function Shortcuts() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-10 text-white">Keyboard Shortcuts</h2>

      <div className="flex flex-wrap justify-center gap-6 px-6">
        {keys.map((key, i) => (
          <motion.div
            key={i}
            className="bg-white text-black px-4 py-2 rounded-full shadow-lg text-lg font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, 0, 10, 0] }}
            transition={{
              delay: i * 0.15,
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {key}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

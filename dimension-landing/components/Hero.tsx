import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 pb-10 bg-gradient-to-b from-black to-gray-900 flex flex-col justify-center items-center text-center px-6 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-7xl font-bold mb-4"
      >
        Superpowers for Web Apps
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg md:text-xl mb-6 max-w-2xl"
      >
        Connect code, data and tools directly into your app UI.
      </motion.p>
      <motion.input
        type="email"
        placeholder="Join the waitlist"
        className="px-4 py-2 rounded bg-white text-black w-full max-w-sm"
        whileFocus={{ scale: 1.05 }}
      />
    </section>
  );
}

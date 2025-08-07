import { motion } from "framer-motion";

const features = [
  {
    title: "Code Command Bar",
    description: "Control your entire app through a powerful AI command bar.",
  },
  {
    title: "Realtime Deployment",
    description: "See your code deploy instantly across environments.",
  },
  {
    title: "AI Task Automation",
    description: "Let AI handle repetitive tasks inside your app dashboard.",
  },
];

export default function Features() {
  return (
    <section className="pt-10 pb-20 bg-black text-white px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg bg-gray-900 shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

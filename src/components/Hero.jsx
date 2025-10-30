import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-24 text-center">
      <motion.img
        src="/javalingo-compunifil.png"
        alt="Mascote do JavaLingo"
        className="w-48 h-48 mb-6 drop-shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      <h1 className="text-4xl font-bold text-accent">JavaLingo 🚀</h1>
      <p className="text-lg mt-4 max-w-xl text-gray-300">
        Jogo educacional gamificado para aprendizado de lógica e Java,
        desenvolvido em Next.js com Firebase, com níveis, XP e loja de skins.
      </p>
      <div className="flex gap-4 mt-8">
        <a
          href="https://apps.unifil.tech/posts/javalingo/"
          className="px-6 py-3 bg-accent rounded-full hover:shadow-[0_0_15px_#7c3aed] transition"
        >
          Acessar App
        </a>
        <a
          href="#video"
          className="px-6 py-3 border border-accent rounded-full hover:bg-accent transition"
        >
          Ver Vídeo
        </a>
      </div>
    </section>
  );
}

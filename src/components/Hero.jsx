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
<p className="text-gray-300 leading-relaxed max-w-2xl mx-auto text-lg">
  <strong>JavaLingo</strong> é um jogo educacional gamificado voltado ao
  aprendizado de lógica de programação e fundamentos de Java. Desenvolvido
  em <strong>Next.js</strong> e <strong>Firebase</strong>, o projeto oferece
  teste de nivelamento, progressão por XP e níveis, missões interativas e
  loja de skins.
</p>

<p className="text-gray-300 leading-relaxed max-w-2xl mx-auto text-lg">
  Com design moderno e responsivo, o JavaLingo aplica conceitos de
  aprendizado ativo, incentivando o estudo de lógica e Java de forma leve,
  divertida e intuitiva.
</p>

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

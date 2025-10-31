export default function TechSpecs() {
  return (
    <section id="techspecs" className="py-20 text-center">
      <h2 className="text-3xl font-bold text-accent mb-8 flex justify-center items-center gap-2">
        🧩 Especificações Técnicas
      </h2>

<div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-left text-gray-300">
  <div>
    <h3 className="text-xl font-semibold text-accent mb-3">
      🛠️ Tecnologias Utilizadas
    </h3>
    <ul className="list-disc list-inside space-y-1">
      <li>
        <strong>Next.js</strong> — Framework React para renderização dinâmica e SEO otimizado
      </li>
      <li>
        <strong>Firebase</strong> — Autenticação, banco de dados em tempo real (Firestore) e hospedagem de dados
      </li>
      <li>
        <strong>TailwindCSS</strong> — Estilização moderna e responsiva com design system customizado
      </li>
      <li>
        <strong>Framer Motion</strong> — Biblioteca para animações suaves e interações visuais
      </li>
      <li>
        <strong>Node.js + npm</strong> — Ambiente e gerenciador de pacotes para execução e build do projeto
      </li>
      <li>
        <strong>Oracle Cloud</strong> — Deploy e gerenciamento da aplicação via VM com Nginx e PM2
      </li>
    </ul>
  </div>

  <div>
  <h3 className="text-xl font-semibold text-accent mb-3">
    💡 Funcionalidades do Sistema
  </h3>
  <ul className="list-disc list-inside space-y-1">
    <li>Login e cadastro com autenticação via Firebase (Auth).</li>
    <li>Teste de nivelamento automático no primeiro login.</li>
    <li>Missões com progressão por XP, níveis e moedas com salvamento em nuvem.</li>
    <li>Loja de skins e sistema de recompensas com moedas virtuais.</li>
    <li>Painel de perfil com exibição de conquistas e progresso.</li>
    <li>Design com animações e transições suaves via Framer Motion.</li>
    <li>Armazenamento e sincronização em tempo real via Firestore.</li>
  </ul>
</div>
      </div>
    </section>
  );
}

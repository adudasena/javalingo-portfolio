import { useEffect, useState } from "react";

export default function DocsGallery() {
  const docs = [
    {
      name: "Mapa de Empatia",
      hint: "Clique para visualizar imagem e resumo",
      file: "mapa-empatia.png",
      desc:
        "A ideia surgiu aqui, com um mapa de empatia pra entender as dores e necessidades do usuário. Esse é o resumo do perfil do usuário-alvo (aluno do ensino médio iniciando em programação).",
    },
    {
      name: "Visão",
      hint: "Clique para visualizar imagem e resumo",
      file: "visão.png",
      desc:
        "Documento de visão com objetivo, público, posicionamento e métricas do projeto.",
    },
    {
      name: "Fluxograma",
      hint: "Clique para visualizar imagem e resumo",
      file: "fluxograma.png",
      desc:
        "Fluxo principal do app: login/cadastro → teste de nivelamento → missões → evolução de nível → perfil/skins.",
    },
    {
      name: "Caso de Uso",
      hint: "Clique para visualizar imagem e resumo",
      file: "caso-de-uso.png",
      desc:
        "Principais casos de uso (Realizar Nivelamento, Fazer Missão, Avançar Nível, Trocar Skins) e atores envolvidos.",
    },
  ];

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openDoc = (doc) => {
    setSelected(doc);
    setOpen(true);
  };

  return (
    <div>
      <h2 className="text-3xl mb-8 text-accent font-bold flex items-center gap-3">
        <span role="img" aria-label="doc">📄</span> Documentação do Projeto.
      </h2>

      {/* grid de documentos */}
      <div className="grid md:grid-cols-2 gap-6">
        {docs.map((d) => (
          <div
            key={d.file}
            className="bg-g800/80 border border-g700/30 p-5 rounded-2xl shadow-lg hover:shadow-[0_0_18px_#7c3aed] transition text-center"
          >
            <p className="text-lg font-semibold text-gray-200 mb-2">
              {d.name}
            </p>
            <button
              onClick={() => openDoc(d)}
              className="text-accent font-bold hover:underline focus:underline"
            >
              {d.hint}
            </button>
          </div>
        ))}
      </div>

      {/* modal */}
      {open && selected && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="bg-g800/95 border border-g700/40 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-g700/40">
              <h3 className="text-xl font-bold text-accent">{selected.name}</h3>
              <button
                className="px-3 py-1 rounded-md border border-accent text-accent hover:bg-accent hover:text-white transition"
                onClick={() => setOpen(false)}
              >
                Fechar
              </button>
            </div>

            <div className="p-5 grid gap-5 md:grid-cols-2">
              <div className="rounded-xl overflow-hidden bg-g900/60">
                <img
                  src={`/docs/${selected.file}`}
                  alt={selected.name}
                  className="w-full h-auto"
                />
              </div>
              <div className="text-left">
                <p className="text-gray-300 leading-relaxed">{selected.desc}</p>

                <div className="mt-5 flex gap-3">
                  <a
                    href={`/docs/${selected.file}`}
                    download
                    className="px-4 py-2 rounded-full bg-accent hover:shadow-[0_0_15px_#7c3aed] transition"
                  >
                    Baixar PNG
                  </a>
                  <a
                    href={`/docs/${selected.file}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full border border-accent text-accent hover:bg-accent hover:text-white transition"
                  >
                    Abrir em nova aba
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

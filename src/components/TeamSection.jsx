export default function TeamSection() {
  const team = [
    {
      name: "Luiz Felipe Bonilha Carmona",
      role: "Estudante de Ciência da Computação (UniFil- E1 2024)",
      image: "/team/luiz.jpeg",
    },
        {
      name: "Maria Eduarda De Sena Ruiz",
      role: "Estudante de Ciência da Computação (UniFil- E1 2024)",
      image: "/team/duda2.jpeg",
    },
    {
      name: "Tomio Ian Nishijima",
      role: "Estudante de Ciência da Computação (UniFil- E1 2024)",
      image: "/team/tomio.jpeg",
    },
  ];

  return (
    <section id="team" className="text-center py-20">
      <h2 className="text-3xl mb-8 text-accent font-bold flex items-center justify-center gap-3">
        <span role="img" aria-label="team">👥</span> Nossa Equipe
      </h2>

            {/* Foto do time completo */}
      <div className="flex justify-center mb-10">
        <img
          src="/team/time.jpeg"
          alt="Equipe JavaLingo"
          className="rounded-2xl shadow-[0_0_20px_#7c3aed] border border-g700/50 max-w-xl w-full"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {team.map((member) => (
          <div
            key={member.name}
            className="bg-g800/70 border border-g700/30 p-5 rounded-2xl shadow-lg hover:shadow-[0_0_15px_#7c3aed] transition flex flex-col items-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-2 border-accent shadow-md"
              onError={(e) => (e.currentTarget.src = '/team/default.png')}
            />
            <h3 className="text-lg font-bold text-gray-200">{member.name}</h3>
            <p className="text-sm text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

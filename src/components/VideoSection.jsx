export default function VideoSection() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl mb-8 text-accent font-bold">🎬 Vídeo do Projeto</h2>
      <div className="aspect-video w-full max-w-3xl rounded-xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/wWgP46z7LHw"
          title="Apresentação JavaLingo"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

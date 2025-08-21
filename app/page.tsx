import CoverParticles from "@/components/cover-particles";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CoverParticles />
      {/* ② sube el contenido por encima del canvas */}
      <div className="relative z-10 flex min-h-[100vh] items-center justify-center">
        <p className="text-white text-2xl">Introducción</p>
      </div>
    </main>
  );
}

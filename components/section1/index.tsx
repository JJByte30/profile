/* eslint-disable @next/next/no-img-element */
export default function Section1 () {
    return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-black via-zinc-900 to-black relative overflow-hidden" >
      <div className="flex flex-col gap-16 items-center max-w-[1200px] mx-auto px-8 z-10">
        <div>
            <img src="" alt="Foto de João José" />
            <h2>João José</h2>
        </div>
        <div className="border">
            <p>{"("}Sobre{")"}, estudante de Direito, formado em Análise e Desenvolvimento de Sistemas, com 10 anos de experiencia como editor de video...</p>
        </div>
      </div>
    </section>
    );
}
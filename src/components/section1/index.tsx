import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Section1 () {
    return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-black via-[#200704] to-black relative overflow-hidden" >
      <div className="flex flex-col gap-6 items-center max-w-[1200px] mx-auto px-8 z-10">
        <div className="flex flex-col text-center gap-3">
            <div className="w-40">
              <img src="fotocartoon2.jpg" alt="Foto de João José" className="rounded-full shadow-lg shadow-[#70160E]/30" />
            </div>
            <div>
              <h2 className="font-bold text-2xl">João José</h2>
              <h2 className="font-medium">Estevão Melo Júnior</h2>
            </div>
        </div>
        <div className="text-center">
            <p>{"("}Sobre{")"}, estudante de Direito, formado em Análise e Desenvolvimento de Sistemas, com 10 anos de experiencia como editor de video...</p>
        </div>
        <div className="">
          <ul className="flex flex-col gap-4 *:border *:px-4 *:rounded-md *:py-3 *:border-[#9E0004] *:shadow-lg *:shadow-[#9E0004]/15 text-center">
              <Link href="/direito"><li><button className="">Direito</button></li></Link>
              <Link href="/desenvolvedor"><li><button className="">Desenvolvedor Front-end</button></li></Link>
              <Link href="/editor"><li><button className="">Editor de Vídeo</button></li></Link>
              <Link href="/social"><li><button className="">Redes Sociais</button></li></Link>
          </ul>
        </div>
      </div>
    </section>
    );
}
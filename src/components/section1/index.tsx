import Link from "next/link";
import Profile from "../perfil/profile";

/* eslint-disable @next/next/no-img-element */
export default function Section1 () {
    return (
    <section id="home" className="min-h-screen flex bg-gradient-to-br from-black via-[#200704] to-black relative overflow-hidden" >
      <div className="flex md:justify-between md:w-full md:px-14 md:flex-row md:mt-0 flex-col mt-16 gap-6 items-center max-w-[1200px] mx-auto px-8 z-10">
        <div className="flex flex-col items-center md:gap-6 md:mb-28">
          <Profile/>
          <div className="text-center md:w-120">
              <p className="text-white text-balance">{"("}Sobre{")"}, estudante de Direito, formado em Análise e Desenvolvimento de Sistemas, com 10 anos de experiencia como editor de video...</p>
          </div>
        </div>
        <div className="">
          <ul className="flex flex-col md:gap-12 gap-4 *:border *:px-4 *:rounded-md md:*:w-65 md:mb-12 *:cursor-pointer *:w-50 md:*:py-4 *:py-3 *:border-[#9E0004] *:transition-all *:duration-300 *:hover:-translate-y-0.5 *:hover:bg-[#9e00058f] *:shadow-lg *:shadow-[#9E0004]/15 text-center">
              <li><Link href="/direito"><span className="text-white font-medium tracking-wider">Direito</span></Link></li>
              <li><Link href="/desenvolvedor"><span className="text-white font-medium tracking-wider">Desenvolvedor</span></Link></li>
              <li><Link href="/editor"><span className="text-white font-medium tracking-wider">Editor de Vídeo</span></Link></li>
              <li><Link href="/social"><span className="text-white font-medium tracking-wider">Redes Sociais</span></Link></li>
          </ul>
        </div>
      </div>
    </section>
    );
}
import Link from "next/link";
import Profile from "../perfil/profile";

/* eslint-disable @next/next/no-img-element */
export default function Section1 () {
    return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-black via-[#200704] to-black relative overflow-hidden" >
      <div className="flex flex-col gap-6 items-center max-w-[1200px] mx-auto px-8 z-10">
        <Profile/>
        <div className="text-center">
            <p className="text-white">{"("}Sobre{")"}, estudante de Direito, formado em Análise e Desenvolvimento de Sistemas, com 10 anos de experiencia como editor de video...</p>
        </div>
        <div className="">
          <ul className="flex flex-col gap-4 *:border *:px-4 *:rounded-md *:w-50 *:py-3 *:border-[#9E0004] *:shadow-lg *:shadow-[#9E0004]/15 text-center">
              <li><Link href="/direito"><button className="text-white">Direito</button></Link></li>
              <li><Link href="/desenvolvedor"><button className="text-white">Desenvolvedor</button></Link></li>
              <li><Link href="/editor"><button className="text-white">Editor de Vídeo</button></Link></li>
              <li><Link href="/social"><button className="text-white">Redes Sociais</button></Link></li>
          </ul>
        </div>
      </div>
    </section>
    );
}
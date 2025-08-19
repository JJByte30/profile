"use client"
import Link from "next/link";
import Profile from "../perfil/profile";
import CircleProgress from "../circle";

/* eslint-disable @next/next/no-img-element */
export default function Section1 () {
    return (
    <section id="home" className="min-h-screen flex bg-gradient-to-br from-black via-[#200704] to-black relative overflow-hidden" >
      <div className="flex md:justify-between md:w-full md:px-14 md:flex-row md:mt-0 flex-col mt-16 gap-6 items-center max-w-[1200px] mb-6 mx-auto px-8 z-10">
        <div className="flex flex-col items-center gap-3 md:gap-6 md:mb-28">
          <Profile/>
          <div className="text-center md:w-120">
              <p className="text-white text-balance">Prazer, meu nome é <span className="font-semibold">João José</span>. Sou estudante de <span className="font-semibold">Direito na Uniube</span>, formado em <span className="font-semibold">Análise e Desenvolvimento de Sistemas</span> e tenho mais de <span className="font-semibold">10 anos de experiência como editor de vídeo</span>.</p>
          </div>
          <div className="flex flex-row justify-center text-center md:gap-12 gap-2 font-semibold *:flex *:flex-col md:mt-4">
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-white">Direito: </h2>
              <CircleProgress percentage={10} color="#9E0004" size={{ mobile: 80, desktop: 100 }} content="1/10"/>
              <h2 className="text-white">1/10</h2>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-white">Editor:</h2>
              <CircleProgress percentage={70} color="#9E0004" size={{ mobile: 80, desktop: 100 }} content="+10"/>
              <h2 className="text-white">+10 anos</h2>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-white">Dev:</h2>
              <CircleProgress percentage={20} color="#9E0004" size={{ mobile: 80, desktop: 100 }} content="1"/>
              <h2 className="text-white">1 ano</h2>
            </div>
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
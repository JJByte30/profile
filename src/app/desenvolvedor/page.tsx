/* eslint-disable @next/next/no-img-element */
import ButtonNext from "@/components/buttonnext";
import Profile from "@/components/perfil/profile";
import Link from "next/link";

export default function Desenvolvedor() {
    return (
        <section id="home" className="min-h-screen flex bg-gradient-to-br from-black via-[#200704] to-black relative overflow-hidden">
            <div className="flex flex-col mt-16 gap-6 max-w-[1200px] mx-auto px-8 z-10">
                <div className="flex flex-col items-center">
                    <Profile />
                    <h2 className="text-lg font-extrabold uppercase tracking-wider text-center bg-gradient-to-r from-[#B9030F] to-white bg-clip-text text-transparent">Desenvolvedor</h2>
                </div>
                <article>
                    <ul className="flex flex-col tracking-wider marker:text-white gap-y-4 mx-6 mb-4">
                        <li>
                            <h2 className="font-semibold text-white">- Historia:</h2>
                            <p className="text-white whitespace-pre-line">Meu primeiro contato com programação aconteceu em <span className="font-semibold">2018/2019</span>, durante um curso na <span className="font-semibold">Bit+ Uberaba</span>, onde comecei a entender lógica de programação e dar os primeiros passos no mundo da tecnologia. Alguns anos depois, iniciei a graduação em <span className="font-semibold">Análise e Desenvolvimento de Sistemas</span>, que consolidou minha base de conhecimento em desenvolvimento web, banco de dados e programação orientada a objetos. Desde então, venho aprimorando minhas habilidades e direcionando minha carreira para o desenvolvimento de sistemas modernos e eficientes.</p>
                        </li>
                        <li>
                            <h2 className="font-semibold text-white">- Experiencias:</h2>
                            <p className="text-white whitespace-pre-line">Entre <span className="font-semibold">setembro de 2024 e setembro de 2025</span>, atuei na <span className="font-semibold">Codiub {"("}Companhia de Desenvolvimento de Informática de Uberaba{")"}</span>, onde tive a oportunidade de trabalhar em diferentes frentes do desenvolvimento de software.</p>
                            <p className="text-white whitespace-pre-line">Passei por <span className="font-semibold">Angular</span> no frontend e <span className="font-semibold">Java (Spring Boot)</span> no backend, mas meu principal foco foi o <span className="font-semibold">desenvolvimento com React e Next.js</span>, criando interfaces modernas, performáticas e alinhadas às boas práticas do mercado.</p>
                            <p className="text-white whitespace-pre-line">Essa experiência me permitiu evoluir tanto em aspectos técnicos quanto em arquitetura de aplicações web, boas práticas de programação e integração entre sistemas.</p>
                        </li>
                        <li className="flex flex-col gap-2">
                            <h2 className="font-semibold text-white">- Linguagens:</h2>
                            <div className="flex flex-col text-sm md:flex-row gap-2">
                                <div className="">
                                    <p className="font-semibold">Front-end:</p>
                                    <p className="text-white"> React, Next.js, Angular, JavaScript, TypeScript, HTML5, CSS3 (Tailwind)</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Back-end:</p>
                                    <p className="text-white">Java (Spring Boot)</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Banco de Dados:</p>
                                    <p className="text-white">SQL, MySQL, PostgreSQL</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </article>
            </div>
            <ButtonNext proximo="/editor" anterior="/direito" />
        </section>
    );
}

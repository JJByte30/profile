/* eslint-disable @next/next/no-img-element */
import ButtonNext from "@/components/buttonnext";
import Profile from "@/components/perfil/profile";

export default function Direito() {
    return (
        <section id="home" className="min-h-screen flex bg-gradient-to-br from-black via-[#200704] to-black relative overflow-hidden">
            <div className="flex flex-col mt-16 gap-6 max-w-[1200px] mx-auto px-8 z-10">
                <div className="flex flex-col items-center">
                    <Profile />
                    <h2 className="text-lg font-extrabold uppercase tracking-wider text-center bg-gradient-to-r from-[#B9030F] to-white bg-clip-text text-transparent">Direito</h2>
                </div>
                <article>
                    <ul className="flex flex-col tracking-wider marker:text-white gap-y-4 mx-6 mb-4">
                        <li className="flex flex-col gap-1">
                            <h2 className="font-semibold text-white">- História:</h2>
                            <p className="text-white whitespace-pre-line">Atualmente, estou <span className="font-semibold">cursando Direito na Uniube</span>, no <span className="font-semibold">1º período {"("}1/10{")"}</span>, iniciado em agosto de 2025.</p>
                            <p className="text-white whitespace-pre-line">Sempre tive muito interesse pela área do <span className="font-semibold">Direito</span>, mas durante anos carreguei inseguranças — medo de ser algo {"'"}difícil{"'"}, exigindo muita leitura, redação e dedicação intensa. Essa desmotivação me levou, no passado, a escolher seguir o caminho da <span className="font-semibold">tecnologia</span> {"("}curso de Análise e Desenvolvimento de Sistemas{")"}, apenas por gostar de computadores.</p>
                            <p className="text-white whitespace-pre-line">No entanto, percebi que a escolha não representava de fato minha verdadeira vocação. O Direito sempre esteve presente como uma vontade genuína, e hoje me sinto <span className="font-semibold">realizado por finalmente seguir esse caminho</span>. Estudar e futuramente trabalhar na área é algo que me motiva e que considero um projeto de vida.</p>
                        </li>
                    </ul>
                </article>
            </div>
            <ButtonNext proximo="/desenvolvedor" anterior="/social" />
        </section>
    );
}

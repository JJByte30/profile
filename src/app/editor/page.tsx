/* eslint-disable @next/next/no-img-element */
import ButtonNext from "@/components/buttonnext";
import Profile from "@/components/perfil/profile";
import Link from "next/link";

export default function Editor() {
    return (
        <section id="home" className="min-h-screen flex bg-gradient-to-br from-black via-[#200704] to-black relative overflow-hidden">
            <div className="flex flex-col mt-16 gap-6 max-w-[1200px] mx-auto px-8 z-10">
                <div className="flex flex-col items-center">
                    <Profile />
                    <h2 className="text-lg font-extrabold uppercase tracking-wider text-center bg-gradient-to-r from-[#B9030F] to-white bg-clip-text text-transparent">Editor de Vídeo</h2>
                </div>
                <article>
                    <ul className="flex flex-col tracking-wider marker:text-white gap-y-4 mx-6 mb-4">
                        <li className="flex flex-col gap-1">
                            <h2 className="font-semibold text-white">- Historia:</h2>
                            <p className="text-white whitespace-pre-line">Tenho cerca de <span className="font-semibold">10 a 11 anos de experiência em edição de vídeo</span>, começando muito cedo, por volta dos <span className="font-semibold">8/9 anos de idade</span>, utilizando o <span className="font-semibold">Camtasia Studio</span> para criar vídeos pessoais para o YouTube, especialmente sobre <span className="font-semibold">Minecraft</span>. Na época, possuía um canal com cerca de <span className="font-semibold">10 mil seguidores</span> e gerenciava meu próprio servidor, programando o básico e adicionando plugins.</p>
                            <p className="text-white whitespace-pre-line">Posteriormente, migrei para o <span className="font-semibold">Sony Vegas</span>, onde continuei editando vídeos até meus <span className="font-semibold">14 anos</span>, produzindo conteúdos para o YouTube e aprimorando técnicas de corte, transições e efeitos.</p>
                            <p className="text-white whitespace-pre-line">A partir dessa idade, comecei a me aprofundar em edições mais profissionais utilizando o <span className="font-semibold">After Effects</span>, produzindo vídeos para meus perfis no Instagram (<span className="font-semibold">hunter.wmv</span> e <span className="font-semibold">zw4g,g</span>), explorando efeitos avançados, animações e diversos plugins.</p>
                            <p className="text-white whitespace-pre-line">Além disso, ao longo do tempo, também aprimorei habilidades em <span className="font-semibold">Photoshop</span> e <span className="font-semibold">Adobe Premiere</span>, ampliando meu leque de edição e composição visual.</p>
                        </li>
                        <li className="flex flex-col gap-1">
                            <h2 className="font-semibold text-white">- Experiencias:</h2>
                            <p className="text-white whitespace-pre-line">Trabalhei tanto em projetos pessoais quanto em trabalhos freelance, produzindo edições personalizadas para outras pessoas e empresas virtuais, como a <span className="font-semibold">Suricato{"'"}x Corporation</span> (desenvolvimento de mods para <span className="font-semibold">FiveM</span>), onde fui responsável por vídeos e banners.</p>
                            <p className="text-white whitespace-pre-line">Mais recentemente, a partir de <span className="font-semibold">2024</span>, criei um <span className="font-semibold">TikTok</span> de fã das séries <span className="font-semibold">Supernatural</span> e <span className="font-semibold">Suits</span>, produzindo edits que chegaram a monetizar a página. Atualmente, minha conta <span className="font-semibold">blazz.aep</span> conta com <span className="font-semibold">70 mil seguidores</span>, consolidando minha experiência em produção de conteúdo audiovisual para redes sociais.</p>
                        </li>
                        <li className="flex flex-col gap-1">
                            <h2 className="font-semibold text-white">- Plataformas e Plugins:</h2>
                            <div className="flex flex-col text-sm md:flex-row gap-4">
                                <div>
                                    <p className="font-semibold">Plataformas:</p>
                                    <p className="text-white"><span className="font-medium">After Effects, Adobe Premiere, Photoshop, Sony Vegas, Camtasia Studio</span></p>
                                </div>
                                <div>
                                    <p className="font-semibold">Plugins & Efeitos:</p>
                                    <p className="text-white"><span className="font-medium">Magic Bullet, Sapphire, S_Shark, Red Giant Universe, Trapcode Particular, Optical Flares, Element 3D, Twitch, Saber, transições personalizadas, Color Grading, Motion Graphics, animações tipográficas</span></p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </article>
            </div>
            <ButtonNext proximo="/social" anterior="/desenvolvedor" />
        </section>
    );
}

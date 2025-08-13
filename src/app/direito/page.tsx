/* eslint-disable @next/next/no-img-element */
import Profile from "@/components/perfil/profile";
import Link from "next/link";

interface Sobre {
    titulo: string,
    texto: string
}

export default function Direito () {
        const lista: Sobre[] =  [
        {
            titulo: "Historia",
            texto: "texto"
        },
        {
            titulo: "Experiencias",
            texto: "texto"
        },
        {
            titulo: "Linguagens",
            texto: "texto"
        }
        
    ]
    return (
        <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-black via-[#200704] to-black relative overflow-hidden">
            <div className="flex flex-col gap-6 max-w-[1200px] mx-auto px-8 z-10">
                <div className="flex flex-col items-center">
                    <Profile/>
                    <h2 className="text-lg font-extrabold uppercase tracking-wider text-center bg-gradient-to-r from-[#B9030F] to-white bg-clip-text text-transparent">Direito</h2>
                </div>
                <div className="">
                    <ul className="flex flex-col tracking-wider list-disc marker:text-white gap-y-4">
                        {lista.map(({titulo, texto}, index) => {
                            return (
                                <li key={index}>
                                    <h2 className="font-semibold text-white">{titulo}</h2>
                                    <p className="text-white">{texto}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <Link href="/social">
                <div className="absolute left-4 top-[40%] -translate-y-1/2">
                    <img src="/arrowright.svg" alt="" className="invert"/>
                </div>
            </Link>
            <Link href="/desenvolvedor">
                <div className="absolute right-4 top-[40%] -translate-y-1/2">
                    <img src="/arrowleft.svg" alt="" className="invert"/>
                </div>
            </Link>
        </section>
    );
}
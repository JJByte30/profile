/* eslint-disable @next/next/no-img-element */
import ButtonNext from "@/components/buttonnext";
import Profile from "@/components/perfil/profile";
import Link from "next/link";

interface Sobre {
    titulo: string,
    imagem: string,
    link: string
}

export default function Social () {
        const lista: Sobre[] =  [
        {
            titulo: "Instagram",
            imagem: "/instagram.svg",
            link: "https://www.instagram.com/jjaojose"
        },
        {
            titulo: "Github",
            imagem: "/github.svg",
            link: "https://github.com/JJByte30"
        },
        {
            titulo: "Linkedin",
            imagem: "/linkedin.svg",
            link: "https://www.linkedin.com/in/devjoaojosejunior"
        },
        {
            titulo: "Tiktok",
            imagem: "/tiktok.svg",
            link: "https://www.tiktok.com/@blazz.aep"
        }
        
    ]
    return (
        <section id="home" className="min-h-screen md:pb-0 pb-6 flex bg-gradient-to-br from-black via-[#200704] to-black relative overflow-hidden">
            <div className="flex flex-col mt-16 gap-6 max-w-[1200px] mx-auto px-8 z-10">
                <div className="flex flex-col items-center">
                    <Profile/>
                    <h2 className="text-lg font-extrabold uppercase tracking-wider text-center bg-gradient-to-r from-[#B9030F] to-white bg-clip-text text-transparent">Social</h2>
                </div>
                <div className="">
                    <ul className="flex md:flex-row md:gap-x-8 flex-col tracking-wider gap-y-4">
                        {lista.map(({titulo, imagem, link}, index) => {
                            return (
                                <li key={index}>
                                        <a href={link} target="_blank" className="flex flex-col items-center text-center gap-2">
                                            <h2 className="font-semibold text-white">{titulo}</h2>
                                            <img src={imagem} alt={titulo} className="text-white w-14"/>
                                        </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <ButtonNext proximo = "/direito" anterior = "/editor"/>
        </section>
    );
}
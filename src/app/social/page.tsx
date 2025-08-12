import Profile from "@/components/perfil/profile";

interface Sobre {
    titulo: string,
    imagem: string
}

export default function Social () {
        const lista: Sobre[] =  [
        {
            titulo: "Instagram",
            imagem: ""
        },
        {
            titulo: "Github",
            imagem: "texto"
        },
        {
            titulo: "Linkedin",
            imagem: "texto"
        }
        
    ]
    return (
        <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-black via-[#200704] to-black relative overflow-hidden">
            <div className="flex flex-col gap-6 max-w-[1200px] mx-auto px-8 z-10">
                <div className="flex flex-col items-center">
                    <Profile/>
                    <h2 className="text-lg font-extrabold uppercase tracking-wider text-center bg-gradient-to-r from-[#B9030F] to-white bg-clip-text text-transparent">Social</h2>
                </div>
                <div className="">
                    <ul className="flex flex-col tracking-wider gap-y-4">
                        {lista.map(({titulo, imagem}, index) => {
                            return (
                                <li key={index}>
                                    <h2 className="font-semibold text-white">{titulo}:</h2>
                                    <img src={imagem} alt={titulo} className="text-white"/>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}
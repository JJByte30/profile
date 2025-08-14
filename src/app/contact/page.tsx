"use client"
import { FormEvent, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact () {
    const [isLoading, setIsLoading] = useState (false);
    const [message, setMessage] = useState("");
    
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
        setMessage("");

        const serviceID = "service_vmauw09";
        const templateID = "template_conz7dj";
        const userID = "F_qBCMaGwzb-4w77I";

        emailjs
            .sendForm(serviceID, templateID, e.currentTarget, userID)
            .then(
                (result) => {
                    console.log("Email sent successfully:", result.text);
                    setMessage("Sua mensagem foi enviada com sucesso!");
                    setIsLoading(false);
                    (e.target as HTMLFormElement).reset();
                },
                (error) => {
                    console.error("Error sending email", error.text);
                    setMessage("Erro ao enviar sua mensagem. Tente novamente");
                    setIsLoading(false);
                }
            );
    }
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#200704] to-black relative overflow-hidden">
            <div className="flex flex-col gap-6 max-w-[1200px] mx-auto px-8 z-10">
                <div className=" w-180 h-full mt-14">
                    <div className="text-center flex flex-col items-center select-none mb-6">
                        <h2 className="tracking-widest w-80 text-5xl font-bold"><span className="text-red-500">Entre em</span>{" "}Contato</h2>
                    </div>

                    {/* Formulario */}
                    <div className="">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-4">
                            <div className="flex flex-col items-center gap-6 justify-between *:w-80 *:h-12 *:rounded-lg ">
                                <input type="text" name="name" placeholder="Nome" className="text-white text-lg normal-case px-4 border border-neutral-500/70 focus:border-red-500 focus:outline-none" autoComplete="off" required/>
                                <input type="email" name="email" placeholder="Seu E-mail" className="text-white text-lg normal-case px-4 border border-neutral-500/70 focus:border-red-500 focus:outline-none" autoComplete="off" required/>
                            </div>
                            <div className="flex flex-col items-center *:w-80 *:h-12 *:rounded-lg">
                                <input type="text" name="subject" placeholder="Assunto" className="w-full text-white text-lg normal-case px-4 border border-neutral-500/70 focus:border-red-500 focus:outline-none" autoComplete="off" required/>
                            </div>
                            <div className="flex flex-col items-center *:w-80 *:h-56 *:rounded-lg">
                                <textarea name="message" placeholder="Mensagem" className="text-white text-lg normal-case px-4 pt-4 border border-neutral-500/70 focus:border-red-500 focus:outline-none resize-none" autoComplete="off" required></textarea>
                            </div>
                            
                            {/*  Botão enviar */}
                            <div className="flex flex-col items-center">
                                {message && (
                                    <div className={`text-center w-50 p-2 rounded ${message.includes("sucesso") ? "text-green-400 border border-green-400" : "text-red-400 border border-red-400"}`}>{message}</div>
                                )}
                            </div>

                            <div className="flex flex-col items-center">
                                <button type="submit" disabled={isLoading} className={`text-center border w-30 py-3 rounded-lg font-semibold transition-all duration-300 ${isLoading ? "border-gray-500 text-gray-500 cursor-not-allowed" : "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"}`}>
                                    {isLoading ? "Enviando..." : "Enviar"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
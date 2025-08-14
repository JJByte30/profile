import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Footer () {
    return (
            <footer className="bg-black border-t border-t-[#b9030f3c] md:pt-12 md:pb-4 pt-6 pb-2">
                <div className="m-0 md:px-30">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-4 text-white text-center">
                        <Link href="/contact">
                            <div className="flex flex-row gap-2">
                                <img src="/mail2.svg" alt="" className="invert"/>
                                <p className="text-white underline">Entre em contato comigo</p>
                                
                            </div>
                        </Link>
                        <div className="">
                            <p className="text-[#cccccc] items-center md:p-2 p-2 md:text-sm text-sm select-none"> Site desenvolvido por João José</p>
                        </div>
                    </div>
                </div>
            </footer>
    );
}
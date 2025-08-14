/* eslint-disable @next/next/no-img-element */
"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Header() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Obtém o pathname atual
  
  // Função para verificar se o link está ativo
  const isActiveLink = (href: string) => {
    // Para página home, verifica se é exatamente "/"
    if (href === "/") {
      return pathname === "/";
    }
    // Para outras páginas, verifica se o pathname começa com o href
    return pathname.startsWith(href);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const menuRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      setTimeout(() => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          setIsMenuOpen(false);
        }
      }, 10);
    }
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
      <header className="bg-black relative top-0 left-0 right-0 backdrop-blur z-[1000] border-b border-[#b9030f3c]">
        <nav className="flex items-center justify-between px-8 py-6 max-w-screen-xl mx-auto">
          <Link href="/">
            <div className="flex items-center gap-2">
              {/* <img src="" alt="Icone da Zynk Store" className="w-20" /> */}
              <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[#B9030F] to-[#E1E3DB] bg-clip-text text-transparent select-none">
                João Melo
              </span>
            </div>
          </Link>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white hover:text-[#64bcf4] transition-colors" aria-label="Abrir Menu">
              <img src={isMenuOpen ? "/close.svg" : "/menu.svg"} alt="Menu" className="invert w-8"/>
            </button>
          </div>

          {/* MOBILE MENU */}
          {isMenuOpen && (
            <div ref={menuRef} className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur border-b border-[#b9030f3c]" >
              <ul className="flex flex-col py-4 px-8 gap-4">
                <li>
                  <Link href="/direito" className={`font-medium block py-2 transition-all duration-300 ${ isActiveLink("/direito") ? "text-[#B9030F]" : "text-white hover:text-[#ec4652]" }`} onClick={() => setIsMenuOpen(false)} >
                    Direito
                  </Link>
                </li>
                <li>
                  <Link href="/desenvolvedor" className={`font-medium block py-2 transition-all duration-300 ${ isActiveLink("/desenvolvedor") ? "text-[#B9030F]" : "text-white hover:text-[#ec4652]" }`} onClick={() => setIsMenuOpen(false)} >
                    Desenvolvedor
                  </Link>
                </li>
                <li>
                  <Link href="/editor" className={`font-medium block py-2 transition-all duration-300 ${ isActiveLink("/editor") ? "text-[#B9030F]" : "text-white hover:text-[#ec4652]" }`} onClick={() => setIsMenuOpen(false)} >
                    Editor de Vídeo
                  </Link>
                </li>
                <li>
                  <Link href="/social" className={`font-medium block py-2 transition-all duration-300 ${ isActiveLink("/social") ? "text-[#B9030F]" : "text-white hover:text-[#ec4652]" }`} onClick={() => setIsMenuOpen(false)} >
                    Social
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {/* DESKTOP MENU */}
          <ul className="md:flex list-none gap-8 hidden">
            <li>
              <Link href="/direito" className={`font-medium relative transition-all duration-300 ${ isActiveLink("/direito") ? "text-[#B9030F]" : "text-white hover:text-[#ec4652]" }`} >
                Direito
              </Link>
            </li>
            <li>
              <Link href="/desenvolvedor" className={`font-medium relative transition-all duration-300 ${ isActiveLink("/desenvolvedor") ? "text-[#B9030F]" : "text-white hover:text-[#ec4652]" }`} >
                Desenvolvedor
              </Link>
            </li>
            <li>
              <Link href="/editor" className={`font-medium relative transition-all duration-300 ${ isActiveLink("/editor") ? "text-[#B9030F]" : "text-white hover:text-[#ec4652]" }`} >
                Editor de Vídeo
              </Link>
            </li>
            <li>
              <Link href="/social" className={`font-medium relative transition-all duration-300 ${ isActiveLink("/social") ? "text-[#B9030F]" : "text-white hover:text-[#ec4652]" }`} >
                Social
              </Link>
            </li>
          </ul>
        </nav>
      </header>
  );
}

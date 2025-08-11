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
    <div>
      <header className="bg-black/70 relative top-0 left-0 right-0 backdrop-blur z-[1000] border-b border-[#00a6ff33]">
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
            <div ref={menuRef} className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur border-b border-[#00a6ff33]" >
              <ul className="flex flex-col py-4 px-8 gap-4">
                <li>
                  <Link href="/" className={`font-medium block py-2 transition-all duration-300 ${ isActiveLink("/") ? "text-[#B9030F]" : "text-white hover:text-[#B9030F]" }`} onClick={() => setIsMenuOpen(false)} >
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/produtos" className={`font-medium block py-2 transition-all duration-300 ${ isActiveLink("/produtos") ? "text-[#B9030F]" : "text-white hover:text-[#B9030F]" }`} onClick={() => setIsMenuOpen(false)} >
                    Produtos
                  </Link>
                </li>
                <li>
                  <Link href="/duvidas" className={`font-medium block py-2 transition-all duration-300 ${ isActiveLink("/duvidas") ? "text-[#B9030F]" : "text-white hover:text-[#B9030F]" }`} onClick={() => setIsMenuOpen(false)} >
                    Duvidas
                  </Link>
                </li>
                <li>
                  <Link href="/termos" className={`font-medium block py-2 transition-all duration-300 ${ isActiveLink("/termos") ? "text-[#B9030F]" : "text-white hover:text-[#B9030F]" }`} onClick={() => setIsMenuOpen(false)} >
                    Termos de Uso
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {/* DESKTOP MENU */}
          <ul className="md:flex list-none gap-8 hidden">
            <li>
              <Link href="/" className={`font-medium relative transition-all duration-300 text-[1rem] ${ isActiveLink("/") ? "text-[#B9030F]" : "text-white hover:text-[#B9030F]" }`} >
                Home
              </Link>
            </li>
            <li>
              <Link href="/produtos" className={`font-medium relative transition-all duration-300 ${ isActiveLink("/produtos") ? "text-[#B9030F]" : "text-white hover:text-[#B9030F]" }`} >
                Produtos
              </Link>
            </li>
            <li>
              <Link href="/duvidas" className={`font-medium relative transition-all duration-300 ${ isActiveLink("/duvidas") ? "text-[#B9030F]" : "text-white hover:text-[#B9030F]" }`} >
                Dúvidas
              </Link>
            </li>
            <li>
              <Link href="/termos" className={`font-medium relative transition-all duration-300 ${ isActiveLink("/termos") ? "text-[#B9030F]" : "text-white hover:text-[#B9030F]" }`} >
                Termos de Uso
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

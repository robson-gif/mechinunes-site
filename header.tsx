"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre", href: "#sobre" },
  { name: "Áreas de Atuação", href: "#areas" },
  { name: "Equipe", href: "#equipe" },
  { name: "FAQ", href: "#faq" },
  { name: "Contato", href: "#contato" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-card/98 backdrop-blur-md border-b border-border shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className={`font-serif text-2xl font-bold tracking-tight leading-none ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}>
              MECHI NUNES
            </span>
            <span className={`text-[10px] tracking-[0.3em] uppercase mt-0.5 ${
              scrolled ? "text-muted-foreground" : "text-primary-foreground/70"
            }`}>
              Advogados
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                scrolled 
                  ? "text-muted-foreground hover:text-foreground" 
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex">
          <Link
            href="#contato"
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              scrolled 
                ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                : "bg-accent text-accent-foreground hover:bg-accent/90"
            }`}
          >
            Agende uma Consulta
          </Link>
        </div>

        <button
          type="button"
          className={`lg:hidden -m-2.5 p-2.5 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Abrir menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-b border-border">
          <div className="px-6 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contato"
              className="block w-full text-center bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Agende uma Consulta
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

import Link from "next/link"
import { Scale, Linkedin, Instagram, Facebook } from "lucide-react"

const navigation = {
  areas: [
    { name: "Direito Imobiliário", href: "#areas" },
    { name: "Direito Empresarial", href: "#areas" },
    { name: "Direito Civil", href: "#areas" },
  ],
  escritorio: [
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Nossa Equipe", href: "#equipe" },
    { name: "FAQ", href: "#faq" },
  ],
  contato: [
    { name: "Fale Conosco", href: "#contato" },
    { name: "FAQ", href: "#faq" },
    { name: "Localização", href: "#contato" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-background leading-tight tracking-tight">
                  MECHI NUNES
                </span>
                <span className="text-[10px] text-background/60 tracking-[0.3em] uppercase">
                  Advogados
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-background/70 leading-relaxed max-w-xs">
              Escritório boutique especializado em Direito Empresarial 
              e Imobiliário para grandes operações.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-background">Áreas de Atuação</h3>
            <ul className="mt-4 space-y-3">
              {navigation.areas.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-background">O Escritório</h3>
            <ul className="mt-4 space-y-3">
              {navigation.escritorio.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-background">Contato</h3>
            <ul className="mt-4 space-y-3">
              {navigation.contato.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-background/60 text-center md:text-left">
              &copy; {new Date().getFullYear()} Mechi Nunes Advogados. 
              Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-xs text-background/60 hover:text-background transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-xs text-background/60 hover:text-background transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

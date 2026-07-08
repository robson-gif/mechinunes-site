import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"

const team = [
  {
    name: "Dr. Robson Mechi",
    role: "Sócio Fundador",
    specialty: "Direito Empresarial e Imobiliário",
    oab: "OAB/SP 245.349",
    image: "/images/ricardo-palombini.jpg",
    description:
      "Especialista em Direito Empresarial e Imobiliário. Ampla experiência em assessoria jurídica para empresas e operações imobiliárias de grande porte.",
  },
  {
    name: "Dr. Ricardo Palombini",
    role: "Advogado",
    specialty: "Contencioso Empresarial",
    oab: "OAB/SP",
    image: "/images/robson-mechi.jpg",
    description:
      "Especialista em litígios empresariais de alta complexidade, arbitragem e recuperação de créditos.",
  },
  {
    name: "Dra. Valquiria Palermo",
    role: "Advogada",
    specialty: "Recuperação de Crédito e Trabalhista",
    oab: "OAB/SP",
    image: "/images/valquiria-palermo.jpg",
    description:
      "Especialista na área de recuperação de crédito e direito trabalhista, com atuação em casos complexos.",
  },
  {
    name: "Dra. Anelise Fontes",
    role: "Advogada",
    specialty: "Contratual e Imobiliário",
    oab: "OAB/SP",
    image: "/images/anelise-fontes.jpg",
    description:
      "Atuação em direito empresarial e imobiliário, com experiência em contratos e operações imobiliárias.",
  },
]

export function Team() {
  return (
    <section id="equipe" className="py-20 lg:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Nossa Equipe
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-3 text-balance">
            Especialistas em Direito de Negócios
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Profissionais com formação de excelência e experiência em 
            operações complexas do mercado corporativo e imobiliário.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group bg-background rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden bg-primary/10 flex items-center justify-center">
                {member.image ? (
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={`Foto de ${member.name}`}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-serif text-2xl font-semibold text-primary">
                    {member.name.split(" ").slice(1, 3).map(n => n[0]).join("")}
                  </span>
                )}
              </div>
              
              <div className="text-center">
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-primary text-sm font-medium">{member.role}</p>
                <p className="text-muted-foreground text-xs mt-1">{member.specialty}</p>
                <p className="text-muted-foreground text-xs">{member.oab}</p>
              </div>
              
              <p className="text-muted-foreground text-sm mt-4 text-center leading-relaxed">
                {member.description}
              </p>
              
              <div className="flex items-center justify-center gap-3 mt-4">
                <button
                  type="button"
                  className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  aria-label={`LinkedIn de ${member.name}`}
                >
                  <Linkedin className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  aria-label={`Email de ${member.name}`}
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

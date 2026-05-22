import { Building2, Briefcase, Scale, ArrowRight, Landmark, FileCheck, ShieldCheck } from "lucide-react"
import Link from "next/link"

const areas = [
  {
    icon: Building2,
    title: "Direito Imobiliário",
    description:
      "Assessoria jurídica completa para incorporadoras, fundos imobiliários, construtoras e investidores em operações de grande porte.",
    services: [
      "Incorporações Imobiliárias",
      "Built to Suit e Sale & Leaseback",
      "Fundos de Investimento Imobiliário",
      "Due Diligence Imobiliária",
      "Contratos de Locação Comercial",
      "Loteamentos e Condomínios",
    ],
  },
  {
    icon: Briefcase,
    title: "Direito Empresarial",
    description:
      "Estruturação societária e assessoria jurídica estratégica para empresas, desde startups até grandes corporações.",
    services: [
      "Fusões e Aquisições (M&A)",
      "Reestruturação Societária",
      "Governança Corporativa",
      "Joint Ventures e Parcerias",
      "Contratos Comerciais Complexos",
      "Compliance e LGPD",
    ],
  },
  {
    icon: Scale,
    title: "Direito Civil",
    description:
      "Atuação em questões patrimoniais complexas, planejamento sucessório e contencioso estratégico.",
    services: [
      "Planejamento Sucessório",
      "Holdings Familiares",
      "Contratos Empresariais",
      "Responsabilidade Civil",
      "Arbitragem e Mediação",
      "Execução e Recuperação de Crédito",
    ],
  },
]

export function PracticeAreas() {
  return (
    <section id="areas" className="py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Áreas de Atuação
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-3 text-balance">
            Expertise Jurídica para Grandes Negócios
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Atuação especializada em operações complexas do mercado imobiliário 
            e empresarial, com foco em resultados e segurança jurídica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area) => (
            <div
              key={area.title}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-primary rounded-xl group-hover:bg-primary/90 transition-colors mb-6">
                <area.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {area.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {area.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {area.services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {service}
                  </div>
                ))}
              </div>
              
              <Link
                href="#contato"
                className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
              >
                Consultar especialista
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

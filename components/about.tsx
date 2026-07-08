import Image from "next/image"
import { CheckCircle2, Award, Users, Target } from "lucide-react"

const values = [
  "Expertise em operações imobiliárias de grande porte",
  "Assessoria jurídica para fusões e aquisições",
  "Estruturação societária e governança corporativa",
  "Due diligence completa para investimentos",
  "Contratos complexos e negociações estratégicas",
  "Compliance e gestão de riscos empresariais",
]

const highlights = [
  { icon: Award, label: "Excelência", desc: "atendimento personalizado" },
  { icon: Users, label: "Multidisciplinar", desc: "equipe integrada" },
  { icon: Target, label: "Resultado", desc: "foco em soluções" },
]

export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
              <Image
                src="/images/corporate-meeting.jpg"
                alt="Reunião corporativa em escritório de alto padrão"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Sobre o Escritório
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-3 text-balance">
              Referência em Direito Empresarial e Imobiliário
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                O <strong className="text-foreground">Mechi Nunes Advogados</strong> é um escritório 
                boutique especializado em assessoria jurídica para empresas, incorporadoras, 
                fundos de investimento e investidores do mercado imobiliário.
              </p>
              <p>
                Com atuação focada em operações complexas, oferecemos suporte jurídico 
                completo para transações imobiliárias de grande porte, estruturação de 
                empreendimentos, M&A e governança corporativa.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div key={index} className="text-center p-4 bg-background rounded-xl border border-border">
                  <item.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="font-semibold text-foreground text-sm">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Values Section */}
        <div className="mt-20 bg-background rounded-2xl p-8 lg:p-12 border border-border">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              Nossa Expertise
            </h3>
            <p className="text-muted-foreground mt-2">
              Áreas de atuação que fazem a diferença para o seu negócio
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((value, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground text-sm">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

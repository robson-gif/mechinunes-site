import { ArrowRight, Calendar, User } from "lucide-react"
import Link from "next/link"

const articles = [
  {
    title: "Due Diligence Imobiliária: Checklist Completo para Investidores",
    excerpt:
      "Os 15 pontos críticos que todo investidor deve verificar antes de fechar uma aquisição imobiliária de grande porte.",
    author: "Dra. Carolina Nunes",
    date: "28 Abr 2026",
    category: "Direito Imobiliário",
  },
  {
    title: "Holding Familiar: Estratégias de Proteção Patrimonial",
    excerpt:
      "Como estruturar uma holding familiar para proteger o patrimônio e facilitar a sucessão empresarial.",
    author: "Dr. Rafael Mechi",
    date: "15 Abr 2026",
    category: "Direito Empresarial",
  },
  {
    title: "M&A: Tendências do Mercado Brasileiro em 2026",
    excerpt:
      "Análise das principais tendências em fusões e aquisições e o que esperar para os próximos meses.",
    author: "Dr. Henrique Campos",
    date: "02 Abr 2026",
    category: "Direito Empresarial",
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Insights & Publicações
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-3 text-balance">
              Conhecimento para Decisões Estratégicas
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
              Análises e artigos sobre temas relevantes do direito empresarial 
              e imobiliário para gestores e investidores.
            </p>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all shrink-0"
          >
            Ver todos os artigos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <User className="w-3.5 h-3.5" />
                    {article.author}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </div>
                </div>
                
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm mt-4 hover:gap-3 transition-all"
                >
                  Ler artigo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

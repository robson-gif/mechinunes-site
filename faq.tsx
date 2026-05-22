"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Como funciona a primeira consulta?",
    answer:
      "A primeira consulta é uma reunião onde analisamos seu caso, esclarecemos dúvidas e apresentamos as possíveis estratégias jurídicas. Essa consulta pode ser realizada presencialmente em nosso escritório ou por videoconferência, conforme sua preferência.",
  },
  {
    question: "Quais são os honorários advocatícios?",
    answer:
      "Os honorários variam de acordo com a complexidade do caso e o tipo de serviço. Trabalhamos com diferentes modalidades: honorários fixos, por êxito ou mensalidade. Na primeira consulta, apresentamos uma proposta detalhada e transparente.",
  },
  {
    question: "O escritório atende em outras cidades?",
    answer:
      "Sim, atendemos clientes em todo o território nacional. Para casos que exigem presença física, contamos com uma rede de correspondentes jurídicos. Consultas e acompanhamento podem ser feitos de forma remota.",
  },
  {
    question: "Quanto tempo leva um processo judicial?",
    answer:
      "O tempo de duração varia conforme o tipo de processo, a comarca e a complexidade do caso. Na análise inicial, fornecemos uma estimativa baseada em nossa experiência com casos similares, sempre priorizando soluções eficientes.",
  },
  {
    question: "É possível resolver o caso sem ir à justiça?",
    answer:
      "Sempre que possível, buscamos soluções extrajudiciais como mediação, conciliação ou negociação direta. Essas alternativas costumam ser mais rápidas e menos custosas, preservando também o relacionamento entre as partes.",
  },
  {
    question: "Como acompanho o andamento do meu processo?",
    answer:
      "Mantemos nossos clientes informados através de relatórios periódicos e comunicação direta. Além disso, disponibilizamos acesso a um portal onde você pode consultar o andamento processual a qualquer momento.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 lg:py-28 bg-card">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Perguntas Frequentes
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-3 text-balance">
            Dúvidas Comuns
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Encontre respostas para as perguntas mais frequentes sobre 
            nossos serviços jurídicos.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-background rounded-xl border border-border overflow-hidden"
            >
              <button
                type="button"
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

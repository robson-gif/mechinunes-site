"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, TrendingUp } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-buildings.jpg"
          alt="Prédios corporativos de alto padrão"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
              <TrendingUp className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90">
                Advocacia Estratégica para Negócios
              </span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight text-balance">
              Soluções Jurídicas para{" "}
              <span className="text-accent">Grandes Empreendimentos</span>
            </h1>
            
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed text-pretty max-w-xl">
              Assessoria jurídica especializada em Direito Empresarial e Imobiliário para 
              empresas, incorporadoras e investidores que buscam segurança e resultados.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="#contato"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-accent/90 transition-all hover:translate-y-[-2px] shadow-lg"
              >
                Agende uma Reunião
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#areas"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                Conheça Nossas Áreas
              </Link>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}

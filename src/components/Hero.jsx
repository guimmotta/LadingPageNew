import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setCTAVisible } from '../uiSlice'

export default function Hero() {
  const dispatch = useDispatch()
  const ctaRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => dispatch(setCTAVisible(entry.isIntersecting)),
      { threshold: 0.5 }
    )
    if (ctaRef.current) observer.observe(ctaRef.current)
    return () => observer.disconnect()
  }, [dispatch])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-light">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-gold/8 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, #C1B089 0px, #C1B089 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #C1B089 0px, #C1B089 1px, transparent 1px, transparent 60px)',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left copy */}
        <div className="space-y-7">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-gold/30 bg-gold/10 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse-slow" />
            <span className="font-body text-gold text-xs tracking-widest uppercase">
              De R$197 por R$47 — até março
            </span>
          </div>

          <h1
            className="font-display text-5xl lg:text-6xl text-cream leading-tight"
            style={{ animationDelay: '0.1s' }}
          >
            Transforme seu{' '}
            <span className="text-gold italic">link da BIO</span> em uma{' '}
            <span className="text-gold italic">vitrine estratégica</span>
          </h1>

          <p className="font-body text-cream/60 text-lg leading-relaxed max-w-lg">
            Modelos prontos no Canva que você edita sozinha em minutos. Sem
            programação, sem complicação — com visual de mini site profissional.
          </p>

          <ul className="space-y-3">
            {[
              'Domínio e hospedagem 100% gratuitos no Canva',
              'Templates editáveis prontos para usar agora',
              'Passo a passo em vídeo aulas detalhadas',
              'Funciona para qualquer profissão',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 font-body text-cream/70 text-sm">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#pricing"
              className="group inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-dark font-body font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gold/30"
            >
              Profissionalizar meu Link da BIO
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              {['#8B7355', '#A0875E', '#7A6349', '#9E8560', '#856E4A'].map((c, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-dark flex items-center justify-center text-xs font-bold text-cream"
                  style={{ background: c }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <p className="font-body text-cream/60 text-sm">
              <span className="text-gold font-semibold">+2.000 alunas</span> já transformaram sua BIO
            </p>
          </div>
        </div>

        {/* Right mockup */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="animate-float relative">
            {/* Phone frame */}
            <div className="w-64 bg-light-light rounded-[2.5rem] border-2 border-gold/30 shadow-2xl shadow-black/50 overflow-hidden">
              <div className="h-6 bg-light-mid flex items-center justify-center">
                <div className="w-20 h-1.5 bg-light-light rounded-full" />
              </div>
              <div className="bg-gradient-to-b from-dark-mid to-dark p-4 space-y-3 min-h-96">
                {/* Profile */}
                <div className="flex flex-col items-center py-4 space-y-2">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-gold-dark border-2 border-gold/50" />
                  <p className="font-display text-cream text-sm italic">@seunome</p>
                  <p className="font-body text-cream/50 text-xs text-center leading-tight">
                    Especialista em<br />Marketing Digital
                  </p>
                </div>
                {/* Mock buttons */}
                {['✨ Meu Curso', '📱 Instagram', '💌 Contato', '🛒 Loja'].map((btn) => (
                  <div
                    key={btn}
                    className="w-full bg-light-light border border-gold/20 rounded-xl py-2.5 text-center font-body text-cream/80 text-xs hover:border-gold/50 transition-colors cursor-pointer"
                  >
                    {btn}
                  </div>
                ))}
              </div>
            </div>
            {/* Glow */}
            <div className="absolute -inset-4 bg-gold/5 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}


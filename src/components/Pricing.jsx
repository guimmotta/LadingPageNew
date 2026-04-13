export default function Pricing() {
  return (
    <section id="pricing" className="bg-light py-24">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl text-cream mb-4">
            Investimento <span className="text-gold">Acessível</span>
          </h2>
          <p className="font-body text-cream/60">Transforme seu link da bio agora mesmo</p>
        </div>

        <div className="bg-light-mid border-2 border-gold rounded-2xl p-8 md:p-12 text-center space-y-6">
          <div>
            <div className="text-sm text-cream/60 line-through mb-2">De R$ 197</div>
            <div className="font-display text-6xl text-gold">R$ 47</div>
            <p className="text-cream/60 font-body text-sm mt-2">À vista ou 11x de R$ 5,22</p>
          </div>

          <div className="space-y-3 text-left">
            {[
              'Todos os templates editáveis',
              'Acesso às aulas em vídeo',
              'Suporte por 1 ano',
              'Atualizações incluídas',
              'Garantia 7 dias',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="text-gold">✓</span>
                <span className="font-body text-cream/70">{item}</span>
              </div>
            ))}
          </div>

          <button className="w-full bg-gold hover:bg-gold/90 text-dark font-bold py-4 rounded-full transition font-body text-lg">
            Comprar Agora
          </button>

          <p className="text-cream/50 font-body text-xs">Garantia de satisfação 100% ou seu dinheiro de volta</p>
        </div>
      </div>
    </section>
  )
}

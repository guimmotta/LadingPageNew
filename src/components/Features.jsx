export default function Features() {
  const features = [
    {
      title: 'Editável no Canva',
      description: 'Todos os templates são 100% editáveis usando o Canva gratuito',
      icon: '✏️',
    },
    {
      title: 'Sem Programação',
      description: 'Nenhum conhecimento técnico necessário — drag and drop',
      icon: '🚀',
    },
    {
      title: 'Domínio Grátis',
      description: 'Hospedagem gratuita no Canva, sem custos adicionais',
      icon: '🌐',
    },
    {
      title: 'Vídeo Aulas',
      description: 'Passo a passo detalhado em vídeo para cada template',
      icon: '🎓',
    },
  ]

  return (
    <section id="features" className="bg-dark-mid py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl text-cream mb-4">
            Por que escolher <span className="text-gold">BIO Vitrine</span>?
          </h2>
          <p className="font-body text-cream/60 text-lg">Tudo que você precisa para profissionalizar seu link da bio</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="bg-dark rounded-2xl p-6 border border-gold/10 hover:border-gold/30 transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-display text-xl text-cream mb-2">{feature.title}</h3>
              <p className="font-body text-cream/60 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
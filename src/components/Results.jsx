export default function Results() {
  const results = [
    { metric: '+500', label: 'Clientes Satisfeitos' },
    { metric: '+10k', label: 'Links criados' },
    { metric: '4.9★', label: 'Avaliação média' },
    { metric: '100%', label: 'Satisfação' },
  ]

  return (
    <section id="results" className="bg-dark py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {results.map((item) => (
            <div key={item.label} className="space-y-2">
              <div className="font-display text-5xl text-gold">{item.metric}</div>
              <p className="font-body text-cream/60">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default function Bonus() {
  return (
    <section id="bonus" className="bg-light-mid py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-2 border-gold rounded-2xl p-8 bg-light/50 text-center">
          <div className="inline-block bg-gold/20 text-gold px-4 py-2 rounded-full mb-4 text-sm font-bold">🎁 BÔNUS EXCLUSIVO</div>
          <h2 className="font-display text-4xl text-cream mb-4">
            Ganhe <span className="text-gold">5 Templates Premium</span>
          </h2>
          <p className="font-body text-cream/60 mb-6">
            Ao fazer sua compra, você recebe 5 templates adicionais totalmente editáveis, no estilo mais procurado pelas redes!
          </p>
          <ul className="space-y-2 text-cream/70 font-body text-sm mb-6">
            <li>✓ Template lifestyle minimalista</li>
            <li>✓ Template dark elegante</li>
            <li>✓ Template colorido vibrante</li>
            <li>✓ Template profissional clássico</li>
            <li>✓ Template coach/influencer</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

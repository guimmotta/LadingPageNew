export function Author() {
  return (
    <section className="bg-light-mid py-16">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="mb-6 w-16 h-16 mx-auto rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center">
          <span className="text-3xl">👩‍💼</span>
        </div>
        <h2 className="font-display text-3xl text-cream mb-4">Carol Cantanhêde</h2>
        <p className="font-body text-cream/60 mb-6">
          Designer e especialista em estratégia digital. Ajudando profissionais a transformar seus links da bio em ferramentas poderosas de conversão.
        </p>
        
        <div className="flex gap-4 justify-center">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-light border border-gold/30 hover:border-gold text-cream px-4 py-2 rounded-full font-body text-sm transition"
          >
            📷 Instagram
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-light border border-gold/30 hover:border-gold text-cream px-4 py-2 rounded-full font-body text-sm transition"
          >
            🐙 GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-light border border-gold/30 hover:border-gold text-cream px-4 py-2 rounded-full font-body text-sm transition"
          >
            💼 LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-light border-t border-gold/10 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-gold mb-4">BIO Vitrine</h3>
            <p className="font-body text-cream/60 text-sm">
              Transformando links da bio em vitrines estratégicas
            </p>
          </div>
          
          <div>
            <h4 className="font-body font-bold text-cream mb-3">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-cream/60 hover:text-gold transition">Features</a></li>
              <li><a href="#faq" className="text-cream/60 hover:text-gold transition">FAQ</a></li>
              <li><a href="#pricing" className="text-cream/60 hover:text-gold transition">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-body font-bold text-cream mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-cream/60 hover:text-gold transition">Privacidade</a></li>
              <li><a href="#" className="text-cream/60 hover:text-gold transition">Termos de Uso</a></li>
              <li><a href="#" className="text-cream/60 hover:text-gold transition">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-8 text-center">
          <p className="font-body text-cream/50 text-sm">
            © 2026 BIO Vitrine. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

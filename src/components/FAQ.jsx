import { useDispatch, useSelector } from 'react-redux'
import { toggleAccordion } from '../uiSlice'

const faqs = [
  {
    id: 'faq-0',
    q: 'A BIO Vitrine serve para a minha profissão?',
    a: 'Sim! Funciona para todas as profissões que usam o Instagram para promover seu trabalho — coaches, terapeutas, fotógrafos, designers, nutricionistas, consultores e muito mais.',
  },
  {
    id: 'faq-1',
    q: 'Preciso ter um domínio próprio (.com) para usar?',
    a: 'Não! É totalmente opcional. Você pode usar os modelos do BIO Vitrine normalmente sem gastar nada a mais usando o Canva gratuito. Se quiser conectar seu próprio domínio, ensinamos como fazer isso (requer Canva PRO ou compra de domínio dentro do Canva).',
  },
  {
    id: 'faq-2',
    q: 'Isso é um serviço ou eu mesma edito?',
    a: 'Você mesma edita! Na BIO Vitrine você recebe modelos prontos e 100% editáveis no Canva gratuito. Tudo foi pensado para que você consiga criar sozinha, mesmo sem experiência em design.',
  },
  {
    id: 'faq-3',
    q: 'Com quanto tempo recebo acesso após a compra?',
    a: 'Você receberá o acesso no seu e-mail logo após a confirmação do pagamento. Pagamentos via Pix são confirmados em minutos!',
  },
  {
    id: 'faq-4',
    q: 'Qual a duração do acesso?',
    a: 'Os arquivos são seus para sempre! Já a área de membros com as vídeo aulas fica disponível por 1 ano a partir da data da compra.',
  },
  {
    id: 'faq-5',
    q: 'Como posso tirar dúvidas?',
    a: 'Na área de membros cada aula tem um espaço para deixar suas dúvidas. Carol Cantanhêde pessoalmente responde todos os comentários.',
  },
  {
    id: 'faq-6',
    q: 'Qual o investimento?',
    a: 'O investimento é de R$47 à vista ou 11x de R$5,22 no cartão. Você também conta com garantia de 7 dias.',
  },
]

export default function FAQ() {
  const dispatch = useDispatch()
  const openId = useSelector((s) => s.ui.accordion.openId)

  return (
    <section id="faq" className="bg-light-mid py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <span className="font-body text-gold text-xs tracking-widest uppercase">FAQ</span>
          <h2 className="font-display text-4xl lg:text-5xl text-cream">
            Perguntas <span className="text-gold italic">frequentes</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-gold/40 bg-light shadow-lg shadow-gold/5' : 'border-gold/10 bg-light/50'
                }`}
              >
                <button
                  onClick={() => dispatch(toggleAccordion(faq.id))}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-body font-medium text-sm transition-colors ${
                      isOpen ? 'text-gold' : 'text-cream/80 group-hover:text-cream'
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'bg-gold border-gold text-dark rotate-45'
                        : 'border-gold/30 text-gold/60 group-hover:border-gold/60'
                    }`}
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="font-body text-cream/60 text-sm leading-relaxed px-6 pb-5">{faq.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


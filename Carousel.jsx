import { useDispatch, useSelector } from 'react-redux'
import { nextSlide, prevSlide, setSlide } from '../store/uiSlice'

const testimonials = [
  { name: 'Ana Lima', role: 'Coach de vida', text: 'Minha BIO virou um mini site lindo em menos de 10 minutos! Os clientes ficam impressionados com o profissionalismo.', initial: 'A' },
  { name: 'Camila Reis', role: 'Nutricionista', text: 'Finalmente tenho um link da bio que transmite autoridade. Já recebi vários elogios de clientes novos!', initial: 'C' },
  { name: 'Fernanda Costa', role: 'Fotógrafa', text: 'Nem sabia nada de design e consegui fazer sozinha. A aula passo a passo é incrível.', initial: 'F' },
  { name: 'Juliana Matos', role: 'Consultora de imagem', text: 'Vale muito! Minha conversão no Instagram melhorou depois que troquei o link da bio.', initial: 'J' },
  { name: 'Patrícia Alves', role: 'Terapeuta', text: 'Simples, rápido e profissional. Exatamente o que eu precisava para o meu negócio.', initial: 'P' },
  { name: 'Renata Souza', role: 'Designer freelancer', text: 'Uso como inspiração para mostrar pra meus clientes o que é possível fazer no Canva. Incrível!', initial: 'R' },
]

export default function Carousel({ carouselId = 'testimonials' }) {
  const dispatch = useDispatch()
  const { activeIndex, total } = useSelector((s) => s.ui.carousel[carouselId])

  const items = testimonials
  const visible = [
    items[(activeIndex - 1 + total) % total],
    items[activeIndex],
    items[(activeIndex + 1) % total],
  ]

  return (
    <div className="relative">
      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-5 overflow-hidden">
        {visible.map((item, i) => (
          <div
            key={`${activeIndex}-${i}`}
            className={`bg-dark border rounded-2xl p-6 space-y-4 transition-all duration-500 ${
              i === 1
                ? 'border-gold/40 shadow-xl shadow-gold/10 scale-105'
                : 'border-gold/10 opacity-60 scale-95 hidden md:block'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-dark font-bold text-sm flex-shrink-0"
                style={{ background: '#C1B089' }}
              >
                {item.initial}
              </div>
              <div>
                <p className="font-body text-cream text-sm font-semibold">{item.name}</p>
                <p className="font-body text-cream/40 text-xs">{item.role}</p>
              </div>
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, s) => (
                <span key={s} className="text-gold text-sm">★</span>
              ))}
            </div>
            <p className="font-body text-cream/70 text-sm leading-relaxed italic">"{item.text}"</p>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={() => dispatch(prevSlide({ carouselId }))}
          className="w-10 h-10 rounded-full border border-gold/30 hover:border-gold hover:bg-gold/10 text-gold transition-all flex items-center justify-center"
          aria-label="Anterior"
        >
          ←
        </button>
        <div className="flex gap-2">
          {[...Array(total)].map((_, i) => (
            <button
              key={i}
              onClick={() => dispatch(setSlide({ carouselId, index: i }))}
              className={`rounded-full transition-all ${
                i === activeIndex ? 'bg-gold w-6 h-2' : 'bg-gold/30 w-2 h-2'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => dispatch(nextSlide({ carouselId }))}
          className="w-10 h-10 rounded-full border border-gold/30 hover:border-gold hover:bg-gold/10 text-gold transition-all flex items-center justify-center"
          aria-label="Próximo"
        >
          →
        </button>
      </div>
    </div>
  )
}

import { CheckCircle2, Leaf, ShieldCheck, ThumbsUp } from 'lucide-react'

const bullets = [
  { icon: <Leaf />, title: 'Fresh & Local', text: 'We source locally and change our menu seasonally.' },
  { icon: <ShieldCheck />, title: 'Hygiene First', text: 'Strict protocols ensure a spotless kitchen.' },
  { icon: <ThumbsUp />, title: 'Chef-Crafted', text: 'Signature recipes perfected over years.' },
]

export default function WhyChooseUs() {
  return (
    <section className="space-y-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Why Choose Us?</h1>
        <p className="text-white/70 mt-2">Three reasons guests keep coming back.</p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {bullets.map((b, i) => (
          <div key={i} className="card p-6">
            <div className="h-12 w-12 rounded-2xl bg-brand-500/20 flex items-center justify-center mb-3">{b.icon}</div>
            <h3 className="text-lg font-semibold">{b.title}</h3>
            <p className="text-white/70 mt-1">{b.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

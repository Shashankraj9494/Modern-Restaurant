import { Instagram, Facebook, Twitter } from 'lucide-react'

const posts = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
}))

export default function FollowUs() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Follow Us</h1>
        <p className="text-white/70 mt-1">Catch daily specials, BTS, and giveaways.</p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map(p => (
          <div key={p.id} className="card aspect-square flex items-center justify-center text-white/40">
            #{p.id + 1}
          </div>
        ))}
      </div>
      <div className="flex gap-3">
        <a href="#" className="btn-ghost"><Instagram /> Instagram</a>
        <a href="#" className="btn-ghost"><Twitter /> Twitter</a>
        <a href="#" className="btn-ghost"><Facebook /> Facebook</a>
      </div>
    </section>
  )
}

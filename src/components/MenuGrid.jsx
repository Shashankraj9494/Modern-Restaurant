export default function MenuGrid({ items = [] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((m) => (
        <div key={m.id} className="card overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-brand-600/40 to-brand-400/30" />
          <div className="p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{m.name}</h3>
              <span className="text-brand-300 font-medium">₹{m.price}</span>
            </div>
            <p className="text-white/70 mt-1">{m.desc}</p>
            <button className="btn-primary mt-4 w-full">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  )
}

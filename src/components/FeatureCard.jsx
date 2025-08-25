export default function FeatureCard({ icon, title, text }) {
  return (
    <div className="card p-6">
      <div className="h-12 w-12 rounded-2xl bg-brand-500/20 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-white/70 mt-1">{text}</p>
    </div>
  )
}

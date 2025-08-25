import { motion } from 'framer-motion'
import { Clock, CreditCard, Truck, Sparkles } from 'lucide-react'
import FeatureCard from '../components/FeatureCard.jsx'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-500/10 via-slate-900/0 to-slate-950/0 pointer-events-none" />
        <div className="card relative overflow-hidden">
          <div className="p-10 md:p-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Fresh • Fast • Flavorful
              </motion.h1>
              <p className="text-white/70 mt-4 max-w-prose">
                Welcome to <span className="text-brand-300 font-semibold">TasteBuds</span>, where every dish is crafted from scratch.
                Pull up a chair or order from the comfort of your couch.
              </p>
              <div className="mt-6 flex gap-3">
                <Link to="/menu" className="btn-primary">Explore Menu</Link>
                <Link to="/why-choose-us" className="btn-ghost">Why Choose Us?</Link>
              </div>
              <p className="text-white/60 text-sm mt-3 flex items-center gap-2"><Sparkles className="h-4 w-4" /> Open today • 11:00–23:00</p>
            </div>
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
              <div className="aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 shadow-soft" />
              <div className="absolute -bottom-6 -right-6 bg-brand-500 text-slate-950 px-4 py-2 rounded-2xl font-semibold shadow-soft">
                20% OFF first order
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-4">
        <FeatureCard icon={<Clock />} title="Quick Service" text="Piping hot dishes in minutes." />
        <FeatureCard icon={<Truck />} title="Fast Delivery" text="Partnered with top couriers." />
        <FeatureCard icon={<CreditCard />} title="Easy Payments" text="UPI, cards, and wallets." />
        <FeatureCard icon={<Sparkles />} title="Premium Quality" text="Fresh ingredients, daily." />
      </section>
    </div>
  )
}

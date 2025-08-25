import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-px py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-semibold">TasteBuds</h3>
          <p className="text-white/70 mt-2">Modern flavors crafted with love. Dine in, take away, or order online.</p>
        </div>
        <div>
          <h4 className="font-medium">Quick Links</h4>
          <ul className="mt-2 space-y-2 text-white/70">
            <li><Link to="/why-choose-us" className="hover:text-white">Why Choose Us?</Link></li>
            <li><Link to="/menu" className="hover:text-white">Explore Menu</Link></li>
            <li><Link to="/delivery-payment" className="hover:text-white">Delivery & Payment</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Follow Us</h4>
          <div className="flex gap-4 mt-3">
            <a href="#" aria-label="Instagram"><Instagram /></a>
            <a href="#" aria-label="Twitter"><Twitter /></a>
            <a href="#" aria-label="Facebook"><Facebook /></a>
          </div>
          <p className="text-white/60 mt-4 text-sm">© {new Date().getFullYear()} TasteBuds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

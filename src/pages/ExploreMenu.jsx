import MenuGrid from '../components/MenuGrid.jsx'

const MENU = [
  { id: 1, name: 'Margherita Pizza', price: 299, desc: 'Roma tomatoes, basil, buffalo mozzarella.' },
  { id: 2, name: 'Paneer Tikka Wrap', price: 199, desc: 'Smoky paneer, onions, mint chutney.' },
  { id: 3, name: 'Chicken Biryani', price: 349, desc: 'Hyderabadi style, aromatic basmati.' },
  { id: 4, name: 'Hakka Noodles', price: 229, desc: 'Wok-tossed veggies, soy & garlic.' },
  { id: 5, name: 'Caesar Salad', price: 189, desc: 'Crisp lettuce, parmesan, creamy dressing.' },
  { id: 6, name: 'Brownie Sundae', price: 159, desc: 'Warm brownie, vanilla ice-cream.' },
]

export default function ExploreMenu() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Explore Menu</h1>
        <p className="text-white/70 mt-1">Handpicked favorites — more items coming soon.</p>
      </header>
      <MenuGrid items={MENU} />
    </section>
  )
}

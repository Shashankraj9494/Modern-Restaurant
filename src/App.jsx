import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import WhyChooseUs from './pages/WhyChooseUs.jsx'
import ExploreMenu from './pages/ExploreMenu.jsx'
import DeliveryAndPayment from './pages/DeliveryAndPayment.jsx'
import FollowUs from './pages/FollowUs.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <Navbar />
      <main className="container-px pt-24 pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/menu" element={<ExploreMenu />} />
          <Route path="/delivery-payment" element={<DeliveryAndPayment />} />
          <Route path="/follow-us" element={<FollowUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

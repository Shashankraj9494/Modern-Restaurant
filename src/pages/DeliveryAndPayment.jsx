import { Bike, CreditCard, SmartphoneNfc, Wallet } from 'lucide-react'

export default function DeliveryAndPayment() {
  return (
    <section className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Delivery & Payment</h1>
        <p className="text-white/70 mt-1">Seamless ordering, transparent pricing.</p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2"><Bike /> Delivery Options</h2>
          <ul className="space-y-2 text-white/80 list-disc pl-5">
            <li>Standard (45–60 mins) — ₹29</li>
            <li>Express (25–35 mins) — ₹59</li>
            <li>Free pickup from store</li>
          </ul>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2"><CreditCard /> Payment Methods</h2>
          <ul className="space-y-2 text-white/80 list-disc pl-5">
            <li>UPI (GPay, PhonePe, Paytm)</li>
            <li>Debit/Credit Cards (Visa, MasterCard, Rupay)</li>
            <li>Wallets & COD (limits apply)</li>
          </ul>
        </div>
      </div>
      <div className="card p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <SmartphoneNfc />
          <div>
            <h3 className="font-semibold">Save 10% with UPI</h3>
            <p className="text-white/70 text-sm">Auto-applied on eligible orders above ₹399.</p>
          </div>
        </div>
        <button className="btn-primary">Order Now</button>
      </div>
    </section>
  )
}

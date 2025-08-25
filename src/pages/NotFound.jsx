import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-extrabold">404</h1>
      <p className="text-white/70 mt-2">The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="btn-primary mt-6 inline-block">Back Home</Link>
    </div>
  )
}

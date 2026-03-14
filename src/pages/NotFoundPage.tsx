import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="page-stack">
      <h1>404</h1>
      <p>This page does not exist.</p>
      <Link to="/">Go home</Link>
    </section>
  )
}
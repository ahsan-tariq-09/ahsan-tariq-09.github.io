import { Link } from 'react-router-dom'
import { siteData } from '../data/siteData'

export default function BlogPage() {
  return (
    <div className="page-stack">
      <section>
        <p className="eyebrow">Blog</p>
        <h1>Writing</h1>
        <p className="section-text">
          Short posts about what I’m learning, building, and figuring out.
        </p>
      </section>

      <section className="grid two">
        {siteData.blogPosts.map((post) => (
          <article className="card" key={post.slug}>
            <p className="post-date">{post.date}</p>
            <h2>{post.title}</h2>
            <p>{post.summary}</p>

            <div className="tag-list">
              {post.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <Link to={`/blog/${post.slug}`} className="inline-link">
              Read post →
            </Link>
          </article>
        ))}
      </section>
    </div>
  )
}
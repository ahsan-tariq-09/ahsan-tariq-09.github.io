import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { siteData } from '../data/siteData'

export default function BlogPostPage() {
  const { slug } = useParams()
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const post = siteData.blogPosts.find((item) => item.slug === slug)

  useEffect(() => {
    async function loadPost() {
      if (!slug) return

      try {
        setLoading(true)
        setError('')
        const response = await fetch(`${import.meta.env.BASE_URL}posts/${slug}.md`)

        if (!response.ok) {
          throw new Error('Post not found')
        }

        const text = await response.text()
        setContent(text)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load post')
      } finally {
        setLoading(false)
      }
    }

    loadPost()
  }, [slug])

  if (!post) {
    return (
      <section className="page-stack">
        <h1>Post not found</h1>
        <Link to="/blog">Back to blog</Link>
      </section>
    )
  }

  return (
    <div className="page-stack">
      <article className="blog-post">
        <Link to="/blog" className="inline-link">
          ← Back to blog
        </Link>

        <p className="post-date">{post.date}</p>
        <h1>{post.title}</h1>
        <p className="section-text">{post.summary}</p>

        {loading && <p>Loading post...</p>}
        {error && <p>{error}</p>}

        {!loading && !error && (
          <div className="markdown-body">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        )}
      </article>
    </div>
  )
}
import { Link, routes } from '@redwoodjs/router'
import CommentForm from 'src/components/CommentForm'
import CommentsCell from 'src/components/CommentsCell'


import type { Post } from 'types/graphql'

const truncate = (text: string, length: number) => {
  return text?.length > length ? text.substring(0, length) + '...' : text
}

interface Props {
  article: Omit<Post, 'createdAt'>
  summary?: boolean
}

const Article = ({ article, summary = false }: Props) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div className="mt-2 text-gray-900 font-light">
        {summary ? truncate(article.body, 100) : article.body}
      </div>
      {!summary && (
        <div className="mt-12">
          <CommentForm postId={article.id}/>
          <div className="mt-12">
            <CommentsCell postId={article.id}/>
          </div>
        </div>

      )}
    </article>
  )
}

export default Article
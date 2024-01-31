import { getBlogBySlug, getAllBlogSlug } from "../fetchers"

export async function generateStaticParams() {
  return getAllBlogSlug()
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string }
}) {
  const blog = await getBlogBySlug(params.slug)
  return (
    <main className="prose">
      <article>{blog.content}</article>
    </main>
  )
}

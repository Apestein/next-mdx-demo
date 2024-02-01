import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl">Static Blog Demo</h1>
      <Link href={"blogs"} className="text-blue-500 text-xl underline">
        Blogs - next-mdx-remote library example
      </Link>
      <Link href={"next-mdx"} className="text-blue-500 text-xl underline">
        next-mdx library example
      </Link>
    </main>
  )
}

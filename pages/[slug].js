import Link from 'next/link'

export default function Posts({ post }) {
  return (
    <>
      <Link href='/'>
        <a>Go Home</a>
      </Link>
      <div>{post.Title}</div>
      <div>{post.Content}</div>
    </>
  )
}

// memberstack for payment

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:1337/posts`)
  const posts = await res.json()

  const paths = posts?.map((post) => ({
    params: { slug: post.Slug }
  }))

  console.log(paths)

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params

  const res = await fetch(`http://localhost:1337/posts?Slug=${slug}`)
  const data = await res.json()
  const post = data[0]

  return {
    props: { post }
  }
}

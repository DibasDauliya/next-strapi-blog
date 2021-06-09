import Link from 'next/link'

export default function Home({ posts }) {
  console.log(posts)

  const animals = {
    dog: { name: 'fa' },
    feline: { name: 'fa' }
  }

  console.log(animals.fewline?.naame)

  return (
    <div>
      {posts?.map(({ id, Title, user, Slug }) => (
        <Link href={`/${Slug}`} key={id}>
          <a>
            <h3>{Title}</h3>
            <small>{user.username}</small>
          </a>
        </Link>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  console.log("I'm server yoo")

  const res = await fetch(`http://localhost:1337/posts`)
  const posts = await res.json()

  return {
    props: { posts }
  }
}

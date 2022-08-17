import Link from 'next/link'

function Header() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>Search</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/hello-world">
          <a>ChatBot</a>
        </Link>
      </li>
    </ul>
  )
}

export default Header
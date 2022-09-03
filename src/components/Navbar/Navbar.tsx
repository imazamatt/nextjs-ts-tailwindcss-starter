import Link from 'next/link'

function Navbar() {
  return (
    <nav className={'navbar'}>
      <ul className={'navbar__list'}>
        <li className={'navbar__item'}>
          <Link href={'/'}>
            <a className={'navbar__link'}>Home</a>
          </Link>
        </li>
        <li className={'navbar__item'}>
          <Link href={'/about'}>
            <a className={'navbar__link'}>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
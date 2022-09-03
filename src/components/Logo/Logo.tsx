import Link from 'next/link'
import Image from 'next/image'

function Logo() {
  return (
    <div className={'logo'}>
      <Link href={'/'}>
        <a className={'logo__link'}>
          <Image className={'logo__image'} src={'/vercel.svg'} width={150} height={41} alt={'Logo'} />
        </a>
      </Link>
    </div>
  )
}

export default Logo
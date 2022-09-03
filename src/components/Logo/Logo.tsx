import Link from 'next/link'
import Image from 'next/image'

import LogoSvg from '/public/vercel.svg'

interface ILocalImageLoader {
  src: string
}

function LocalImageLoader({src}: ILocalImageLoader) {
  const fileName = src.split('/').pop()
  return `./_next/static/media/${fileName}`
}

function Logo() {
  return (
    <div className={'logo'}>
      <Link href={'/'}>
        <a className={'logo__link'}>
          <Image
            className={'logo__img'}
            src={LogoSvg}
            width={141}
            height={32}
            alt={'Logo'}
            loader={LocalImageLoader}
          />
        </a>
      </Link>
    </div>
  )
}

export default Logo
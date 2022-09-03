import Navbar from '@/components/Navbar/Navbar'
import Logo from '@/components/Logo/Logo'

export const Header = () => {
  return (
    <header className={'header'}>
      <div className={'container'}>
        <div className={'header__content'}>
          <Logo />

          <Navbar />
        </div>
      </div>
    </header>
  )
}

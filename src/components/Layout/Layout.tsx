import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'

const Layout = ({ children}: any) => {
  return (
    <>
      <div className={'layout'}>
        <Header />
        <main className={'main'}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout

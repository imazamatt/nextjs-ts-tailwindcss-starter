import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import { Main } from '@/components/Main/Main'
import Head from 'next/head'

export const Layout = ({ children, title }: any) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className={'layout'}>
        <Header />
        <Main children={children} />
        <Footer />
      </div>
    </>
  )
}

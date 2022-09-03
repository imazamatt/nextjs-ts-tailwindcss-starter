import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content="" />
        <title>Home</title>
      </Head>

      <section className={'home'}>
        <div className={'container'}>
          <div className={'home__content'}>HOME</div>
        </div>
      </section>
    </>
  )
}

export default Home

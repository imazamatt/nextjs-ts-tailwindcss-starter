import type { NextPage } from 'next'
import { Layout } from '@/components/Layout/Layout'

const Home: NextPage = () => {
  return (
    <Layout title={'Home Page'}>
      <section className={'home'}>
        <div className={'container'}>
          <div className={'home__content'}>
            HOME
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home

import Layout from '../components/Layout'
import '../styles/globals.css'
import Head from 'next/head'
export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Harizaldy Blog</title>     
        <script src="https://kit.fontawesome.com/805c97d626.js" crossorigin="anonymous"></script>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

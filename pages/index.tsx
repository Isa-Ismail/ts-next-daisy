import Layout from '../components/shared/Layout'
import Home from '../components/page components/Home'

export default function index({data}: any) {
  return (
    <Layout title='Ts next Daisy 👌🤖❤️❤️❤️'>
      <Home />
    </Layout>
  )
}

export async function getStaticProps(context: any) {
  return {
    props: {
      data: 'hello'
    }, // will be passed to the page component as props
  }
}

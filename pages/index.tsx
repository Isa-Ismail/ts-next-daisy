import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout from '../components/shared/Layout'
import Home from '../components/page components/Home'

const inter = Inter({ subsets: ['latin'] })

export default function index() {
  return (
    <Layout title='Ts next Daisy 👌🤖'>
      <Home />
    </Layout>
  )
}

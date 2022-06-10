import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { MainLayout } from '../components/MainLayout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <MainLayout title="Home page" keywords="Home page, example next app, Zhark10">
      Home page
    </MainLayout>
  )
}

export default Home

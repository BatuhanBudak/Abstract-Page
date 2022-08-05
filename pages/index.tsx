import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Help from '../components/Help';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Help />
      <Services />
      <Footer />
    </>
  )
}

export default Home

import Head from 'next/head'
import { Button } from '../components/button/button'

import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'
import Swipe from '../components/swiper/swiper'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.main className={styles.main} initial={{ x:'-100vw'}} animate={{ x:0 }} transition={{type: 'spring', duration: 1, bounce: 0.3, staggerChildren:0.3}}>
        <img src='/retrato1.jpeg' className='w-80 h-80 rounded-full'/>
        <h1 className={styles.title}>
          Víctor Ignacio Cárdenas Bahamonde
        </h1>
        {/* <Button/> */}
        <p className={styles.description}>
          Web Developer, MsC Marketing, Ingeniero Comercial
        </p>

        

        <div className={styles.grid}>
          <a href="https://crypton.cl" className={styles.card}>
            <h2>Ecommerce</h2>
            <p>Plataforma ecommerce con medio de pago nacional</p>
          </a>
        
          <a href="https://encalbuco.cl" className={styles.card}>
            <h2>Hub de Negocios</h2>
            <p>Red de negocios y servicios en la comuna de Calbuco</p>
          </a>

          <a
            href="https://github.com/vicarb"
            className={styles.card}
          >
            <h2>Github</h2>
            <p>Perfil de Github y repositorios actualmente mantenidos</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        
        </div>
      </motion.main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by me
         
        </a>
      </footer>
        <div className='m-12'>
        <Swipe/>
        </div>
    </div>
  )
}


import Image from 'next/image'
import Link from 'next/link'
import hero from '../public/bg.jpg'
import {Animals} from '../components/Animals'
import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className='mainPage'>
      <Navbar/>
      <Animals />
      <p className={styles.footer}>Made with ☕️ by Henok 2022 ©</p>
    </div>
  )
}
export default Home
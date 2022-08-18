import Image from 'next/image'
import Link from 'next/link'
import hero from '../public/bg.jpg'
import {Animals} from '../components/Animals'
import styles from '../styles/Home.module.css'
export const Navbar = () => {
  return (
    <div className={styles.container}>
    <h1>Wonder🌍</h1>
    <Image
        src={hero}
        alt="A random picture of a forest"
        
    />
    <button className={styles.btn}>Telegram</button>
    {/* <h1  className={styles.h12}>Wonder</h1> */}
    <div class={styles.typewriter}>
        <h1>Wonder</h1>
    </div>
    </div>


      
  );
};
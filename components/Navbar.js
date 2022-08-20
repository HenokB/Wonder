import Image from 'next/image'
import Link from 'next/link'
import hero from '../public/bg.jpg'
import {Animals} from '../components/Animals'
import styles from '../styles/Home.module.css'
export const Navbar = () => {
  return (
    <div className={styles.container}>
    <h1>Wonder🌍</h1>
    <div className={styles.navbar}>
        <Link href="/">
            <a>Login</a>
        </Link>
        <Link href="/">
            <a>Sign Up</a>
        </Link>
    </div>
    <Image
        src={hero}
        alt="A random picture of a forest"
        
    />
    <button className={styles.btn}>Bot</button>
    {/* <h1  className={styles.h12}>Wonder</h1> */}
    <div className={styles.typewriter}>
        <p>Wonder🌍</p>
    </div>
    <script src="https://apps.elfsight.com/p/platform.js" defer></script>
    <div className="elfsight-app-e39c2aa2-55e6-4278-ab01-33160169e4bc"></div>
    </div>


      
  );
};
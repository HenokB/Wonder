import styles from '../styles/Home.module.css'
import Image from 'next/image'
import animal from '../public/bg.jpg'


export function Animals(){
    return(
        <div className={styles.animalPage}>
            <h1>Animal Page</h1>
            <p className={styles.p}>
            A Simple Typing Effect with Blinking Cursor. This is a simple yet beautiful 
            typewriter effect created using CSSA Simple Typing Effect with Blinking Cursor. 
            This is a simple yet beautiful typewriter effect created using CSS
            </p>
            <Image
                src={animal}
                alt="a picture of animals" 
                width={450}
                height={250}
            
            />
        </div>
        
    )
}
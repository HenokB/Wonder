import styles from '../styles/Home.module.css'
import Image from 'next/image'
import animal from '../public/animal.jpg'


export function Animals(){
    return(
        <div className={styles.animalPage}>
            {/* <h1>Animal Page</h1> */}
            <p className={styles.p}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum            </p>
            <Image
                src={animal}
                alt="a picture of animals" 
                width={450}
                height={250}
            
            />
        </div>
        
    )
}
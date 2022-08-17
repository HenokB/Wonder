import Image from 'next/image'
import Link from 'next/link'
import hero from '../public/bg.jpg'

const Home = () => {
  return (
    <div className='mainPage'>
      <h1>Homepage</h1>
      <div className='background'>
      <div className='btn1'>
        <button>Link</button>
      </div>
      <Image
        src={hero}
        alt="Picture of the author"
        
      />
      </div>
      <p>This is the homepage!</p>
    </div>
  )
}
export default Home
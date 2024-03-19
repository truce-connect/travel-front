import bab2 from '../assets/bab2.jpg'
import babora from '../assets/babora.jpg'
import getaway from '../assets/get-away.avif'
import maldives from '../assets/maldives.jpeg'
import overwater from  '../assets/overwater-beach.jpg'


const Destination = () => {
  return (
    <div className='max-w[1240px] mx-auto py16 px-4 text-center'>
           <h1> All inclusive RESORT</h1>
           <p>world best beaches</p>
            <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:4'>
                <img className=' w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={babora} alt="/" />
                <img className=' w-full h-full object-cover' src={bab2} alt="/" />
                <img className=' w-full h-full object-cover' src={getaway} alt="/" />
                <img className=' w-full h-full object-cover'src={maldives} alt="/" />
                <img className=' w-full h-full object-cover' src={overwater} alt="/" />

            </div>
    </div>
  )
}

export default Destination
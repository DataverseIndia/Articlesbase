import { Badge } from '@/components/Badge'
import { Search } from 'lucide-react'
import { FC } from 'react'

const Hero: FC = () => {
  return (
   <div className='flex justify-center flex-col items-center'>
      <div className='relative w-screen overflow-hidden'>
         <div className='gradient-panel'></div>
         <img src='/images/hero.png' alt='' className='w-screen flex justify-start object-cover ml-60 -mt-60 -z-10'/>
      </div>
      <div className='absolute flex flex-col justify-center items-center z-20'>
         <Badge text='We are launching soon'/>
         <h1 className='text-[110px] text-center font-polysans-median leading-none text-neutral-950 tracking-tighter'>Welcome to Articles Base</h1>
         <p className='font-polysans-slim text-pretty text-2xl text-center mt-5 font-satoshi-regular'>The most authentic learning place to read informative, fact-checked articles for free.</p>
         <div className='flex flex-col gap-3 mt-20'>
            <p className='font-polysans-slim search-text text-lg text-center'>What do you want to read about today?</p>
            <div className='flex mx-auto'>
               <input className='bg-white/50 py-3 rounded-md outline-none font-polysans-slim w-[30vw] px-5 mr-3 placeholder:text-[#403A3E]/80' placeholder='I want to learn about...'/>
               <Search className='my-auto w-7 h-7 text-[#403A3E]'/>
            </div>
         </div>
      </div>
   </div>
  )
}

export default Hero

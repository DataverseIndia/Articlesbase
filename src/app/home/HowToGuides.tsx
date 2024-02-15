import ShimmerButton from '@/components/ShimmerButton'
import { FC } from 'react'

const HowToGuides: FC = () => {
  return (
   <div className='w-[90%] mx-auto mt-10'>
      <div className='flex justify-between'>
         <h1 className='font-polysans-median text-2xl my-auto'>How To Guides</h1>
         <ShimmerButton text='View All'/>
      </div>
      <div className='grid lg:grid-cols-3 mt-7 gap-7'>
         {Array.from({length: 6 }).map((_, index) => (
            <div key={index} className='border-2 hover:border-4 border-lime-700 hover:border-lime-900 animation rounded-[2rem] flex flex-col gap-3 p-3 hover:scale-[1.03]'>
               <img src='/images/howtoguides.jpg' alt='' className='rounded-[2rem]'/>
               <div>
                  <p className='text-xl font-polysans-median'>Lorem ipsum dolor sit amet.</p>
                  <p className='text-sm font-outfit'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, facere!</p>
               </div>
            </div>
         ))}
      </div>
   </div>
  )
}

export default HowToGuides

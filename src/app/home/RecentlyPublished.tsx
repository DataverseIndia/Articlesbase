import ShimmerButton from '@/components/ShimmerButton'
import { FC } from 'react'

const RecentlyPublished: FC = () => {
  return (
   <div className='w-[90%] mx-auto mt-16'>
      <div className='flex justify-between'>
         <h1 className='font-polysans-median text-2xl my-auto'>Recently Published</h1>
         <ShimmerButton text='View All'/>
      </div>
      <div className='grid lg:grid-cols-2 mt-10 gap-7'>
         <div className='grid grid-cols-2 gap-7'>
            {Array.from({length: 4 }).map((_, index) => (
               <div key={index} className='border-2 hover:border-4 border-lime-700 hover:border-lime-900 animation rounded-[2rem] hover:scale-[1.04] flex flex-col gap-3 p-3'>
                  <img src='/images/RecentlyPublished.jpg' alt='' className='rounded-[2rem]'/>
                  <div>
                     <p className='text-xl font-polysans-median'>Lorem ipsum dolor sit amet.</p>
                     <p className='text-sm font-outfit'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, facere!</p>
                  </div>
               </div>
            ))}
         </div>
         <div className='border-2 hover:border-4 border-lime-700 hover:border-lime-900 animation rounded-[2rem] hover:scale-[1.04] flex flex-col gap-5 p-3 h-full animation'>
            <img src='/images/RecentlyPublished.jpg' alt='' className='rounded-[2rem]'/>
            <div className='mt-auto'>
               <p className='text-xl font-polysans-median'>Lorem ipsum dolor sit amet.</p>
               <p className='text-sm font-outfit'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, facere!</p>
            </div>
         </div>
      </div>
   </div>
  )
}

export default RecentlyPublished

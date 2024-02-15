import ShimmerButton from '@/components/ShimmerButton'
import { FC } from 'react'

const FactChecked: FC = () => {
  return (
      <div className='w-[90%] mx-auto mt-10'>
         <div className='flex justify-between'>
            <h1 className='font-polysans-median text-2xl my-auto'>Fact Checked</h1>
            <ShimmerButton text='View All'/>
         </div>
         <div className='grid lg:grid-cols-5 mt-7 gap-3'>
            {Array.from({length: 10 }).map((_, index) => (
               <div key={index} className='border-2 hover:border-4 border-lime-700 hover:border-lime-900 hover:scale-[1.02] animation rounded-[2rem] flex flex-col gap-3 p-3'>
                  <img src='/images/factchecked.jpg' alt='' className='rounded-[2rem]'/>
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
export default FactChecked

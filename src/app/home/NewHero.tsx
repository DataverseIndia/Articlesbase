"use client"

import { Badge } from '@/components/Badge'
import { Search } from 'lucide-react'
import { FC } from 'react'
import { AnimatePresence, motion } from "framer-motion"

const NewHero: FC = () => {
  const leftVariants = {
    hidden: { opacity: 0, x: -100, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 1, x: -100, y: 0 },
  };
  const rightVariants = {
    hidden: { opacity: 0, x: 100, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 100, y: 0 },
  };
  return (
    <AnimatePresence>
      <div className='bg-[#E6EEE0] grid grid-cols-[4fr_3fr] px-10 overflow-x-hidden'>
        <motion.div variants={leftVariants} initial={leftVariants.hidden} whileInView={leftVariants.enter} transition={{ type: 'spring', stiffness: 50 }} exit={leftVariants.exit} className='flex flex-col justify-center items-center z-20'>
          <Badge text='We are launching soon'/>
          <h1 className='phone:text-5xl lg:text-8xl text-center font-polysans-median font-semibold leading-none text-neutral-950 tracking-tight'>Welcome to Articles Base</h1>
          <p className='font-polysans-slim text-pretty phone:text-base tablet:text-2xl text-center mt-5 font-satoshi-regular'>The most authentic learning place to read informative, fact-checked articles for free.</p>
          <div className='flex flex-col gap-3 phone:mt-7 lg:mt-20'>
              <p className='font-polysans-slim text-lime-800 text-3xl text-center ml-5'>What do you want to read about today?</p>
              <div className='flex mx-auto'>
                <input className='bg-white/50 py-5 rounded-full outline-none focus:outline-4 focus:outline focus:outline-lime-800 font-polysans-slim lg:w-[40vw] px-5 mr-3 placeholder:text-[#403A3E]/80' placeholder='I want to learn about...'/>
                <Search className='my-auto w-9 h-9 text-[#403A3E] -ml-16'/>
              </div>
          </div>
        </motion.div>
        <motion.img variants={rightVariants} initial={rightVariants.hidden} whileInView={rightVariants.enter} transition={{ type: 'spring', stiffness: 50 }} exit={rightVariants.exit} src='/images/heroo.png' alt='' className='phone:mt-7 lg:mt-0 lg:p-20'/>
      </div>
    </AnimatePresence>
  )
}

export default NewHero

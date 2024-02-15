import { CheckCheck, HeartHandshake, LibrarySquare } from 'lucide-react'
import { FC } from 'react'

const About: FC = () => {
  return (
    <div className='bg-[#E6EEE0] py-16 phone:px-5 lg:px-40 my-16 grid lg:grid-cols-2 gap-16'>
      <div className='flex flex-col gap-7'>
         <h1 className='text-4xl font-polysans-median'>Articlesbase is an award-winning website where trusted research and expert knowledge come together.</h1>
         <p className='font-outfit'>Since 2005, wikiHow has helped billions of people learn how to solve problems large and small. We work with credentialed experts, a team of trained researchers, and a devoted community to create the most reliable, comprehensive and delightful how-to content on the Internet.</p>
         <button className='bg-[#94B778] rounded-full px-7 py-2 font-jakarta-Sans font-extrabold text-white'>
            Read about our editorial process
         </button>
      </div>
      <div className='flex justify-center flex-col phone:gap-5 lg:gap-10'>
         <div className='flex gap-4'>
            <CheckCheck className='my-auto w-8 h-8'/>
            <div>
               <h1 className='text-2xl font-polysans-median'>Authoritative</h1>
               <h1 className='font-outfit'>90,000 academically researched articles</h1>
            </div>
         </div>
         <div className='flex gap-4'>
            <HeartHandshake className='my-auto w-8 h-8'/>
            <div>
               <h1 className='text-2xl font-polysans-median'>Trustworthy</h1>
               <h1 className='font-outfit'>1000+ expert co-authors across 50,000 articles</h1>
            </div>
         </div>
         <div className='flex gap-4'>
            <LibrarySquare className='my-auto w-8 h-8'/>
            <div>
               <h1 className='text-2xl font-polysans-median'>Comprehensive</h1>
               <h1 className='font-outfit'>Lorem ipsum dolor sit amet.</h1>
            </div>
         </div>
      </div>
    </div>
  )
}

export default About

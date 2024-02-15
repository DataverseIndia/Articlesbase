import { Facebook, Instagram, Mail, Search, Twitter, Youtube } from 'lucide-react'
import { FC } from 'react'

const Footer: FC = () => {
  return (
    <div className='bg-[#ffce63] phone:px-3 lg:px-16 py-5 grid lg:grid-cols-[3fr_2fr] mt-10'>
      <div className='flex flex-col gap-4'>
         <h1 className='font-polysans-median text-2xl'>ArticlesBase</h1>
         <hr />
         <div className='lg:flex justify-between'>
            <div className='w-full'>
               <div className='flex lg:mr-auto'>
                  <input className='bg-white/50 py-3 rounded-md outline-none font-polysans-slim phone:w-full lg:w-[30vw] px-5 mr-3 placeholder:text-[#403A3E]/80' placeholder='I want to learn about...'/>
                  <Search className='my-auto w-7 h-7 text-[#403A3E]'/>
               </div>
               <div className='flex gap-3 mt-7 phone:justify-center lg:justify-start'>
                  <Instagram />
                  <Facebook />
                  <Twitter />
                  <Youtube />
                  <Mail />
               </div>
            </div>
            <div className='phone:mt-7 flex gap-7 font-outfit tracking-tight text-sm justify-center'>
               <div className='flex flex-col gap-2'>
                  <h1>Home</h1>
                  <h1>About ArticlesBase</h1>
                  <h1>Experts</h1>
                  <h1>Jobs</h1>
                  <h1>Contact Us</h1>
               </div>
               <div className='flex flex-col gap-2'>
                  <h1>Site Map</h1>
                  <h1>Terms of use</h1>
                  <h1>Privacy Policy</h1>
                  <h1>Contribute</h1>
               </div>
            </div>
         </div>
      </div>
      <div className=' rounded p-5 mt-5'>
         <div className='flex gap-3 justify-center items-center'>
            <img src='/images/newsletter.png' alt='newsletter' className='w-7 h-7'/>
            <h1 className='font-polysans-median text-lg'>Articlesbase</h1>
         </div>
           <div className='flex flex-col gap-4 mt-5'>
               <h1 className='font-polysans-slim text-sm text-center'>Helpful how-tos delivered to your inbox every week!</h1>
               <input className='bg-white/50 py-2 rounded-full outline-none border focus:outline-2 focus:outline focus:outline-lime-800 font-polysans-slim w-[60%] mx-auto px-5 placeholder:text-[#403A3E]/80' placeholder='Enter your email'/>
               <button className='bg-[#405132] rounded-full w-[60%] mx-auto px-7 py-2 font-jakarta-Sans font-extrabold text-white'>
                  Sign me up
               </button>
            </div>
         </div>
    </div>
  )
}

export default Footer

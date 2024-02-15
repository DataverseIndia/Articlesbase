import { Book, BookOpen, Search } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'

const Navbar: FC = () => {
  return (
    <div className='bg-[#93B874] py-4 px-20'>
      <div className='flex gap-7'>
        <div className='flex gap-5'>
          <h1 className='text-3xl font-polysans-median'>Articlesbase</h1>
          <div className='flex'>
            <div className='flex flex-col w-[70%]'>
                <input className='bg-transparent text-white placeholder:text-white/80 text-2xl font-outfit' placeholder='to do anything...'/>
                <Image src="/icons/line.svg" alt='' className='-ml-2' width={500} height={10}/>
            </div>
              <div className='bg-white/30 px-7 py-2 my-auto rounded'>
                <Search className='my-auto text-white'/>
              </div>
          </div>
        </div>
      </div>
      <div className=''>

      </div>
    </div>
  )
}

export default Navbar

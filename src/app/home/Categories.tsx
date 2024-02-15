import ShimmerButton from '@/components/ShimmerButton'
import { Ribbon, Sprout } from 'lucide-react'
import { FC } from 'react'
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
 } from "@/components/ui/accordion"

const Categories: FC = () => {
   const categories = [
      {
        name: 'Technology',
        subcategories: [
         'Gadgets and Devices',
         'Software and Apps',
         'Artificial Intelligence and Machine Learning',
         'Cybersecurity',
         'Emerging Technologies'
        ],
      },
      {
        name: 'Business',
        subcategories: [
          'Entrepreneurship and Startups',
          'Marketing and Advertising',
          'Finance and Investment',
          'Technology and Innovation',
          'Leadership and Management'
        ]
      },
      {
        name: 'Finance',
        subcategories: [
          'Personal Finance',
          'Investment Strategies',
          'Market Analysis',
          'Retirement Planning',
          'Tax Planning'
        ]
      },
      {
        name: 'Health',
        subcategories: [
          'Nutrition and Diet',
          'Fitness and Exercise',
          'Mental Health',
          'Disease Management',
          'Wellness and Lifestyle'
        ]
      },
      {
        name: 'Travel',
        subcategories: [
          'Budget Travel',
          'Luxury Travel',
          'Adventure Travel',
          'Cultural Travel',
          'Eco and Sustainable Travel'
        ]
      },
      {
        name: 'Trending',
        subcategories: [
          'Technology Trends',
          'Health and Wellness Trends',
          'Fashion and Lifestyle Trends',
          'Entertainment and Media Trends',
          'Social and Cultural Trends'
        ]
      }
    ];

  return (
    <div className='grid lg:grid-cols-[2fr_1fr] gap-10 w-[90%] mx-auto'>
      <div className='flex flex-col gap-5'>
         <div className='flex flex-col gap-5'>
            <div className='rounded border'>
               <div className='bg-yellow-100 px-5 rounded py-2 font-polysans-median'>Fast Company&apos;s 2023 World Changing Ideas Honoree </div>
               <div className='lg:flex gap-5 m-5'>
                  <Sprout className='phone:w-8 phone:h-8 lg:w-40 lg:h-40 my-auto'/>
                  <div className='flex flex-col gap-5 h-full my-auto'>
                     <div className='flex flex-col gap-1'>
                        <h1 className='font-polysans-median text-lg text-neutral-700'>wikiHow and United Nations Verified present</h1>
                        <h1 className='font-polysans-median text-xl'>How to Spot and Counter Fake Information Online</h1>
                        <p className='font-outfit'>Fake news, misinformation, disinformation — you hear a lot about these terms these days. But what can you do about them? Take our free courses to find out.</p>
                     </div>
                     <button className='bg-[#94B778] rounded-full px-7 py-2 font-jakarta-Sans font-extrabold text-white'>
                        Take our free courses
                     </button>
                  </div>
               </div>
            </div>
            <div>
               <h1 className='font-polysans-median text-2xl my-auto'>Top Featured Articles</h1>
               <div className={`grid phone:grid-cols-2 lg:grid-cols-3 gap-5 mt-5`}>
                  {Array.from({length: 18 }).map((_, index) => (
                     <div key={index} className='border-2 hover:border-4 border-lime-700 hover:border-lime-900 animation hover:scale-[1.02] rounded-[2rem] flex flex-col gap-3 p-3'>
                        <img src='/images/categories.jpg' alt='' className="rounded-[2rem]"/>
                        <div>
                           <p className='text-xl font-polysans-median'>Lorem ipsum dolor sit amet.</p>
                           <p className='text-sm font-outfit'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, facere!</p>
                        </div>
                     </div>
                  ))}
               </div>
               <button className='rounded bg-transparent border-2 border-lime-800 px-5 py-2 text-lime-900 font-polysans-median m-auto w-full mt-5'>
                  Load more
               </button>
            </div>
         </div>
      </div>
      <div className=''>
         <h1 className='font-polysans-median text-2xl my-auto'>Browse By Category</h1>
         <div className='mt-7 rounded p-5 border'>
            {categories.map((category, index) => (
               <Accordion key={index} type="single" collapsible className='w-full mx-auto'>
                  <AccordionItem value='1'>
                     <AccordionTrigger className='font-polysans-median text-lg'>{category.name}</AccordionTrigger>
                     {category.subcategories.map((feature, index) => (
                        <AccordionContent key={index} className='font-outfit cursor-pointer'>
                           {feature}
                        </AccordionContent>
                     ))}
                  </AccordionItem>
               </Accordion>
            ))}
         </div>
         <div className='bg-[#E6EEE0] rounded p-5 mt-5'>
            <img src='/images/newsletter.png' alt='newsletter' className='w-20 h-20 mx-auto'/>
            <div className='flex flex-col gap-4 mt-5'>
               <h1 className='font-polysans-median text-lg text-center'>Subscribe to Articlebase&apos;s Newsletter</h1>
               <p className='font-outfit text-center'>Helpful how-to&apos;s delivered to <br /> your inbox every week!</p>
               <input placeholder='Enter your email...' className='bg-white/50 text-stone-900 px-5 py-2 mx-auto flex justify-center rounded font-outfit'/>
               <button className='bg-[#94B778] rounded-full w-[70%] mx-auto px-7 py-2 font-jakarta-Sans font-extrabold text-white'>
                  Sign me up
               </button>
            </div>
         </div>
         <div className='bg-yellow-100 rounded mt-5 py-10'>
            <Ribbon className='m-auto w-10 h-10'/>
            <div className='flex flex-col gap-4 bg-white/20 z-10'>
               <h1 className='font-polysans-median text-lg text-center'>Support ArticlesBase&apos;s Mission</h1>
               <p className='font-outfit text-center text-sm w-[70%] mx-auto'>Millions of readers rely on ArticlesBase every single day. Your support helps us accomplish our mission: enabling every person in the world to learn how to do anything.</p>
               <button className='rounded bg-neutral-900 px-5 py-2 text-white font-polysans-slim w-[40%] m-auto'>
                  Let&apos;s do this!
               </button>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Categories

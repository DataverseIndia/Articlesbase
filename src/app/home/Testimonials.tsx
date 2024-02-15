import Link from 'next/link';
import { FC } from 'react'
import Marquee from 'react-fast-marquee'

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Member',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quod beatae ducimus corrupti autem omnis asperiores inventore amet sunt ratione necessitatibus quisquam fugiat soluta assumenda vitae molestiae fuga quo adipisci!',
  },
  {
   name: 'John Doe',
   role: 'Member',
   bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quod beatae ducimus corrupti autem omnis asperiores inventore amet sunt ratione necessitatibus quisquam fugiat soluta assumenda vitae molestiae fuga quo adipisci!',
 },
 {
   name: 'John Doe',
   role: 'Member',
   bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quod beatae ducimus corrupti autem omnis asperiores inventore amet sunt ratione necessitatibus quisquam fugiat soluta assumenda vitae molestiae fuga quo adipisci!',
 },
 {
   name: 'John Doe',
   role: 'Member',
   bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quod beatae ducimus corrupti autem omnis asperiores inventore amet sunt ratione necessitatibus quisquam fugiat soluta assumenda vitae molestiae fuga quo adipisci!',
 },
 {
   name: 'John Doe',
   role: 'Member',
   bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quod beatae ducimus corrupti autem omnis asperiores inventore amet sunt ratione necessitatibus quisquam fugiat soluta assumenda vitae molestiae fuga quo adipisci!',
 },
 {
   name: 'John Doe',
   role: 'Member',
   bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quod beatae ducimus corrupti autem omnis asperiores inventore amet sunt ratione necessitatibus quisquam fugiat soluta assumenda vitae molestiae fuga quo adipisci!',
 },
];

const Testimonials: FC = () => {
  return (
    <div className='bg-[#E6EEE0] lg:px-10 py-12 mx-auto my-16'>
      <h1 className='font-polysans-median phone:text-lg lg:text-3xl text-center mb-5'>We make learning easy with helpful, <br /> approachable instructions. People agree.</h1>
      <Link href="/" className='font-outfit underline flex justify-center mb-7'>Read our story</Link>
      <Marquee speed={20} gradient gradientColor={[230, 238, 224]}>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="phone:w-[30vh] phone:h-[30vh] lg:w-[30vw] lg:h-[20vw] flex flex-col justify-center gap-5 rounded-xl p-5 bg-[#C6D9B9] border-2 border-white/10 m-auto cursor-pointer overflow-hidden mx-3"
            >
              <p className="text-neutral-800 font-outfit">{member.bio}</p>
              <div className="flex gap-3">
                <div className='flex flex-col'>
                  <h1 className="font-polysans-median text-center text-lg text-neutral-950">
                    {member.name}
                  </h1>
                  <p className="text-neutral-800 font-outfit">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
    </div>
  )
}

export default Testimonials

"use client"
import navlinks from '@/data/navLinks';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { Sun } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" relative flex items-center justify-between md:max-w-xl tv:max-w-2xl w-full mt-4 bg-transparent py-2 top-0 mb-15  rounded-xl">
        <div className="flex">
            <h2 className="font-bold font-inter text-lg md:text-2xl text-neutral-700 cursor-pointer hover:text-black">Rakesh Bhagat</h2>
        </div>
        <div className="hidden sm:visible sm:flex gap-4 ">
            {navlinks.map((link) => (
                <p key={link.link} className="text-neutral-600 cursor-pointer hover:text-black">{link.link}</p>
            ))}
            <button><Sun width={20} height={20} className='text-yellow-400 hover:text-yellow-600 cursor-pointer'/></button>
        </div>

        <div className='visible sm:hidden flex gap-2'>
          <button onClick={() =>setOpen(!open)}>

          {open? <IconX /> :<IconMenu2 />}
          </button>
          <button><Sun width={20} height={20} className='text-yellow-400 hover:text-yellow-600 cursor-pointer'/></button>
        </div>

        {open && (
          <div className='absolute top-10 bg-blue-50 flex flex-col w-full items-center justify-center gap-3 mt-2'>
            {navlinks.map((link) => (
                <div key={link.link} className="font-inter text-neutral-700 cursor-pointer hover:text-black">{link.link}</div>
            ))}
            
          </div>
        )}
    </div>
  )
}

export default Navbar
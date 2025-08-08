import { Sun } from 'lucide-react';
const links = [
    {
        link : "Projects"
    },
    {
        link: "Blogs"
    },
    {
        link: "Contacts"
    }
]
const Navbar = () => {
  return (
    <div className="flex items-center justify-between max-w-xl w-full mt-4 bg-transparent py-2 top-0 mb-15  rounded-xl">
        <div className="flex">
            <h2 className="font-bold font-mono text-2xl text-neutral-700">Rakesh Bhagat</h2>
        </div>
        <div className="flex gap-4">
            {links.map((link) => (
                <p key={link.link} className="text-neutral-600 cursor-pointer hover:text-black">{link.link}</p>
            ))}
            <button><Sun width={20} height={20} className='text-neutral-500 hover:text-black cursor-pointer'/></button>
        </div>
    </div>
  )
}

export default Navbar
import React from 'react'

export default function Project() {
  return (
    <section className='h-screen bg-[url(https://i.pinimg.com/564x/59/95/6d/59956d49cd0bf471d23fb94e8bdfff7f.jpg)] bg-no-repeat bg-cover' >
        {/*nav*/}
        <nav className='h-20 flex justify-between items-center max-w-7xl p-28 mx-auto my-0'>
        
            <h1 className=' font-semibold text-4xl text-[#171717]'>DevBros.</h1>
            <ul className='flex gap-6 text-xl'>
                <li className='cursor-pointer text-gray-600  hover:text-[#171717] transition-all tracking-wide'><a href="/">Home</a></li>
                <li className='cursor-pointer text-gray-600  hover:text-[#171717] transition-all tracking-wide'>
                  <a href="/about">About</a></li>
                <li className='cursor-pointer text-[#171717] tracking-wide'>
                  <a href="/project">Project</a></li>
                <li className='cursor-pointer text-gray-600  hover:text-[#171717] transition-all tracking-wide'>
                  <a href="/contact">Contacts</a></li>
                <li className='cursor-pointer text-gray-600  hover:text-[#171717] transition-all tracking-wide'>
                  <i className="bi bi-moon"></i></li>                
            </ul>
        </nav>
      </section>
  
  )
}

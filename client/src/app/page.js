import React from 'react';
import './globals.css';

//src
const imageProf = 'https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww' 



  


export default function Root() { 
  return (
       <section className={`h-screen bg-[url(https://i.pinimg.com/564x/59/95/6d/59956d49cd0bf471d23fb94e8bdfff7f.jpg)]  bg-no-repeat bg-cover 
       dark:bg-[#252526]`}>
        {/*nav*/}
        <nav className='h-20 flex justify-between items-center max-w-7xl p-28 mx-auto my-0'>
        
            <h1 className=' font-semibold text-4xl text-[#171717]'>DevBros.</h1>
            <ul className='flex gap-6 text-xl'>
                <li className='cursor-pointer text-[#171717] tracking-wide'><a href="/">Home</a></li>
                <li className='cursor-pointer text-gray-600  hover:text-[#171717] transition-all tracking-wide'>
                  <a href="/about">About</a></li>
                <li className='cursor-pointer text-gray-600  hover:text-[#171717] transition-all tracking-wide'>
                  <a href="/project">Project</a></li>
                <li className='cursor-pointer text-gray-600  hover:text-[#171717] transition-all tracking-wide'>
                  <a href="/contact">Contacts</a></li>
                <li className='cursor-pointer text-gray-600  hover:text-[#171717] transition-all tracking-wide'>
                  <i className="bi bi-moon"></i></li>                
            </ul>
        </nav>
        <main className=' h-[70vh] w-full flex justify-center items-center'>
            <div className='flex justify-between items-center p-11 mx-auto my-0 max-w-7xl gap-20'>
              {/*Links*/}
                <div className='flex flex-col gap-4'>
                  <a href='#'><i className="bi bi-github text-2xl"></i></a>
                  <a href='#'><i className="bi bi-instagram text-2xl"></i></a>
                  <a href='#'><i className="bi bi-linkedin text-2xl"></i></a>
                </div>
                {/*Image*/}
                <div>
                 <img src={imageProf} className='h-96 w-96 rounded-full' />
                </div>

                {/*profileInfo*/}
                <div>
                  <p>Hi, We are</p>
                  <h1>DevBros</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </main>
      </section>
    
  )
}

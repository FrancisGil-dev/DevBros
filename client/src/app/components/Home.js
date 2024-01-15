import React from 'react'

export default function Home() {
  return (
    <section className='h-screen'>
        {/*nav*/}
        <nav className='h-20 flex justify-between max-w-7xl mx-auto my-0 p-10'>
            <h1 className='text-4xl text-[#1B03A3]'>LOGO</h1>
            <ul className='flex gap-6'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contacts</li>
                <li><i class="bi bi-moon"></i></li>                
            </ul>
        </nav>
    </section>
  )
}

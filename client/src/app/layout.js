
import './globals.css';


export const metadata = {
  title: 'DevBros || Portfolio',
}

export default function RootLayout({ children }) {
  return(
    <html lang="en">
      <body className='bg-[#0a192f] text-gray-300'>{children}</body>
    </html>
  )
}

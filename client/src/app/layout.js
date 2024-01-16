
import './globals.css';
import {Poppins} from '@next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200', '300','400','500', '600', '700', '800', '900' ],
  variable: '--font-poppins',
})


export const metadata = {
  title: 'DevBros || Portfolio',
}

export default function RootLayout({ children }) {
  return(
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"/>
      </head>
      <body className={poppins.className + 'bg-gradient-conic'}>{children}</body>
    </html>
  )
}

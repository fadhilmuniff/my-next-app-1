'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
// import con

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  // const router = useRouter()
  // const onClickUrl = (url) => {
  //   router.push(url)
  // }

  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <ul>
          <li><Link href='/'>home</Link></li>
          <li><Link href='/dashboard'>dashboard</Link></li>
          {/* <li onClick={() => router.push('/setting')}>setting</li> */}
        </ul>
        {children}
        <div>footer</div>
      </body>
    </html>
  )
}

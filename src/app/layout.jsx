'use client'
import './global.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { usePathname } from 'next/navigation'

export default function RootLayout({children, router}) {
  const pathname = usePathname()

  const caminhosPermitidos = ['/cadastro', '/login', '/areaRestrita', '/areaMonitoramento', '/areaMetas'];

  if (caminhosPermitidos.includes(pathname)) {
    return (
      <html title='Global Solution' lang="pt-br">
      <body>
          {children}
      </body>
    </html>
    )
  }
  else {
    return (
      <html title='Global Solution' lang="pt-br">
      <body>
        {<Header/>}
          {children}
        <Footer/>
      </body>
    </html>
    )
  }
}
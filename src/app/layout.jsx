import './global.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'Global Solution',
  description: 'Generated by create next app',
}

export default function RootLayout({ children}) {
  return (
    <html lang="pt-br">
      <body>
        {<Header></Header>}
          {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
import './page.css'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='home_content'>
      <div className="textbox_home">
        <div className='title'>
          <h1 className='home_title'>Olá, somos</h1>
          <h1 className='home_title'>ums home</h1>
        </div>

        <div className='subtitle'>
          <p>
          Ainda nao temos conteudo, mas voce pode admirar a beleza por enquanto. Eu sou bonito e futil 
          </p>
        </div>
      </div>
    
      <div className='home_image'>
        <Image src={'Home/Img_doctor.svg'} width={400} height={400}></Image>
      </div>
    </main>
  )
}

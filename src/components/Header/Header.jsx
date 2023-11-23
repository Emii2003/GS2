import Image from "next/image"
import Link from "next/link"
import './Header.css'

export default function Header(){
    return(
        <header>
            <Image src={"Header/Logo_Temporaria.svg"} width={80} height={100}></Image>
            <nav className="nav">
                <ul className="ul">
                   <Link href={'/'} className="link_header">Home</Link> 
                   <span>/</span>
                   <Link href={'/contato'} className="link_header">Contato</Link>
                </ul>
            </nav>
            <div className="button_section">
                <Link className="cadastro" href={'./cadastro'}>Cadastro</Link>
                <Link className="login" href={'./login'}>Login</Link>
            </div>
        </header>
    )
}
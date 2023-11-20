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
                   <Link href={'/'} className="link_header">Contato</Link>
                </ul>
            </nav>
            <div className="button_section">
                <button className="cadastro">Cadastro</button>
                <button className="login">Login</button>
            </div>
        </header>
    )
}
import Link from "next/link"
import './LinksAreaRestrita.css'
export default function LinksAreaRestrita(){
    return(
        <div>
            <nav>
                <ul>
                   <Link className = 'link_nav'href={'./areaMonitoramento'}>Monitoramento</Link>
                   <Link className = 'link_nav'href={'./areaMetas'}>Metas</Link>
                    <Link className = 'link_nav' href={'./'}>Encerrar sessão</Link>
                </ul>
            </nav>
        </div>
    )
}
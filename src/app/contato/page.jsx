import './contato.css'
import Image from 'next/image'
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Contato(){
    return(
        <div className="contato_content">
            <div className="contato_title">
            Conheça nosso time.
            </div>

            <div className='about_me'>
                <div className="about_me_textbox">
                    <h1 className='about_me_title'>Emile de Moura Maia</h1>
                    <p className='about_me_subtitle'>FrontEnd e Designer</p>
                    <p className='about_me_rm'>RM: 552235 / 1TDSS</p>
                    <FaGithub className="icon_about_me"/>
                    <FaInstagram className="icon_about_me"/>
                    <FaLinkedinIn className="icon_about_me"/>
                </div>
                <div className="about_me_image">
                    <Image src={'/Contato/emi.svg'} width={200} height={200}>
                    </Image>
                    
                </div>
                
            </div>
        </div>
    )
}
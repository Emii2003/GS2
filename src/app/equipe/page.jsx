import './equipe.css'
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
                    <p className='about_me_subtitle'>FrontEnd e Banco de dados</p>
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

            <div className='about_me'>
                <div className="about_me_textbox">
                    <h1 className='about_me_title'>Maria Eduarda Costa</h1>
                    <p className='about_me_subtitle'>FrontEnd e Gestão de projetos</p>
                    <p className='about_me_rm'>RM: 98760 / 1TDSS</p>
                    <FaGithub className="icon_about_me"/>
                    <FaInstagram className="icon_about_me"/>
                    <FaLinkedinIn className="icon_about_me"/>
                </div>
                <div className="about_me_image">
                    <Image src={'/Contato/maria.svg'} width={200} height={200}>
                    </Image>
                </div>
            </div>

            <div className='about_me'>
                <div className="about_me_textbox">
                    <h1 className='about_me_title'>Julia Andrade Dias</h1>
                    <p className='about_me_subtitle'>Programadora Java</p>
                    <p className='about_me_rm'>RM: 552332 / 1TDSS</p>
                    <FaGithub className="icon_about_me"/>
                    <FaInstagram className="icon_about_me"/>
                    <FaLinkedinIn className="icon_about_me"/>
                </div>
                <div className="about_me_image">
                    <Image src={'/Contato/ju.svg'} width={200} height={200}>
                    </Image>
                </div>
            </div>

            <div className='about_me'>
                <div className="about_me_textbox">
                    <h1 className='about_me_title'>Caio Vitor Urbano Neves</h1>
                    <p className='about_me_subtitle'>Programador Python</p>
                    <p className='about_me_rm'>RM: 552392 / 1TDSS</p>
                    <FaGithub className="icon_about_me"/>
                    <FaInstagram className="icon_about_me"/>
                    <FaLinkedinIn className="icon_about_me"/>
                </div>
                <div className="about_me_image">
                    <Image src={'/Contato/caio.svg'} width={200} height={200}>
                    </Image>
                </div>
            </div>

            <div className='about_me'>
                <div className="about_me_textbox">
                    <h1 className='about_me_title'>Guilherme P. de Oliveira</h1>
                    <p className='about_me_subtitle'>ChatBot e gestão de projetos</p>
                    <p className='about_me_rm'>RM: 552238 / 1TDSS</p>
                    <FaGithub className="icon_about_me"/>
                    <FaInstagram className="icon_about_me"/>
                    <FaLinkedinIn className="icon_about_me"/>
                </div>
                <div className="about_me_image">
                    <Image src={'/Contato/gui.svg'} width={200} height={200}>
                    </Image>
                </div>
            </div>
        </div>
    )
}
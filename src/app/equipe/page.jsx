import styles from './equipe.module.css';
import Image from 'next/image'
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Contato() {
    return (
        <div className={styles.contatoContent}>
            <div className={styles.contatoTitle}>
                Conheça nosso time.
            </div>

            {/* Membro 1 */}
            <div className={styles.aboutMe}>
                <div className={styles.aboutMeTextbox}>
                    <h1 className={styles.aboutMeTitle}>Emile de Moura Maia</h1>
                    <p className={styles.aboutMeSubtitle}>FrontEnd e Banco de dados</p>
                    <p className={styles.aboutMeRm}>RM: 552235 / 1TDSS</p>
                    <FaGithub className={styles.iconAboutMe} />
                    <FaInstagram className={styles.iconAboutMe} />
                    <FaLinkedinIn className={styles.iconAboutMe} />
                </div>
                <div className={styles.aboutMeImage}>
                    <Image src={'/Contato/emi.svg'} width={200} height={200} />
                </div>
            </div>

            {/* Membro 2 */}
            <div className={styles.aboutMe}>
                <div className={styles.aboutMeTextbox}>
                    <h1 className={styles.aboutMeTitle}>Maria Eduarda Costa</h1>
                    <p className={styles.aboutMeSubtitle}>FrontEnd e Gestão de projetos</p>
                    <p className={styles.aboutMeRm}>RM: 98760 / 1TDSS</p>
                    <FaGithub className={styles.iconAboutMe} />
                    <FaInstagram className={styles.iconAboutMe} />
                    <FaLinkedinIn className={styles.iconAboutMe} />
                </div>
                <div className={styles.aboutMeImage}>
                    <Image src={'/Contato/maria.svg'} width={200} height={200} />
                </div>
            </div>

            {/* Membro 3 */}
            <div className={styles.aboutMe}>
                <div className={styles.aboutMeTextbox}>
                    <h1 className={styles.aboutMeTitle}>Julia Andrade Dias</h1>
                    <p className={styles.aboutMeSubtitle}>Programadora Java</p>
                    <p className={styles.aboutMeRm}>RM: 552332 / 1TDSS</p>
                    <FaGithub className={styles.iconAboutMe} />
                    <FaInstagram className={styles.iconAboutMe} />
                    <FaLinkedinIn className={styles.iconAboutMe} />
                </div>
                <div className={styles.aboutMeImage}>
                    <Image src={'/Contato/ju.svg'} width={200} height={200} />
                </div>
            </div>

            {/* Membro 4 */}
            <div className={styles.aboutMe}>
                <div className={styles.aboutMeTextbox}>
                    <h1 className={styles.aboutMeTitle}>Caio Vitor Urbano Neves</h1>
                    <p className={styles.aboutMeSubtitle}>Programador Python</p>
                    <p className={styles.aboutMeRm}>RM: 552392 / 1TDSS</p>
                    <FaGithub className={styles.iconAboutMe} />
                    <FaInstagram className={styles.iconAboutMe} />
                    <FaLinkedinIn className={styles.iconAboutMe} />
                </div>
                <div className={styles.aboutMeImage}>
                    <Image src={'/Contato/caio.svg'} width={200} height={200} />
                </div>
            </div>

            {/* Membro 5 */}
            <div className={styles.aboutMe}>
                <div className={styles.aboutMeTextbox}>
                    <h1 className={styles.aboutMeTitle}>Guilherme P. de Oliveira</h1>
                    <p className={styles.aboutMeSubtitle}>ChatBot e gestão de projetos</p>
                    <p className={styles.aboutMeRm}>RM: 552238 / 1TDSS</p>
                    <FaGithub className={styles.iconAboutMe} />
                    <FaInstagram className={styles.iconAboutMe} />
                    <FaLinkedinIn className={styles.iconAboutMe} />
                </div>
                <div className={styles.aboutMeImage}>
                    <Image src={'/Contato/gui.svg'} width={200} height={200} />
                </div>
            </div>
        </div>
    )
}
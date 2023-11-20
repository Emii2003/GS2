import Image from "next/image"
import Link from "next/link"
import { GrLinkedin } from "react-icons/gr"
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import './Footer.css'

export default function Footer(){
    return(
        <footer>
            <div className="textbox_footer">
                <p>Thinking five revolution &copy; 2023</p>
            </div>
            <div className="icons_footer">
                <FaGithub className="icon_footer"/>
                <RiInstagramFill className="icon_footer"/>
                <FaYoutube className="icon_footer"/>
                <GrLinkedin className="icon_footer"/>
            </div>
        </footer>
    )
}
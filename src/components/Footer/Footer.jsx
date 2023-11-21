import Image from "next/image"
import Link from "next/link"
import Icons from "../Icons/Icons"
import './Footer.css'

export default function Footer(){
    return(
        <footer>
            <div className="textbox_footer">
                <p>Thinking five revolution &copy; 2023</p>
            </div>
            <div className="icons_footer">
                <Icons></Icons>
            </div>
        </footer>
    )
}
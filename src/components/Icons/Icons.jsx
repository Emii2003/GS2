import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import './Icons.css'

export default function Icons(){
    return(
        <div className="icons_footer">
                <FaGithub className="icon"/>
                <RiInstagramFill className="icon"/>
                <FaYoutube className="icon"/>
        </div>
    )
}
import { renderTypes } from "contentlayer/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function ContactDetails(){
    return(
        <div className="flex flex-wrap justify-center gap-x-7 gap-y-3 my-10 text-zinc-400">

            <div className="flex flex-row items-center justify-center gap-x-2">
               <FontAwesomeIcon icon={faBriefcase} className="h-5 w-5 text-white" />
                <p className="">Web developer </p>
            </div>

            <div className="flex flex-row items-center justify-center gap-x-2">
                <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 text-white" />
                <p className="" > Addis Ababa, Ethiopia</p>
            </div>

            <a className="flex flex-row items-center justify-center gap-x-2 hover:opacity-75 transition-all"
             href="https://www.linkedin.com/in/nahom-garefo-304306221/" 
             target="_blank">
            <FontAwesomeIcon icon={faLinkedin}  className="w-5 h-5 text-white" />
                <p>Linkedln</p>

             </a>

             <a className="flex flex-row items-center justify-center gap-x-2 hover:opacity-75 transition-all"
             href="https://drive.google.com/file/d/1SWqatBwGfgOwC9mfDPulCS1-wC12vNxb/view?usp=sharing" target="_blank">
            <FontAwesomeIcon icon={faFileAlt
            } className="w-5 h-5 text-white"/>

                <p className="align-middle">Resume</p>
             </a>

             <a className="flex flex-row items-center justify-center gap-x-2 hover:opacity-75 transition-all"
             href="https://github.com/Blacknahil" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="w-5 h-5 text-white"/>

                <p className="align-middle">GitHub</p>
             </a>

             <a className="flex flex-row items-center justify-center gap-x-2 hover:opacity-75 transition-all"
             href="https://x.com/Nahom9465" target="_blank">
            <FontAwesomeIcon icon={faXTwitter
            } className="w-5 h-5 text-white"/>

                <p className="align-middle">Twitter</p>
             </a>
        </div>
    )
}
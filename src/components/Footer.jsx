import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



export default function Footer(){
    return <div className="bg-black/50 w-full p-2 flex items-center justify-between">
      <div>&copy; 2024 PC Garrage. Designed by <span className="font-bold">Haris</span>.</div>
        <div className="flex flex-row p-1 gap-2">
            <a href="https://x.com/haris_brj" target="_blank">
              <FaXTwitter size={30} className="cursor-pointer" />
            </a>
            <a href="https://github.com/ArctyZ" target="_blank">
              <FaGithub size={30} className="cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/harisbaraja/" target="_blank">
              <FaInstagram size={30} className="cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-harits-b01b91218/"
              target="_blank"
            >
              <FaLinkedin size={30} className="cursor-pointer" />
            </a>
          </div>
    </div>
}
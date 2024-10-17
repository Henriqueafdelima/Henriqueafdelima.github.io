import logo from "../assets/Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return(
    <nav className="mb-20 flex items-center justify-between py-6 sm:flex-row sm:items-center">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-20 w-20" src={logo} alt="logo" />
        </div>
        <div className="mt-4 flex items-center justify-center gap-4 text-xl sm:text2xl sm:mt-0">
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
           
        </div>
    </nav>
  );
};
export default Navbar

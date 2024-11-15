import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return(
    <nav className="mb-20 flex items-center justify-between py-6 sm:flex-row sm:items-center">
        <div className="flex flex-shrink-0 items-center">
            
        </div>
        <div className="mt-4 flex items-center justify-center gap-4 text-xl sm:text2xl sm:mt-0">
            <a 
              href="https://www.linkedin.com/in/henriqueafdelima/"
              target="_blank"
              rel="noopener noreffer"
              >
            <FaLinkedin />
            </a>
            <a 
              href="https://github.com/Henriqueafdelima"
              target="_blank"
              rel="noopener noreffer"
              >
            <FaGithub />
            </a>
            
           
        </div>
    </nav>
  );
};
export default Navbar

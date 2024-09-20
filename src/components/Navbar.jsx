import logo from "../assets/ronakPipalavaLogo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
// import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/ronak-pipalava/" target="_blank"> <FaLinkedin /></a>
        <a href="https://github.com/Ronak347" target="_blank"> <FaGithub /></a>
        <a href="https://www.instagram.com/ronak3141_/" target="_blank"> <FaInstagram /></a>
        {/* <a href="https://ronakap-portfolio.vercel.app/" target="_blank"> <FaSquareXTwitter /></a> */}
    </div>
  </nav>
}

export default Navbar
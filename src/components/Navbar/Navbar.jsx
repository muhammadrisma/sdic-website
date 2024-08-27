import "./Navbar.css"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-scroll"
import menu_icon from "../../assets/menu-icon.png"
const Navbar = () => {
  const [sticky,setSticky] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll",() => {
      window.scrollY >= 50 ? setSticky(true) : setSticky(false)
    })
  },[])

  const [mobileMenu,setMobileMenu] = useState(false)
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <h1 alt="sdic logo"  className="logo">SD Islamic Center Kapuas</h1>
        <ul className={mobileMenu ? '' :'hide-mobile-menu'}>
            <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to="programs" smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to="about" smooth={true} offset={-150} duration={500}>Tentang</Link> </li>
            <li> <Link to="campus" smooth={true} offset={-260} duration={500}>Kegiatan</Link></li>
            <li><Link to="contact" smooth={true} offset={-260} duration={500} className="btn">Kontak</Link></li>
        </ul>
        <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
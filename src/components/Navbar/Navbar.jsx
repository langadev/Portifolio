import { useState } from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav';

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = ()=>{
        setOpenMenu(!openMenu);
    }
  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
    <nav className='nav-wrapper'>
<div className="nav-content">
    <h1 className='logo'>Alfredo <span>Langa</span></h1>

    <ul>
        <li><a href="" className='menu-item'>Home</a></li>
        <li><a href="#skills" className='menu-item'>Skills</a></li>
        <li><a href="#experience" className='menu-item'> Experiencia</a></li>
        <li><a href="#contact" className='menu-item'>Contactar</a></li>
        <button className='contact-btn'>Blog</button>
    </ul>
    <button className='menu-btn' onClick={toggleMenu}>
    <span className="material-symbols-outlined" style={{fontSize:'1.5rem'}}>
        {openMenu ? "close": "menu"}
    </span>


    </button>
</div>
    </nav>
    </>
  )
}

export default Navbar;
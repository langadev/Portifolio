import './MobileNav.css';

function MobileNav({isOpen, toggleMenu}) {
  return (
    <>
<div className={`mobile-menu ${isOpen ? "active":""}`} onClick={toggleMenu}>
<div className="mobile-menu-container">
    <h1 className='logo'>Alfredo Langa</h1>

<ul>
<li>
    <a href="" className='menu-item'>Inicio</a></li>
        <li><a href="" className='menu-item'>Habilidades</a></li>

        <li><a href="" className='menu-item'>Experiencia</a></li>

        <li><a href="" className='menu-item'>Contactar</a></li>

        <button className='contact-btn'>Blog</button>

</ul>
    </div>
    </div>
    </>
  )
}

export default MobileNav
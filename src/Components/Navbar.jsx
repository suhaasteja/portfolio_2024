import { useEffect, useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';



function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggleMenu = e => {
        setToggleMenu(prev => !prev);
    }


    return (
        <div className='nav-container flex'>
            <div className="flex home">
                <div className="dot"></div>
                <Link to="/" className="name">Suhaas</Link>
            </div>
            <Link to="/Work" className="item nav-item">Work</Link>
            <Link to="/Projects" className="item nav-item">Projects</Link>
            <Link to="/Skills" className="item nav-item">Skills</Link>
            {/* <Link to="/Contact" className="item">Contact</Link> */}
            <FontAwesomeIcon icon={faBars} onClick={handleToggleMenu} className="sidemenu-toggle" />
            {
                toggleMenu && <div className="sidebar-items">
                    <FontAwesomeIcon icon={faXmark} onClick={handleToggleMenu} />
                    <Link to="/Work" className="item sidebar-item" onClick={handleToggleMenu}>Work</Link>
                    <Link to="/Projects" className="item sidebar-item" onClick={handleToggleMenu}>Projects</Link>
                    <Link to="/Skills" className="item sidebar-item" onClick={handleToggleMenu}>Skills</Link>
                </div>
            }
        </div>
    )
}

export default Navbar
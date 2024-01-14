import { useEffect, useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
    const [open, setOpen] = useState(false);

    const handleWindowSize = (e) => {
        const isSmallScreen = window.innerWidth <= 768;
        setOpen(isSmallScreen);
    }

    useEffect(() => {
        window.addEventListener("resize", handleWindowSize);

        return () => {
            window.addEventListener("resize", handleWindowSize);

        }
        
    }, []);


  return (
    <div className='nav-container flex'>
        <div className="flex home">
            <div className="dot"></div>
            <Link to="/" className="name">Suhaas</Link>
        </div>
          <Link to="/Work" className="item">Work</Link>
          <Link to="/Projects" className="item">Projects</Link>
          <Link to="/Skills" className="item">Skills</Link>
          {/* <Link to="/Contact" className="item">Contact</Link> */}
            



    </div>
  )
}

export default Navbar
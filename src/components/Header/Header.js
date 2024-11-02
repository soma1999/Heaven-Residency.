    import React from "react";
import { Link } from "react-router-dom";  // Import Link
import './Header.css';
import Logo from '../../assets/da 1.png';
const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt="Logo" className="logo" />
            <div className="project-name">
                <span>Heaven Residency</span>
            </div>
            
            <ul className="header-menu">
                <li><Link to="/">HOME</Link></li>
                <li>|</li>

                <li><Link to="/contact">Residence</Link></li>
                <li>|</li>
                <li><Link to="/location">Location</Link></li>
                <li>|</li>

                <li><Link to="/about">About</Link></li>
                <li><Link to="/PanoramaViewer">PanoramaViewer</Link></li>

              
            </ul>

          
        </div>



    );
};

export default Header;

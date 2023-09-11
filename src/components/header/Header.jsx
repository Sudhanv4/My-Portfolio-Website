import React, { useState, useRef, useEffect } from 'react'
import "./header.css"

const Header = () => {

    const menu = useRef(null);
    const [toggle, showMenu] = useState(false);

    useEffect(() => {
      if(toggle)   document.addEventListener('click', handleOutSideClick);
      else document.removeEventListener('click', handleOutSideClick);
    }, [toggle]);

    const handleOutSideClick = (e) => {
        if (menu.current && (!menu.current.contains(e.target))) {
            showMenu(false);
        }
    };

    return (
        <header className="header" ref={menu}>
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Sudhanva</a>
                
                <div className={toggle?"nav__menu show-menu":"nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#experience" className="nav__link">
                                <i className="uil uil-briefcase nav__icon"></i> Experience
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i> Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={()=>showMenu(!toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={()=>{showMenu(!toggle)}}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header
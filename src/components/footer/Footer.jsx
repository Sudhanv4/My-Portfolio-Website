import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Sudhanva</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/sudhanva-habib-83aa591b1" rel="noreferrer" className="footer__social-link" target="_blank" >
                    <i className="uil uil-linkedin-alt"></i>
                </a>

                <a href="https://github.com/Sudhanv4" rel="noreferrer" className="footer__social-link" target="_blank" >
                    <i className="uil uil-github-alt"></i>
                </a>

                <a href="https://www.instagram.com/key_run847" rel="noreferrer" className="footer__social-link" target="_blank" >
                    <i className="uil uil-instagram"></i>
                </a>
            </div>
            <span className="footer__copy">
                &#169; Sudhanva. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer
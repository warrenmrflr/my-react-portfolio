import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { RiThreadsFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        WARREN MIRAFLOR
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/wrrnmrflr" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com/wawen_m" target="_blank">
          <FiInstagram />
        </a>
        <a href="https://threads.net/wawen_m" target="_blank">
          <RiThreadsFill />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; All rights reserved. Designed by{" "}
          <a href="https://buymeacoffee.com/egator/e/56809" target="_blank">
            Egator
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;

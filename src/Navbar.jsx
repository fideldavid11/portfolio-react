import React, { useEffect, useState } from 'react';
import { BsPeopleFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { FaHouseChimney, FaRegFolderOpen } from "react-icons/fa6";
import { GiSpellBook } from "react-icons/gi";
import { IoMdMenu } from "react-icons/io";
import { IoBookmark, IoClose } from "react-icons/io5";
import { MdContactPage } from "react-icons/md";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [isNavVisible, setNavVisibility] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = prevScrollPos < currentScrollPos;
      setNavVisibility(!isScrollingDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      smooth: 'easeInOutQuart'
    });
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`flex justify-between items-center py-4 px-8 transition-all duration-300 fixed top-0 left-0 w-full z-10 ${isNavVisible ? 'opacity-100' : 'opacity-0'}`} style={{ backdropFilter: 'blur(10px)' }}>
      <div className="text-white flex items-center">
        <FaLaptopCode className="mr-2" />
        <span>Fidel Peguero | Junior Software Developer</span>
      </div>
      <div className="flex items-center">
        <IoMdMenu className="md:hidden mx-4 text-white flex items-center hover:text-blue-700 cursor-pointer transition duration-300" onClick={toggleMenu} />
        <div className={`md:flex md:items-center md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:transition-all md:duration-300`}>
          <ScrollLink to="inicio" spy={true} smooth={true} duration={800} className="mx-4 text-white flex items-center hover:text-blue-700 cursor-pointer" onClick={() => { scrollToTop(); toggleMenu(); }}>
            <FaHouseChimney className="mr-2" />
            Inicio
          </ScrollLink>
          <ScrollLink
            to="introduction"
            spy={true}
            smooth={true}
            duration={800}
            className="mx-4 text-white flex items-center hover:text-blue-700 cursor-pointer"
            onClick={toggleMenu}
          >
            <IoBookmark className="mr-2" />
            Introduccion
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={800}
            className="mx-4 text-white flex items-center hover:text-blue-700 cursor-pointer"
            onClick={toggleMenu}
          >
            <GiSpellBook className="mr-2" />
            Conocimientos
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={800}
            className="mx-4 text-white flex items-center hover:text-blue-700 cursor-pointer"
            onClick={toggleMenu}
          >
            <FaRegFolderOpen className="mr-2" />
            Proyectos
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={800}
            className="mx-4 text-white flex items-center hover:text-blue-700 cursor-pointer"
            onClick={toggleMenu}
          >
            <BsPeopleFill className="mr-2" />
            Testimonios
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={800}
            className="mx-4 text-white flex items-center hover:text-blue-700 cursor-pointer"
            onClick={toggleMenu}
          >
            <MdContactPage className="mr-2" />
            Contacto
          </ScrollLink>
        </div>
        <IoClose className={`md:hidden mx-4 text-white flex items-center hover:text-blue-700 cursor-pointer ${isMenuOpen ? 'block' : 'hidden'} transition duration-300`} onClick={toggleMenu} />
      </div>
    </nav>
  );
}

export default Navbar;



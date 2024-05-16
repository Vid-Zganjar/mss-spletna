// Footer.js
import React from 'react';
import { FaFacebookF, FaInstagram, FaSnapchatGhost, FaTiktok } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
          <div className="text-4xl mb-4 p-10">Poklikaj:</div>
          <div className="flex space-x-12 mb-4 p-8" >
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="fa text-white text-5xl ">
                  <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="fa text-white text-5xl hover:color-green">
                  <FaInstagram />
              </a>
              <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer" className="fa text-white text-5xl hover:color-green">
                  <FaSnapchatGhost />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="fa text-white text-5xl hover:color-green">
                  <FaTiktok />
              </a>
          </div>
          <div className="flex space-x-10 mb-6 p-8">
          <NavLink to="/novice">
              <a  className="border-b-2 border-transparent hover:border-green-500 sm:mx-10">Novice</a>
          </NavLink>
          <NavLink to="/trgovina">
              <a  className="border-b-2 border-transparent hover:border-green-500 sm:mx-10">Trgovina</a>
          </NavLink>
          <NavLink to="/about">
              <a className="border-b-2 border-transparent hover:border-green-500 sm:mx-10">O nas</a>
          </NavLink>
          <NavLink to="/">
              <a className="border-b-2 border-transparent hover:border-green-500 sm:mx-10">Domov</a>
          </NavLink>
          </div>
          <div className="bg-gray-800 w-full py-2 mt-4">
              <div className="container mx-auto text-center text-sm">
                  &copy; Copyright {new Date().getFullYear()}  <a className='text-gray-100 font-mono text-md pl-2' href="https://zganjar.wordpress.com/">Žganjar Tech</a>
              </div>
          </div>
      </div>
  </footer>
    );
}

export default Footer;

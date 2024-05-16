

import logo from '../Slike/logo-mss-crn.png';
import "./navbar.css"
import { NavLink } from "react-router-dom";



function Navbar() {



  return (
 
    <>
    
<nav className="cont bg-black shadow py-10">
    <div className="container flex justify-evenly items-center mx-auto text-gray-100 capitalize">
      <div>
        <NavLink to="/novice">
        <a href='#' className="border-b-2 border-transparent hover:border-green-500 ">Novice</a>
        </NavLink>
        </div>
        <div>
        <NavLink to="/trgovina">
        <a href='#' className="border-b-2 border-transparent hover:text-gray-50  hover:border-green-500 mx-8 ">Trgovina</a>
        </NavLink>
        </div>
        <div>
        <NavLink to="/">
        <a href='#' className="border-b-2 border-transparent hover:text-gray-50  ">
          <img className='slika' src={logo} alt="logo" />
        </a>
        </NavLink>
        </div>
        <div>
        <NavLink to="/about">
        <a href='#'  className="border-b-2 border-transparent hover:text-gray-50  hover:border-green-500 pr-2">O nas</a>
        </NavLink>
        </div>
        <div className='flex justify-end'>
        <NavLink to="/kosarica">
        <a href='#' className=" border-b-2 border-transparent hover:color-green  hover:color-green  "> <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="kosara"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="256px" height="256px" viewBox="0 0 16 16" fill="#E4AB00" x="128" y="128" role="img"  xmlns="http://www.w3.org/2000/svg"><g fill="#E4AB00"><path fill="currentColor" d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z"/></g></svg></svg></a>
        </NavLink>
        <NavLink to="/uporabnik">
         <a href='#' className="border-b-2 border-transparent hover:color-green  hover:color-green"> <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="uporabnik"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="256px" height="256px" viewBox="0 0 16 16" fill="#1C2033" x="128" y="128" role="img"  xmlns="http://www.w3.org/2000/svg"><g fill="#1C2033"><path fill="currentColor" d="M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09c.016.016.032.016.032.032c.144.112.288.224.448.336c.08.048.144.111.224.175A7.98 7.98 0 0 0 8.016 16a7.98 7.98 0 0 0 4.48-1.375c.08-.048.144-.111.224-.16c.144-.111.304-.223.448-.335c.016-.016.032-.016.032-.032c1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279c.016-.128.048-.255.08-.383a4.17 4.17 0 0 1 .416-.991c.176-.304.384-.576.64-.816c.24-.24.528-.463.816-.639c.304-.176.624-.304.976-.4A4.15 4.15 0 0 1 8 10.342a4.185 4.185 0 0 1 2.928 1.166c.368.368.656.8.864 1.295c.112.288.192.592.24.911A7.03 7.03 0 0 1 8 14.993zm-2.448-7.4a2.49 2.49 0 0 1-.208-1.024c0-.351.064-.703.208-1.023c.144-.32.336-.607.576-.847c.24-.24.528-.431.848-.575c.32-.144.672-.208 1.024-.208c.368 0 .704.064 1.024.208c.32.144.608.336.848.575c.24.24.432.528.576.847c.144.32.208.672.208 1.023c0 .368-.064.704-.208 1.023a2.84 2.84 0 0 1-.576.848a2.84 2.84 0 0 1-.848.575a2.715 2.715 0 0 1-2.064 0a2.84 2.84 0 0 1-.848-.575a2.526 2.526 0 0 1-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 0 0-.688-1.406a4.883 4.883 0 0 0-1.088-1.135a5.207 5.207 0 0 0-1.04-.608a2.82 2.82 0 0 0 .464-.383a4.2 4.2 0 0 0 .624-.784a3.624 3.624 0 0 0 .528-1.934a3.71 3.71 0 0 0-.288-1.47a3.799 3.799 0 0 0-.816-1.199a3.845 3.845 0 0 0-1.2-.8a3.72 3.72 0 0 0-1.472-.287a3.72 3.72 0 0 0-1.472.288a3.631 3.631 0 0 0-1.2.815a3.84 3.84 0 0 0-.8 1.199a3.71 3.71 0 0 0-.288 1.47c0 .352.048.688.144 1.007c.096.336.224.64.4.927c.16.288.384.544.624.784c.144.144.304.271.48.383a5.12 5.12 0 0 0-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 0 0-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992C.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 0 1-2.032 4.907z"/></g></svg></svg></a>
         </NavLink>
         </div>
    </div>
    
</nav>
  </>
          
        
  )
}

export default Navbar
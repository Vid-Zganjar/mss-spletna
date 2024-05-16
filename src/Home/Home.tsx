
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./home.css"
import slika from "../Slike/logo-bel.png"
import Trgovina from './CardTrgovina';
import SimplAbout from './SimplAbout';
import Novicke from './Novicke';
import Footer from '../Footer/Footer';

const Home = () => {
  
  return (
    <>
  
    <div className="relative max-h-lvh ">

        <img className="max-h-lvh w-full object-cover" src={slika} alt="Random image" />
        <div className="absolute inset-0 back">  </div>
        <div className="absolute inset-0 h-screen flex flex-col md:p-0 lg:p-10 items-center justify-center">
            <h2 className=" text-white text-4xl font-bold lg:text-7xl md:p-10 lg:p-20">Mladinska sekcija Šentjanž</h2>
            <p className=" text-center text-white text-xs p-10  italic" >Mladost - pot do odkritja, prijateljstva in sprememb. Skupaj gradimo jutrišnji svet.</p>
            <button type="button" className="  text-white bg-gradient-to-br from-yellow-400 to-green-500 hover:border-2 border-black-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pridruži se</button> 
        </div>
    </div>
    <hr className="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10" />
      <Trgovina />
    <hr className="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10" />
      <SimplAbout />
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10" />
      <Novicke />
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10" />
      <Footer />
</>
  );
};

export default Home;


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
    <div className="flex flex-col justify-center items-center h-screen back text-center p-5 box-border">
      <h1 className="text-white font-bold text-5xl lg:text-7xl md:text-4xl sm:text-4xl mb-2">Mladinska sekcija Šentjanž</h1>
      <h2 className="text-white pt-10 italic text-2xl md:text-xl sm:text-lg mb-4">
        Mladost - pot do odkritja, prijateljstva in sprememb. Skupaj gradimo jutrišnji svet.
      </h2>
      <button className="px-8 py-4 text-white bg-gradient-to-br from-yellow-400 to-green-500 hover:border-2 border-black-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        Pridruži se
      </button>
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

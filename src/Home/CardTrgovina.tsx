import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './Card';
import majica from "../Slike/majica msš.png"
import kapa from "../Slike/kapa mss.png"
import jopa from "../Slike/jopa original logo.png"
import kapa1 from "../Slike/kapa original logo.png"
import jopa1 from "../Slike/jops msš.png"
import majica1 from "../Slike/majica veliki logo.png"

function CardTrgovina() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
<> 


        <h2 className='text-center text-4xl lg:text-6xl font-bold'>Trgovina</h2>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          itemClass="carousel-item-padding-40-px"
        >
  <div className='p-10'>
    <Card Slika={majica} 

    Naslov="Majica moška" 

    Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
    suscipit purus quis nisi commodo, vel commodo justo fringilla.
    Curabitur convallis fermentum tincidunt. Aliquam erat volutpat." />
  </div>

  <div className='p-10'>
    <Card Slika={majica1} 

    Naslov="Majica moška posebna" 
    
    Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
    suscipit purus quis nisi commodo, vel commodo justo fringilla.
    Curabitur convallis fermentum tincidunt. Aliquam erat volutpat." />
  </div>

  <div className='p-10'>
    <Card Slika={jopa} 

    Naslov="Jopa moška" 
    
    Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
    suscipit purus quis nisi commodo, vel commodo justo fringilla.
    Curabitur convallis fermentum tincidunt. Aliquam erat volutpat." />
  </div>

  <div className='p-10'>
    <Card Slika={jopa1} 

    Naslov="Jopa moška posebna" 
    
    Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
    suscipit purus quis nisi commodo, vel commodo justo fringilla.
    Curabitur convallis fermentum tincidunt. Aliquam erat volutpat." />
  </div>

  <div className='p-10'>
    <Card Slika={kapa} 

    Naslov="Kapa" 
    
    Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
    suscipit purus quis nisi commodo, vel commodo justo fringilla.
    Curabitur convallis fermentum tincidunt. Aliquam erat volutpat." />
  </div>

  <div className='p-10'>
    <Card Slika={kapa1} 

    Naslov="Kapa posebna" 
    
    Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
    suscipit purus quis nisi commodo, vel commodo justo fringilla.
    Curabitur convallis fermentum tincidunt. Aliquam erat volutpat." />
  </div>
    
        </Carousel>
       
 </>
  )
}

export default CardTrgovina
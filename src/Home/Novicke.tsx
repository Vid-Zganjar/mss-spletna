import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card';
import rusuce from "../Slike/IMG_9211-ezgif.com-video-to-gif-converter.gif"
import cistilna from "../Slike/cistilna.jpg"
import hallowen from "../Slike/hallowen.jpg"
import kres from "../Slike/kres.jpg"
import tkPav from "../Slike/tkPav.jpg"
function Novicke() {
 

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
          return (
            <>
            <h2 className='text-center text-4xl lg:text-6xl font-bold'>Sveže novičke</h2>
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
        <Card Slika={tkPav} 
    
        Naslov="Majica moška" 
    
        Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        suscipit purus quis nisi commodo, vel commodo justo fringilla.
        Curabitur convallis fermentum tincidunt. Aliquam erat volutpat." />
      </div>

      <div className='p-10'>
        <Card Slika={kres} 
    
        Naslov="Kresovanje na Kalu" 
    
        Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        suscipit purus quis nisi commodo, vel commodo justo fringilla.
        Curabitur convallis fermentum tincidunt. Aliquam erat volutpat." />
      </div>

      <div className='p-10'>
        <Card Slika={hallowen} 
    
        Naslov="After Hallowen Party" 
    
        Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        suscipit purus quis nisi commodo, vel commodo justo fringilla.
        Curabitur convallis fermentum tincidunt. Aliquam erat volutpat." />
      </div>

      <div className='p-10'>
        <Card Slika={rusuce} 
    
        Naslov="Projekt rusuce" 
    
        Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        suscipit purus quis nisi commodo, vel commodo justo fringilla.
        Curabitur convallis fermentum tincidunt. Aliquam erat volutpat." />
      </div>

      <div className='p-10'>
        <Card Slika={cistilna} 
    
        Naslov="Čistilna akcija Rupa" 
    
        Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        suscipit purus quis nisi commodo, vel commodo justo fringilla.
        Curabitur convallis fermentum tincidunt. Aliquam erat volutpat." />
      </div>
    
    
            </ Carousel>
            </>
          );
        };

export default Novicke
import React from 'react';
import slika from "../Slike/about.jpg"
const SimplAbout = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-2xl lg:max-w-6xl mx-auto flex">
      <div className="w-1/2 p-8">
          <img
            src={slika}
            alt="Slika"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-1/2 lg:p-10">
          <h2 className="text-3xl font-bold mb-4">Kdo smo</h2>
          <p className="text-sm   lg:text-lg mb-4 text-balance">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            suscipit purus quis nisi commodo, vel commodo justo fringilla.
            Curabitur convallis fermentum tincidunt. Aliquam erat volutpat.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Več
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default SimplAbout;

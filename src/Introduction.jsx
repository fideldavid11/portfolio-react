import React from 'react';
import backgroundVideo from './assets/BackgroundVideo.mp4';
import imgbackend from './assets/icon_backend.png';
import iconphone from './assets/icon_phone.png';
import iconweb from './assets/icon_web.png';
import imglearning from './assets/machine_learning.png';

const Introduction = () => {
  return (
    <div id="introduction" className="relative overflow-hidden min-h-screen">
      <video autoPlay loop muted className="absolute top-0 left-0 z-[-1] w-full h-full object-cover">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Contenedor del contenido */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center max-w-6xl px-6 py-12 w-full">
          {/* Subtítulo con animación */}
          <h1 className="text-white text-4xl font-bold animate-fade-in mb-6 md:mb-12">Habilidades</h1>

          {/* Contenido de las tarjetas */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-[-2] w-full justify-items-center">
            <div className="bg-white bg-opacity-30 rounded-2xl p-4 md:p-6 text-center card">
              <img src={imgbackend} alt="Backend" className="w-16 h-16 md:w-24 md:h-24 filter invert" />
              <h2 className="text-white text-sm md:text-lg mt-2 md:mt-4">Backend</h2>
            </div>
            <div className="bg-white bg-opacity-30 rounded-2xl p-4 md:p-6 text-center card">
              <img src={imglearning} alt="Machine Learning" className="w-16 h-16 md:w-24 md:h-24 filter invert ml-6" />
              <h2 className="text-white text-sm md:text-lg mt-2 md:mt-4">Machine Learning</h2>
            </div>
            <div className="bg-white bg-opacity-30 rounded-2xl p-4 md:p-6 text-center card">
              <img src={iconweb} alt="Web" className="w-16 h-16 md:w-24 md:h-24 filter invert" />
              <h2 className="text-white text-sm md:text-lg mt-2 md:mt-4">Web</h2>
            </div>
            <div className="bg-white bg-opacity-30 rounded-2xl p-4 md:p-6 text-center card sm:mt-[-10]">
              <img src={iconphone} alt="Phone" className="w-16 h-16 md:w-24 md:h-24 filter invert" />
              <h2 className="text-white text-sm md:text-lg mt-2 md:mt-4">Phone</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;



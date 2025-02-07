import { Link } from 'react-router-dom';

function Hero() {
    return (
      <div 
        className="relative h-[400px] md:h-[600px] bg-cover bg-center"

        style={{ 
          backgroundImage: 'url("/hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center relative z-10 text-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 font-cursive">
            Nourishing Communities,
            <br />
            One Crop at a Time
          </h1>
          
          <p className="text-white text-base md:text-lg max-w-2xl mb-8 px-4">
            Support local agriculture and indulge in the freshest, hand-picked produce. Our platform connects you directly with farmers dedicated to quality and sustainable growth.
          </p>
  
          <button className="bg-green-600 hover:bg-[#8DD959] text-white font-semibold py-2 md:py-3 px-6 md:px-8 rounded-md text-base md:text-lg transition-colors">
            Learn more
          </button>
        </div> 
      </div>
    );
  }
  
  export default Hero; 
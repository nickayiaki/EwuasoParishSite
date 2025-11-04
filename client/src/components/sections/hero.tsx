import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative text-white py-36 min-h-[900px] overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-red-950 animate-pulse"></div>
      
      {/* Animated background images */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-80 transition-opacity duration-2000"
          style={{
            backgroundImage: "url('/Images/bkground1.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'heroSlide 12s infinite, slowZoom 12s infinite'
          }}
        ></div>
        <div 
          className="absolute inset-0 opacity-0 transition-opacity duration-2000"
          style={{
            backgroundImage: "url('/Images/church1.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'heroSlide 12s infinite 4s, slowZoom 12s infinite 4s'
          }}
        ></div>
        <div 
          className="absolute inset-0 opacity-0 transition-opacity duration-2000"
          style={{
            backgroundImage: "url('/Images/church 2.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'heroSlide 12s infinite 8s, slowZoom 12s infinite 8s'
          }}
        ></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-6 h-6 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-20 w-8 h-8 bg-white/10 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-white/15 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
            Ewuaso Parish
          </h1>
          <p className="text-2xl md:text-3xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-90">
            Serving God and our Maasai community in Kajiado County
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              className="bg-gradient-to-r from-red-800 to-red-900 hover:from-red-900 hover:to-red-950 text-white px-10 py-6 text-xl font-semibold transform hover:scale-105 transition-all duration-200 shadow-xl group"
              onClick={() => scrollToSection('donation')}
            >
              <Heart className="mr-3" size={24} />
              Support Our Mission
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={24} />
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-red-900 px-10 py-6 text-xl font-semibold transform hover:scale-105 transition-all duration-200 backdrop-blur-sm bg-white/10"
              onClick={() => scrollToSection('branches')}
            >
              Mass Times & Locations
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-300">3</div>
              <div className="text-base opacity-80">Churches</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-300">200+</div>
              <div className="text-base opacity-80">Families Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-300">50+</div>
              <div className="text-base opacity-80">Students Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-300">15+</div>
              <div className="text-base opacity-80">Years of Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
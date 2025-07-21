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
    <section id="home" className="relative text-white py-20 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-pink-700 animate-pulse"></div>
      
      {/* Animated background images */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-80 transition-opacity duration-2000"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'heroSlide 12s infinite, slowZoom 12s infinite'
          }}
        ></div>
        <div 
          className="absolute inset-0 opacity-0 transition-opacity duration-2000"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1520637836862-4d197d17c952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'heroSlide 12s infinite 4s, slowZoom 12s infinite 4s'
          }}
        ></div>
        <div 
          className="absolute inset-0 opacity-0 transition-opacity duration-2000"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af2ac0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'heroSlide 12s infinite 8s, slowZoom 12s infinite 8s'
          }}
        ></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-white/10 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-white/15 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
            Ewuaso Parish
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            Serving God and our Maasai community in Kajiado County
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-xl group"
              onClick={() => scrollToSection('donation')}
            >
              <Heart className="mr-2" size={20} />
              Support Our Mission
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200 backdrop-blur-sm bg-white/10"
              onClick={() => scrollToSection('branches')}
            >
              Mass Times & Locations
            </Button>
          </div>
          
          {/* Quick stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-300">3</div>
              <div className="text-sm opacity-80">Churches</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-300">200+</div>
              <div className="text-sm opacity-80">Families Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-300">50+</div>
              <div className="text-sm opacity-80">Students Supported</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-300">15+</div>
              <div className="text-sm opacity-80">Years of Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

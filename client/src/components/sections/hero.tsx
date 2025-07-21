import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-r from-parish-blue to-parish-teal text-white py-20">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Ewuaso Parish</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          A Catholic community dedicated to serving God and our neighbors through faith, hope, and love
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-parish-gold hover:bg-amber-600 text-white px-8 py-3 text-lg font-semibold"
            onClick={() => scrollToSection('contact')}
          >
            Join Our Community
          </Button>
          <Button 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-parish-blue px-8 py-3 text-lg font-semibold"
            onClick={() => scrollToSection('branches')}
          >
            Mass Times
          </Button>
        </div>
      </div>
    </section>
  );
}

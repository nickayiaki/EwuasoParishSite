import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Church, Heart } from "lucide-react";

const navigation = [
  { name: "Home", href: "home" },
  { name: "About", href: "pastor" },
  { name: "Churches", href: "branches" },
  { name: "Ministries", href: "ministries" },
  { name: "Programs", href: "programs" },
  { name: "Projects", href: "projects" },
  { name: "Donate", href: "donation" },
  { name: "Contact", href: "contact" }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
              <Church className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Ewuaso Parish
              </h1>
              <p className="text-xs text-gray-600">Kajiado County</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 hover:underline underline-offset-4"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Donate Button (Desktop) */}
          <div className="hidden lg:block">
            <Button 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 transition-all duration-200 group"
              onClick={() => scrollToSection('donation')}
            >
              <Heart className="mr-2" size={16} />
              Support Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-gray-700 hover:text-orange-600 font-medium py-2 transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white mt-4 w-full"
                onClick={() => scrollToSection('donation')}
              >
                <Heart className="mr-2" size={16} />
                Support Our Mission
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
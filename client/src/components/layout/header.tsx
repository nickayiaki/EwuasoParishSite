import { useState } from "react";
import { Cross, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-parish-blue rounded-full flex items-center justify-center">
              <Cross className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Ewuaso Parish</h1>
              <p className="text-sm text-gray-600">Catholic Community</p>
            </div>
          </div>
          
          <nav className="hidden lg:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-parish-blue transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('branches')}
              className="text-gray-700 hover:text-parish-blue transition-colors"
            >
              Our Branches
            </button>
            <button 
              onClick={() => scrollToSection('ministries')}
              className="text-gray-700 hover:text-parish-blue transition-colors"
            >
              Ministries
            </button>
            <button 
              onClick={() => scrollToSection('programs')}
              className="text-gray-700 hover:text-parish-blue transition-colors"
            >
              Programs
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-parish-blue transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-parish-blue transition-colors"
            >
              Contact
            </button>
          </nav>
          
          <button 
            className="lg:hidden text-gray-700 hover:text-parish-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-parish-blue transition-colors py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('branches')}
                className="text-left text-gray-700 hover:text-parish-blue transition-colors py-2"
              >
                Our Branches
              </button>
              <button 
                onClick={() => scrollToSection('ministries')}
                className="text-left text-gray-700 hover:text-parish-blue transition-colors py-2"
              >
                Ministries
              </button>
              <button 
                onClick={() => scrollToSection('programs')}
                className="text-left text-gray-700 hover:text-parish-blue transition-colors py-2"
              >
                Programs
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left text-gray-700 hover:text-parish-blue transition-colors py-2"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-parish-blue transition-colors py-2"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

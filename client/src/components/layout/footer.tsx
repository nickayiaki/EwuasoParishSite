import { Church, MapPin, Phone, Mail, Heart, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Parish Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
                <Church className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Ewuaso Parish</h3>
                <p className="text-gray-400 text-sm">Kajiado County</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              A Catholic community dedicated to serving God and our Maasai neighbors through faith, hope, and love in Kajiado County, Kenya.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <Facebook size={16} />
              </div>
              <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors cursor-pointer">
                <Instagram size={16} />
              </div>
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                <Twitter size={16} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('pastor')}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-left"
                >
                  About Father Mpete
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('branches')}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-left"
                >
                  Mass Times
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('ministries')}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-left"
                >
                  Our Ministries
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('programs')}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-left"
                >
                  Programs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-left"
                >
                  Community Projects
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">Rescue Center</li>
              <li className="text-gray-300">Parish Kindergarten</li>
              <li className="text-gray-300">Food Relief Program</li>
              <li className="text-gray-300">Scholarship Program</li>
              <li className="text-gray-300">Disability Support</li>
              <li className="text-gray-300">Community Farming</li>
              <li className="text-gray-300">Livestock Program</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-orange-400 mr-3 mt-1 flex-shrink-0" size={16} />
                <div className="text-gray-300 text-sm">
                  Ewuaso Parish, Suswa<br />
                  P.O. Box 123<br />
                  Kajiado County, Kenya
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="text-orange-400 mr-3 flex-shrink-0" size={16} />
                <div className="text-gray-300 text-sm">
                  +254 712 345 678
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="text-orange-400 mr-3 flex-shrink-0" size={16} />
                <div className="text-gray-300 text-sm">
                  info@ewuasoparish.org
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Donation CTA */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-center">
            <Heart className="mx-auto mb-4 text-white" size={32} />
            <h3 className="text-2xl font-bold mb-2">Support Our Mission</h3>
            <p className="mb-4 opacity-90">Help us continue serving our Kajiado County community</p>
            <button 
              onClick={() => scrollToSection('donation')}
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 duration-200"
            >
              Donate Now
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Ewuaso Parish, Kajiado County. All rights reserved. | Built with love for our community
          </p>
        </div>
      </div>
    </footer>
  );
}
import { Cross, Facebook, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-parish-blue rounded-full flex items-center justify-center">
                <Cross className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-bold">Ewuaso Parish</h3>
            </div>
            <p className="text-gray-400 mb-4">
              A Catholic community dedicated to serving God and our neighbors through faith, hope, and love.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Churches</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Suswa Church</a></li>
              <li><a href="#" className="hover:text-white">Saikerri Church</a></li>
              <li><a href="#" className="hover:text-white">Enkorika Church</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Rescue Center</a></li>
              <li><a href="#" className="hover:text-white">Kindergarten</a></li>
              <li><a href="#" className="hover:text-white">Scholarship Program</a></li>
              <li><a href="#" className="hover:text-white">Food Relief</a></li>
              <li><a href="#" className="hover:text-white">Disability Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Mass Times</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <div>
                <div className="font-semibold text-white">Suswa Church</div>
                <div>Sunday: 8:00 AM & 10:30 AM</div>
              </div>
              <div>
                <div className="font-semibold text-white">Saikerri Church</div>
                <div>Sunday: 9:00 AM</div>
              </div>
              <div>
                <div className="font-semibold text-white">Enkorika Church</div>
                <div>Sunday: 10:00 AM</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Ewuaso Parish. All rights reserved. Built with love for our community.</p>
        </div>
      </div>
    </footer>
  );
}

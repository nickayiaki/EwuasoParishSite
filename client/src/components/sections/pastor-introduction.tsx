import { Button } from "@/components/ui/button";
import { Heart, Users, ArrowRight } from "lucide-react";

export default function PastorIntroduction() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pastor" className="py-16 bg-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiIGZpbGw9IiNGRjZBMDAiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Pastor Info */}
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-red-900 to-red-950 bg-clip-text text-transparent mb-6">Meet Father Mpete</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Leading Ewuaso Kedong Parish in the Catholic Diocese of Ngong, serving dispersed Maasai communities across a vast remote area since the parish opened in 2004.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Multiple mass centers including Saikeri, Najile, Enkorika & Empaash, the Marie Adelaide girls' rescue center, kindergarten, and community development programs flourish under his pastoral care.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-800 to-red-900 rounded-full flex items-center justify-center mr-3">
                    <Heart className="text-white" size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-900">Pastoral Care</h3>
                </div>
                <p className="text-gray-600 text-sm">Providing spiritual guidance and support to families throughout Kajiado County</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-3">
                    <Users className="text-white" size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-900">Community Leadership</h3>
                </div>
                <p className="text-gray-600 text-sm">Leading initiatives that strengthen community bonds and improve lives</p>
              </div>
            </div>
            
            <Button 
              className="bg-gradient-to-r from-red-800 to-red-900 hover:from-red-900 hover:to-red-950 text-white px-8 py-3 transition-all duration-200 group"
              onClick={() => scrollToSection('contact')}
            >
              Meet Father Mpete
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Button>
          </div>
          
          {/* Pastor Image */}
          <div className="animate-fade-in" style={{animationDelay: '200ms'}}>
            <div className="relative">
              <img 
                src="/Images/father.jpg" 
                alt="Father Mpete, Pastor of Ewuaso Parish" 
                className="w-full h-96 object-cover rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">Father Mpete</h3>
                <p className="opacity-90">Parish Priest & Community Leader</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Brother Vincent Section */}
        <div className="mt-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/Images/brother2.jpg" 
                alt="Brother Vincent" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Brother Vincent</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Leading community development, farm and livestock programs for sustainable agriculture in Kajiado County.
              </p>
              <div className="flex items-center text-green-600 font-semibold">
                <Users className="mr-2" size={16} />
                <span>Project Manager & Agricultural Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}